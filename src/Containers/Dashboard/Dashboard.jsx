import React, { useState, useEffect } from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import Tabs from '../../Components/utils/Tabs/Tabs.jsx';
import Avatar from 'react-avatar';
import ProblemList from '../Problems/ProblemList.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from '@fortawesome/free-solid-svg-icons';


const Dashboard = (props) => {
  const navigate = useNavigate()

  const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));

  if (!curruser) {
    navigate("/auth")
  }

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
    document.title="Dashboard"
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
              {/* <div className='row '>
                <div className='col-12'>
                  <div className='container mt-5 mb-3 d-flex justify-content-center align-items-center'>
                    <div className='row'>
                      <div className='col-2'></div>
                      <div className='col-4'>
                        <Avatar name={curruser.name} round={true} size={50} color={"var(--theme-color)"} />
                      </div>
                      <div className='col-2'></div>
                      <div className='col-4'>
                        {wish}<br/>{curruser.name}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <hr /> */}
              <div className='row'>
              <div style={{ position: "fixed", top: "0", backgroundColor:"var(--theme-color)", color:"white" }} class="alert alert-primary" role="alert">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHandshake}/> Hey <strong>{curruser?.name}</strong>, we are still in beta, sorry for half cooked experience.
              </div>
              </div>
              <div className='row mt-5 p-3 pt-0'>

                <div style={{marginTop:"30px"}}>
                  <ProblemList />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <Footer />
          </div>
        </Sidebar>
      }
    </div>
  )
}

export default Dashboard 