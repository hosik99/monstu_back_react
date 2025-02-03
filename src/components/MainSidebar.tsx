import React from "react";
import { SidebarWrapper, SidebarLogo, SidebarMenu, MenuItem } from './style/sidebarStyles.js';
import { Link } from "react-router-dom";

const MainSidebar = () => {
    return (
        <SidebarWrapper>
          <SidebarLogo>MyApp</SidebarLogo>
          <SidebarMenu>
            <MenuItem><Link to="/">Main</Link></MenuItem>
            <MenuItem><Link to="/des/post">Post Describe</Link></MenuItem>
            <MenuItem><Link to="/mng/post">Post Management</Link></MenuItem>
            <MenuItem><Link to="/mng/post/cre">Post Create</Link></MenuItem>
            <MenuItem><Link to="/mng/post/log" >Post Log Management</Link> </MenuItem>

          </SidebarMenu>
        </SidebarWrapper>
      );
};

export default MainSidebar;
