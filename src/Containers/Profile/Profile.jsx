import React from 'react'
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import "./profile.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Avatar from 'react-avatar';

const Profile = () => {
  const navigate=useNavigate()

  const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));
  
  useEffect(() => {
    if(!curruser){
      navigate("/");
    }
  
  }, [curruser])

  return (
    <div>
      {curruser&&
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
      <div class="container mt-5">

        <div class="row d-flex justify-content-center">

          <div class="col-md-10">

            <div class="card p-3 py-4">

              <div class="text-center">
              <Avatar name={curruser.name} round={true} size={80} color={"var(--theme-color)"} />
              </div>

              <div class="text-center mt-3">
                <span class="bg-info p-1 px-4 rounded text-white">Pro</span>
                <h5 class="mt-2 mb-0">{curruser.name}</h5>
                <span>{curruser.college}</span>

                <div class="px-4 mt-1">
                  <p class="fonts">student</p>

                </div>


              </div>

            </div>

          </div>

        </div>

      </div>
    </Sidebar>
      }
    </div>
  )
}

export default Profile