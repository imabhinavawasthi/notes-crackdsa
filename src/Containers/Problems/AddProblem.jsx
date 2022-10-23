import React, { useState, useEffect } from 'react'
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";
import "./addproblem.css"
import { NavLink, useNavigate } from 'react-router-dom';
import * as api from "../../axios.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./problemlist.css"
import Loading from "../../Components/Loading/Loading.jsx"
import Footer from '../../Components/Footer/Footer.jsx';

//https://codepen.io/stack-findover/pen/OJRvPQv


const AddProblem = (props) => {
  const navigate = useNavigate()

  const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));

  useEffect(() => {
    if (!curruser) {
      navigate("/");
    }

  }, [curruser])


  const [isSolved, setIsSolved] = useState(true);
  const [problemName, setProblemName] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [problemDes, setProblemDes] = useState("");
  const [problemTopic, setProblemTopic] = useState("Other");
  const [problemPlatform, setProblemPlatform] = useState("Other");
  const [sloading,setSloading]=useState(false);
  const [error,setError]=useState({des:false,name:false,link:false})

  const submitform = async (e) => {
    e.preventDefault();

    if (!problemDes || !problemLink || !problemName) {
      if(!problemDes){
        setError({des:true,name:error.name,link:error.link})
      }
      if(!problemLink){
        setError({des:error.des,name:error.name,link:true})
      }
      if(!problemName){
        setError({des:error.des,name:true,link:error.link})
      }
      return;
    }
    setSloading(true);
    let res = await api.addProblem({ "title": problemName, "description": problemDes, "isSolved": isSolved, "link": problemLink, "topic": problemTopic, "platform": problemPlatform });
    setSloading(false);
    navigate(`/user/problem/${problemName}/${res?.data?.id}`)
  }
  return (
    <div>
      {curruser && <Sidebar
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
        <div>
          <div class="login-root addproblem-page-css">
            <div class="box-root flex-flex flex-direction--column" style={{ "min-height": "100vh", "flex-grow": "1" }}>
              <div class="loginbackground box-background--white padding-top--64">
                <div class="loginbackground-gridContainer">
                  <div class="box-root flex-flex" style={{ "grid-area": "top / start / 8 / end" }}>
                    <div class="box-root" style={{ "background-image": "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", "flex-grow": "1" }}>
                    </div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "4 / 2 / auto / 5" }}>
                    <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "6 / start / auto / 2" }}>
                    <div class="box-root box-background--blue800" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "7 / start / auto / 4" }}>
                    <div class="box-root box-background--blue animationLeftRight" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "8 / 4 / auto / 6" }}>
                    <div class="box-root box-background--gray100 animationLeftRight tans3s" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "2 / 15 / auto / end" }}>
                    <div class="box-root box-background--cyan200 animationRightLeft tans4s" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": "3 / 14 / auto / end" }}>
                    <div class="box-root box-background--blue animationRightLeft" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": " 4 / 17 / auto / 20" }}>
                    <div class="box-root box-background--gray100 animationRightLeft tans4s" style={{ "flex-grow": "1" }}></div>
                  </div>
                  <div class="box-root flex-flex" style={{ "grid-area": " 5 / 14 / auto / 17" }}>
                    <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ "flex-grow": "1" }}></div>
                  </div>
                </div>
              </div>
              <div class="box-root padding-top--24 flex-flex flex-direction--column" style={{ "flex-grow": "1", "z-index": "9" }}>
                <div class="formbg-outer">
                  <div class="formbg mt-4">
                    <div class="formbg-inner padding-horizontal--48">
                      <NavLink to="/" style={{ textDecoration: "none" }} className='mob-v-only mb-3'><FontAwesomeIcon icon={faArrowLeft} />Back</NavLink>
                      <form id="addproblem-form">
                        <h2 className='heading-addproblem mb-5'>Add Problem</h2>
                        <div style={{ width: "100%" }} class="career-form row p-0 mb-2">
                          <div class="col-md-12 col-lg-12 my-2">
                            <div class="input-group position-relative">
                              <input onChange={(e) => {setError({des:error.des,name:false,link:error.link}); setProblemName(e.target.value) }} type="text" class="form-control" placeholder="Enter Problem Name" id="keywords" />
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        {error.name&&<p style={{color:"red"}}>* Enter Problem Name</p>}
                        <div style={{ width: "100%" }} class="career-form row p-0 mb-2">
                          <div class="col-md-12 col-lg-12 my-2">
                            <div class="input-group position-relative">
                              <input onChange={(e) => { setError({des:error.des,name:error.name,link:false}); setProblemLink(e.target.value); }} type="text" class="form-control" placeholder="Enter Problem Link" id="keywords" />
                            </div>
                          </div>
                        </div>
                        {error.link&&<p style={{color:"red"}}>* Enter Problem Link</p>}
                        <div style={{ width: "100%" }} class="career-form row p-0 mb-2">
                          <div class="col-md-6 col-lg-6 my-2">
                            <div class="select-container">
                              <select onChange={(e) => { setProblemPlatform(e.target.value) }} class="custom-select">
                                <option value="Other" selected="">Platform</option>
                                <option value="Leetcode">Leetcode</option>
                                <option value="GeeksforGeeks">GeeksforGeeks</option>
                                <option value="HackerRank">HackerRank</option>
                                <option value="CodeChef">CodeChef</option>
                                <option value="HackerEarth">HackerEarth</option>
                                <option value="TopCoder">TopCoder</option>
                                <option value="Spoj">Spoj</option>
                                <option value="CodeForces">CodeForces</option>
                                <option value="AtCoder">AtCoder</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-6 my-2">
                            <div class="select-container">
                              <select onChange={(e) => { setProblemTopic(e.target.value) }} class="custom-select">
                                <option value="Other" selected="">Topic/Tag</option>
                                <option value="Binary Search">Binary Search</option>
                                <option value="Dynamic Programming">Dynamic Programming</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>

                        </div>
                        <div style={{ width: "100%" }} class="career-form row p-0 mb-4">
                          <div class="col-md-12 col-lg-12 my-2">
                            <div class="input-group position-relative">
                              <textarea onChange={(e) => {setError({des:false,name:error.name,link:error.link}); setProblemDes(e.target.value) }} placeholder='Write about the problem, your approach, important concepts etc.' style={{ "min-width": "100%" }} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>

                            </div>
                          </div>
                        </div>
                        {error.des&&<p style={{color:"red"}}>* Enter Problem Description</p>}
                        <div className='wrapper '>
                          <input checked={isSolved} className='input-display-none' onChange={(e) => { setIsSolved(true) }} type="radio" name="solved" value="solved" id="option-1" />
                          <input checked={!isSolved} className='input-display-none' onChange={(e) => { setIsSolved(false) }} type="radio" name="unsolved" value="unsolved" id="option-2" />
                          <label for="option-1" className="option option-b option-1">
                            <span>Solved</span>
                          </label>
                          <label for="option-2" className="option option-s option-2">
                            <span>Unsolved</span>
                          </label>
                        </div>
                        {sloading?<div className='mt-3'><Loading/></div>:<button onClick={(e) => { submitform(e) }} className='mt-5 button-css' type="submit" for="addproblem-form">Add Problem</button>}
                      </form>
                    </div>
                  </div>
                  {/* <div class="footer-link padding-top--24">
                    <span className='span-addproblem'>Don't have an account? <a href="">Sign up</a></span>
                    <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                      <span className='span-addproblem'><a href="#">© Stackfindover</a></span>
                      <span className='span-addproblem'><a href="#">Contact</a></span>
                      <span className='span-addproblem'><a href="#">Privacy & terms</a></span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>}
      
    </div>
  )
}

export default AddProblem