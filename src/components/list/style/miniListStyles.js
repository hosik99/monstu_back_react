import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  table-layout: auto;
`;

export const TableHeader = styled.thead`
  background-color: #f8f8f8;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 20px;
  border-bottom: 2px solid #ddd;
  color: #333;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 12px 20px;
  border-bottom: 1px solid #ddd;
  color: #555;
  font-size: 1rem;
  text-align: left;
  word-wrap: break-word;
`;

export const TableRow = styled.tr`
  background-color: #fafafa;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const NoDataMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
  color: #888;
  font-weight: 600;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  display: inline-block;
`;