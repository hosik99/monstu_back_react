import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 250px; /* 사이드바 너비 */
  height: 100vh; /* 화면 높이에 맞춤 */
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const MenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }

  a {
    color: #ecf0f1; /* 흰색 */
    text-decoration: none;

    &:hover {
      color: #ffffff; /* 마우스를 올렸을 때 흰색으로 변경 */
    }
  }
`;
