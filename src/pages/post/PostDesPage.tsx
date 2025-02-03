import React, { useState,useEffect } from "react";
import { CustomPageableDTO } from "../../hooks/types/CustomPageableDTO";
import { getPostLogs } from "../../hooks/api/controller/postLogHandler";
import { getCategoryLogs } from "../../hooks/api/controller/categoryLogHandler";
import PostLogList from "../../components/list/PostLogList";
import CategoryLogList from "../../components/list/CategoryLogList";
import styled from "styled-components";

const PostDesPage = () => {

    const [postLogList,setPostLogList] = useState([]);
    const [categoryLogList,setCategoryLogList] = useState([]);

    const [postLogPageableDTO, setPLPageableDTO] = useState<CustomPageableDTO>({
        page: 0,
        size: 5,
        sortValue: 'viewCount',
        sortDirection: 'DESC',
        filterOption: '',
        filterValue: '',
        dateOption: '',
        dateStart: '',
        dateEnd: ''
    });

    const [categoryLogPageableDTO, setCategoryLogPageableDTO] = useState<CustomPageableDTO>({
        page: 0,
        size: 5,
        sortValue: 'viewCount',
        sortDirection: 'DESC',
        filterOption: '',
        filterValue: '',
        dateOption: '',
        dateStart: '',
        dateEnd: ''
    });

    

    const refreshPostLogs = async () => {
        const result = await getPostLogs(postLogPageableDTO);
        if(result.success){ 
            setPostLogList(result.data); 
        }
        else{
            setPostLogList([]);
            alert(result.message);
        }
    }

    const refreshCategoryLogs = async () => {
        const result = await getCategoryLogs(categoryLogPageableDTO);
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

    
    return(
        <div>

            Post Log
            <PostLogList list={postLogList} />

            Category Log
            <CategoryLogList list={categoryLogList} />

        </div>
    );
}


export default PostDesPage;