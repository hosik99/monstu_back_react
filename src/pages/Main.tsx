import React, { useEffect, useState } from "react";
import { getPostLogs } from "../hooks/api/controller/postLogHandler";
import PostLogs from "../components/list/MiniPostLogList";
import { CustomPageableDTO } from "../hooks/types/CustomPageableDTO";
import MiniPostLogList from "../components/list/MiniPostLogList";
import { getCategoryLogs } from "../hooks/api/controller/categoryLogHandler";
import MiniCategoryLogList from "../components/list/MiniCategoryLogList";
import MainSidebar from "../components/MainSidebar";

function Main(){
    const [postLogList,setPostLogList] = useState([]);
    const [categoryLogList,setCategoryLogList] = useState([]);

    let PostLogPageableDTO: CustomPageableDTO = {
        page: 0,
        size: 5,
        sortValue: 'viewCount',
        sortDirection: 'DESC',
        filterOption: '',
        filterValue: '',
        dateOption: '',
        dateStart: '',
        dateEnd: ''
    };

    let CategoryLogPageableDTO: CustomPageableDTO = {
        page: 0,
        size: 5,
        sortValue: 'viewCount',
        sortDirection: 'DESC',
        filterOption: '',
        filterValue: '',
        dateOption: '',
        dateStart: '',
        dateEnd: ''
    };

    // GET ALL PostLogs with pageableDTO
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

    const refreshCategoryLogs = async () => {
        const result = await getCategoryLogs(CategoryLogPageableDTO);
        if(result.success){ 
            setCategoryLogList(result.data); 
        }
        else{
            setCategoryLogList([]);
            alert(result.message);
        }
    }

    useEffect(() => {
        refreshPostLogs();
        refreshCategoryLogs();
    },[]);

    return (
        <div>
            <MiniPostLogList list={postLogList} />
            <MiniCategoryLogList list={categoryLogList} />
        </div>
      );
}

export default Main;