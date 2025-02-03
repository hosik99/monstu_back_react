import { CategoryLogDTO } from "../../hooks/types/CategoryLogDTO";
import { TableContainer, StyledTable, TableHeader, TableHeaderCell, TableCell, TableRow, NoDataMessage } from './style/miniListStyles.js';

function MiniCategoryLogList({ list }: { list: CategoryLogDTO[] }) {
    if (!Array.isArray(list) || list.length === 0) {
      return <div className="no-data-message">No Data</div>;
    }
  
    return (
      <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>View Count</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {list.map((log, index) => (
            <TableRow key={log.id}>
              <TableCell>{log.category ? log.category : "No Category"}</TableCell>
              <TableCell>{log.viewCount.toString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    );
  }
  
  export default MiniCategoryLogList;