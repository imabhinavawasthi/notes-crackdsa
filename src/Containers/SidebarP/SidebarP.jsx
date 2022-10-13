import React, { useEffect, useState } from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

const SidebarP = (props) => {
  
  const items = [
    <SidebarItem>
      <div className="">
        <div>
          <NavLink to="/" style={{ textDecoration: 'none' }}>hello</NavLink>

        </div>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-top">
        <NavLink to="/sellbuy" style={{ textDecoration: 'none' }}>hello</NavLink>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top mt-2">
      <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>hello</NavLink>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top mt-2">
        <NavLink to="/scoops" style={{ textDecoration: 'none' }}>hello</NavLink>
      </div>
    </SidebarItem>,
  ];
  return (
        <div>
          <Sidebar
            className="side-bar"
            content={items}
            width={200}
            background={"#FFF"}
            toggleIconColor={"#7B61FF"}
            color={"#000000"}
            activeHightlight={"#FFF"}
            hoverHighlight={"#FFF"}
            textAlign={"center"}
          >

            <div>
                hello content
            </div>
          </Sidebar>
        </div>
  );
};

export default SidebarP;
