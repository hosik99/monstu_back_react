import React from "react";
import { TableContainer, StyledTable, TableHeader, TableHeaderCell, TableCell, TableRow, NoDataMessage } from './style/miniListStyles.js';
import { PostLogDTO } from "../../hooks/types/PostLogDTO";

function MiniPostLogList({ list }: { list: PostLogDTO[] }) {
  if (!Array.isArray(list) || list.length === 0) {
    return <NoDataMessage>No Data</NoDataMessage>;
  }

  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>View Count</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {list.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.title ? log.title : "No Title"}</TableCell>
              <TableCell>{log.viewCount.toString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default MiniPostLogList;
