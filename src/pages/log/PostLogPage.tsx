import React, { useEffect, useState } from "react";
import { CustomPageableDTO, decreasePage, increasePage, IncreasePage } from "../../hooks/types/CustomPageableDTO";
import { PostLogDTO, PostLogFilterArray } from "../../hooks/types/PostLogDTO";
import PostLogList from "../../components/list/PostLogList";
import { delPostLog, delPostLogs, getPostLogs } from "../../hooks/api/controller/postLogHandler";
import MsgPopup from "../../components/popupBox/MsgPopup";
import { handleInputChange } from "../../hooks/util/changeEventHandler";
import FilterBox from "../../components/filterBox/FilterBox";

const PostLogPage = () => {
    const [msg, setMsg] = useState<string>('');
    const [msgId, setMsgId] = useState<number>(0);
    const [postLogList,setPostLogList] = useState<PostLogDTO[]>([]);

    //체크된 요소 리스트
    const [selectedList, setSelectedList] = useState<string[]>([]);

    const [PostLogPageableDTO, setPLPageableDTO] = useState<CustomPageableDTO>({
        page: 0,
        size: 5,
        sortValue: "id",
        sortDirection: "DESC",
        filterOption: "",
        filterValue: "",
        dateOption: "",
        dateStart: "",
        dateEnd: "",
    });

    const postLogHandler = handleInputChange(setPLPageableDTO);

    const refreshPostLogs = async () => {
        const result = await getPostLogs(PostLogPageableDTO);
        if(result.success){ 
          setPostLogList(result.data); 
        }
        else{
          setPostLogList([]);
          alert(result.message);
        }
    }

    //Delete PostLogs use selectedList(ID List)
    const delPostLogHub = async () => {
      let result;
      if(selectedList.length === 0){
        setMsg('삭제 항목을 선택 해주세요'); 
        setMsgId((prevMsgId) => prevMsgId + 1);
        return;
      }
      if(selectedList.length > 1) {
        console.log('delPostLogs'); 
        result = await delPostLogs(selectedList);
      }
      else{
        console.log('delPostLog'); 
        result = await delPostLog(selectedList[0]);
      }

      if(result?.success){
        setSelectedList([]);
        refreshPostLogs();
      }
      else{alert(result.message);}
    }

    useEffect(() => {
        refreshPostLogs();
    },[PostLogPageableDTO]);

  return (
    <div>
        <FilterBox pageableDTO={PostLogPageableDTO} dto={PostLogFilterArray} handleChange={postLogHandler}/>

        <button onClick={refreshPostLogs}>Search</button>
        <button onClick={delPostLogHub}>Delete</button>
        <PostLogList list={postLogList} setSelectedList={setSelectedList} selectedList={selectedList}/>  
        <button onClick={()=>decreasePage(PostLogPageableDTO, setPLPageableDTO)}>-</button>
        <button onClick={()=>increasePage(PostLogPageableDTO, setPLPageableDTO)}>+</button>

        <MsgPopup msg={msg} id={msgId}/>
    </div>
  );
};

export default PostLogPage;
