import React from 'react'
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import "./dsasheet.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DsaSheet = (props) => {

  const navigate=useNavigate()

  const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));
  
  useEffect(() => {
    if(!curruser){
      navigate("/");
    }
    document.title="DSA Sheet | Coming Soon";
  
  }, [curruser])
  return (
    <div>
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
          <div>
            <div class="wrapper-soon">
              <h1 class="h1-soon">coming soon<span class="dot">.</span></h1>
              <p class="p-soon">we are building DSA Sheet</p>
              <p class="p-soon" >Wanted to contribute?  <a style={{textDecoration:"none"}} href="#">Click Here</a></p>
              {/* <div class="icons-soon">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-youtube-play"></i></a>
                <a href=""><i class="fa fa-paper-plane"></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default DsaSheet