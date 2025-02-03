import { CategoryLogDTO } from "../../hooks/types/CategoryLogDTO";
import { TableContainer, StyledTable, TableHeader, TableHeaderCell, TableCell, TableRow, NoDataMessage } from './style/miniListStyles.js';

function CategoryLogList({ list }: { list: CategoryLogDTO[] }) {
    if (!Array.isArray(list) || list.length === 0) {
      return <div className="no-data-message">No Data</div>;
    }
  
    return (
      <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>View Count</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {list.map((log, index) => (
            <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>{log.category ? log.category : "No Category"}</TableCell>
                <TableCell>{log.viewCount}</TableCell>
                <TableCell>{log.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    );
  }
  
  export default CategoryLogList;