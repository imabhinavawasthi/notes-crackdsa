import React, { useDebugValue, useState } from 'react'
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import "./profile.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Avatar from 'react-avatar';
import * as api from "../../axios.js"
import Skeleton from 'react-loading-skeleton';
import Badge1 from '../../Components/Badge/Badge1.jsx';
import Badge5 from '../../Components/Badge/Badge5.jsx';
import Badge4 from '../../Components/Badge/Badge4.jsx';
import Badge3 from '../../Components/Badge/Badge3.jsx';
import Badge2 from '../../Components/Badge/Badge2.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Profile = () => {
  const navigate = useNavigate()

  const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));
  useEffect(() => {
    if (!curruser) {
      navigate("/");
    }

  }, [curruser])
  const [userDetails, setUserDetails] = useState();
  const [noOfProblems,setNoOfProblems]=useState();

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.fetchProblems();
      setUserDetails(res?.data?.data);
      setNoOfProblems(res?.data?.data?.todos.length)
    }
    fetchData()
    document.title=`Profile | ${curruser?.name}`;
  }, []);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function convertDate(date_str) {
  const temp_date = date_str.split("-");
  return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
}
  return (
    <div>
      {curruser &&
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
          <section class="vh-100" style={{ "background-color": "#f4f5f7" }}>
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-6 mb-4 mb-lg-0">
                  <div class="card mb-3" style={{ "border-radius": ".5rem" }}>
                    <div class="row g-0">
                      <div class="col-md-4 gradient-custom text-center text-white"
                        style={{ "border-top-left-radius": ".5rem", "border-bottom-left-radius": ".5rem" }}>
                        {userDetails?<div>
                          {noOfProblems>=100&&<div className='img-fluid my-5'><Badge5 /></div>}
                          {noOfProblems>=70&&noOfProblems<100&&<div className='img-fluid my-5'><Badge4 /></div>}
                          {noOfProblems>=40&&noOfProblems<70&&<div className='img-fluid my-5'><Badge3 /></div>}
                          {noOfProblems>=15&&noOfProblems<40&&<div className='img-fluid my-5'><Badge2 /></div>}
                          {noOfProblems<15&&<div className='img-fluid my-5'><Badge1 /></div>}
                        </div>:<div className='img-fluid my-5'><Skeleton  width={80} height={80} circle={true} /></div>}
                        {/* <Avatar className="img-fluid my-5" round={true} name={curruser?.name} /> */}
                        <strong><h4 className='mt-2' >{curruser?.name}</h4></strong>
                        <i class="far fa-edit mb-5"></i>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                          <strong><h5 style={{ color: "var(--theme-color)" }}>Information</h5></strong>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <strong><h6 style={{ color: "var(--theme-color)" }}>Email</h6></strong>
                              {userDetails ? <p class="text-muted">{userDetails?.email}</p> : <Skeleton />}
                            </div>
                            <div class="col-6 mb-3">
                              <strong><h6 style={{ color: "var(--theme-color)" }}>College</h6></strong>
                              {userDetails ? <p class="text-muted">{userDetails?.college}</p> : <Skeleton />}
                            </div>
                          </div>
                          <strong><h5 style={{ color: "var(--theme-color)" }}>Activity</h5></strong>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <strong><h6 style={{ color: "var(--theme-color)" }}>Problems Added</h6></strong>
                              {userDetails ? <p class="text-muted">{userDetails?.todos.length} Problems</p> : <Skeleton />}
                            </div>
                            <div class="col-6 mb-3">
                              <strong><h6 style={{ color: "var(--theme-color)" }}>Registered On</h6></strong>

                              {userDetails ? <p class="text-muted">{convertDate(userDetails?.date.substring(0, 10))}</p> : <Skeleton />}
                            </div>
                          </div>
                          {/* <div class="d-flex justify-content-start">
                            <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </Sidebar>
      }
    </div>
  )
}

export default Profile