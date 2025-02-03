import React, { useState } from "react";
import { TableContainer, StyledTable, TableHeader, TableHeaderCell, TableCell, TableRow, NoDataMessage } from './style/miniListStyles.js';
import { PrePostsDTO } from "../../hooks/types/PrePostsDTO";

function PrePostList({list}:{list:PrePostsDTO[]}) {


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
                <TableHeaderCell>Author</TableHeaderCell>
                <TableHeaderCell>Created At</TableHeaderCell>
                <TableHeaderCell>Updated At</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>State</TableHeaderCell>
                <TableHeaderCell>Is Public</TableHeaderCell>
              </tr>
            </TableHeader>
            <tbody>
              {list.map((prePost) => (
                <TableRow key={prePost.id}>
                  <TableCell>{prePost.id}</TableCell>
                  <TableCell>{prePost.title || "null"}</TableCell>
                  <TableCell>{prePost.author}</TableCell>
                  <TableCell>{prePost.createdAt.split('.')[0].replace("T","  ")}</TableCell>
                  <TableCell>{prePost.updatedAt.split('.')[0].replace("T","  ")}</TableCell>
                  <TableCell>{prePost.category}</TableCell>
                  <TableCell>{prePost.state}</TableCell>
                  <TableCell>{prePost.isPublic.toString()}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
    );

}

export default PrePostList;