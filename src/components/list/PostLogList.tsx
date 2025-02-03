import React, { useState } from "react";
import { TableContainer, StyledTable, TableHeader, TableHeaderCell, TableCell, TableRow, NoDataMessage } from './style/miniListStyles.js';
import { PostLogDTO } from "../../hooks/types/PostLogDTO";

// `withCheckbox` Prop을 통해 체크박스 여부를 관리
function PostLogList({ list, setSelectedList, selectedList }: { list: PostLogDTO[], setSelectedList?: React.Dispatch<React.SetStateAction<string[]>>, selectedList: string[] }) {

  const handleCheckbox = (id: string, checked: boolean) => {
    setSelectedList?.((prev) => {
      if (checked) {
        return [...prev, id];
      } else {
        return prev.filter((selectedList) => selectedList !== id);
      }
    });
  };

  const selectAll = () => {
    setSelectedList?.((prev) => {
      if (prev.length === list.length) {
        return [];  
      } else {
        return list.map((log) => log.id);  //새로운 배열을 반환
      }
    });
  };

  if (!Array.isArray(list) || list.length === 0) {
    return <NoDataMessage>No Data</NoDataMessage>;
  }

  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Post Id</TableHeaderCell>
            <TableHeaderCell>Author Id</TableHeaderCell>
            <TableHeaderCell>View Count</TableHeaderCell>
            <TableHeaderCell>Last View</TableHeaderCell>
            <TableHeaderCell>Created At</TableHeaderCell>
            {setSelectedList && <TableHeaderCell><button onClick={selectAll}>All</button></TableHeaderCell>}
          </tr>
        </TableHeader>
        <tbody>
          {list.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.id}</TableCell>
              <TableCell>{log.title || "null"}</TableCell>
              <TableCell>{log.postId}</TableCell>
              <TableCell>{log.authorId}</TableCell>
              <TableCell>{log.viewCount}</TableCell>
              <TableCell>{log.lastView}</TableCell>
              <TableCell>{log.createdAt}</TableCell>
              {setSelectedList && (
                <TableCell>
                  <input type="checkbox" 
                  checked={selectedList.includes(log.id)} 
                  onChange={(e) => handleCheckbox(log.id, e.target.checked)}/>
                </TableCell>
              )}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default PostLogList;
