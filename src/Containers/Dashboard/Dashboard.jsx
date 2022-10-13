import React from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";

const Dashboard = (props) => {
  const curruser=props.curruser;
  return (
    <div >
      {
        curruser &&
        <Sidebar
          className="side-bar"
          content={items}
          width={220}
          background={"#FFF"}
          toggleIconColor={"#209dbb"}
          color={"#000000"}
          activeHightlight={"#FFF"}
          hoverHighlight={"#FFF"}
          textAlign={"center"}
        >
          <div className='dashb-back-color-css'>
            dashboard
          </div>
        </Sidebar>
      }
    </div>
  )
}

export default Dashboard 