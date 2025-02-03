import { useEffect, useState } from "react";
import { CustomPageableDTO, decreasePage, increasePage } from "../../hooks/types/CustomPageableDTO";
import { getPrePostsDTOs } from "../../hooks/api/controller/postHandler";
import PrePostList from "../../components/list/PrePostList";
import { handleInputChange } from "../../hooks/util/changeEventHandler";
import FilterBox from "../../components/filterBox/FilterBox";
import { PrePostFilterArray } from "../../hooks/types/PrePostsDTO";

const PostMngPage = () => {

    const [postDTOList,setPostDTOList] = useState([]);

    const [postDTOPageDTO, setPostDTOPageDTO] = useState<CustomPageableDTO>({
        page: 0,
        size: 5,
        sortValue: 'id',
        sortDirection: 'DESC',
        filterOption: '',
        filterValue: '',
        dateOption: '',
        dateStart: '',
        dateEnd: ''
    });

    const prePostHandler = handleInputChange(setPostDTOPageDTO);
    
    const refreshPrePosts = async () => {
        const result = await getPrePostsDTOs(postDTOPageDTO);
        if(result.success){ 
            setPostDTOList(result.data); 
        }
        else{
            setPostDTOList([]);
        }
    }
        
    useEffect(() => {
        refreshPrePosts();
    },[]);

    return(
        <div>
            <FilterBox pageableDTO={postDTOPageDTO} dto={PrePostFilterArray} handleChange={prePostHandler}/>
            <button onClick={refreshPrePosts}>Search</button>
            <PrePostList list={postDTOList}/>
            <button onClick={()=>decreasePage(postDTOPageDTO, setPostDTOPageDTO)}>-</button>
            <button onClick={()=>increasePage(postDTOPageDTO, setPostDTOPageDTO)}>+</button>
        </div>
    );
}

export default PostMngPage;