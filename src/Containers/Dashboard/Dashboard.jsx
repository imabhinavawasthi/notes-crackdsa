import React, { useState, useEffect } from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import Tabs from '../../Components/utils/Tabs/Tabs.jsx';
import Avatar from 'react-avatar';

const Dashboard = (props) => {
  const curruser = props.curruser;
  var day = new Date();
  var hr = day.getHours();
  const [wish, setWish] = useState("");
  useEffect(() => {
    if (hr >= 4 && hr < 12) {
      setWish("Good Morning!");
    } else if (hr == 12) {
      setWish("Good Noon!");
    } else if (hr >= 12 && hr < 16) {
      setWish("Good Afternoon!");
    } else {
      setWish("Good Evening!");
    }
  }, [])

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
            <div className='container '>
              <div className='row'>
                <div className='col-6'>
                  <div className='container mt-5 mb-3 d-flex justify-content-center align-items-center'>
                    <div className='row'>
                      <div className='col-4'>
                        <Avatar name={curruser.name} round={true} size={80} color={"var(--theme-color)"} />
                      </div>
                      <div className='col-8'>
                        {wish}{curruser.name}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className='row'>
                <Tabs />
              </div>
            </div>

          </div>
        </Sidebar>
      }
    </div>
  )
}

export default Dashboard 