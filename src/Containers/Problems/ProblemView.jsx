import React, { useState, useEffect } from 'react'
import { Navigate, NavLink, useFetcher } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer.jsx'
import { items } from "../../Containers/SidebarP/ItemsList.js"
import { Sidebar } from "react-responsive-sidebar";
import { useParams } from 'react-router-dom';
import * as api from "../../axios.js"
import "./problemview.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendar, faCheckCircle, faClock, faCode, faExclamationCircle, faTags, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Skeleton from 'react-loading-skeleton';
import Loading from "../../Components/Loading/Loading.jsx"

const ProblemView = () => {
  const params = useParams()
  const [mark, setMark] = useState(false)
  const [problemDetails, setProblemDetails] = useState()

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.fetchProblemDetails({ _id: params.id });
      setProblemDetails(res?.data)
      console.log(res?.data);
    }
    fetchData()
    document.title = `${params.name}`

  }, [])
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function convertDate(date_str) {
    if (!date_str) return "";
    const temp_date = date_str.split("-");
    return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
  }
  let leetcodeLogo = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
  let gfgLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png";
  let platform = problemDetails?.platform;

  const markProblem = () => {
    setMark(true)
    let res = api.markProblem({ todo_id: params?.id });
    setTimeout(() => {

      window.location.reload()
    }, 1000);
  }

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
        {/* {params.id}
        {params.name}
        {problemDetails?.date}
        {problemDetails?.description}
        {problemDetails?.platform}
        {problemDetails?.title}
        {problemDetails?.topic} */}
        <div class=" position-relative mt-5 pt-5 p-5  p-md-5 m-md-3 text-center bg-light">
          <div class=" p-lg-5 mx-auto ">
            {problemDetails ? <h1 class="display-4 font-weight-normal">
              {platform == "Leetcode" && <img width="50px" src={leetcodeLogo} />}
              {platform == "GeeksforGeeks" && <img width="50px" src={gfgLogo} />}&nbsp;&nbsp;{params.name}&nbsp;&nbsp;&nbsp;<a target="__blank" href={problemDetails?.link}><FontAwesomeIcon color='#6c757d' icon={faArrowUpRightFromSquare} /></a></h1> : <Skeleton />}
            {problemDetails ? <ul class=" mt-3 mb-3 ul-list-css d-md-flex flex-wrap align-items-center justify-content-center text-capitalize ff-open-sans">

              <li class="mr-4 problem-list-hover-css" >
                <FontAwesomeIcon color='var(--theme-color)' icon={faCalendar} /> {convertDate(problemDetails?.date.substring(0, 10))} &nbsp;&nbsp;&nbsp;
              </li>
              {/* <li class="mr-4 problem-list-hover-css" >
  <FontAwesomeIcon color='var(--theme-color)' icon={faClock} /> {problemDetails?.date.substring(11, 19)} &nbsp;&nbsp;&nbsp;
</li> */}
            </ul> : <Skeleton />}
            {problemDetails ? <ul class=" mt-3 mb-3 ul-list-css d-md-flex flex-wrap align-items-center justify-content-center text-capitalize ff-open-sans">

              <li class="mr-4 problem-list-hover-css" >
                <FontAwesomeIcon color='var(--theme-color)' icon={faCode} /> {problemDetails?.platform} &nbsp;&nbsp;&nbsp;
              </li>
              <li class="mr-4 problem-list-hover-css">
                {problemDetails?.isSolved ?
                  <div><FontAwesomeIcon color='green' icon={faCheckCircle} /> Solved&nbsp;&nbsp;&nbsp;</div> :
                  <div>
                    <FontAwesomeIcon color="#8B8000" icon={faExclamationCircle} /> Unsolved&nbsp;&nbsp;&nbsp;
                  </div>
                }

              </li>
              <li class=" mr-4 problem-list-hover-css">
                <FontAwesomeIcon color='blue' icon={faTags} /> {problemDetails?.topic}&nbsp;&nbsp;&nbsp;
              </li>
            </ul> : <Skeleton />}

            {problemDetails ? <>{mark && <Loading />}{!mark && problemDetails?.isSolved ? <p>Mark this problem as <button style={{ color: "grey", fontWeight: "bolder" }} className="remove-default" onClick={() => markProblem()}>Unsolved</button></p> : <p>Mark this problem as <button className="remove-default" style={{ color: "green", fontWeight: "bolder" }} onClick={() => markProblem()}>Solved</button></p>}</> : <Skeleton />}

            {problemDetails ? (<><p class="font-weight-normal mt-5 mb-5"><h6 className='problem-list-hover-css'><FontAwesomeIcon color='var(--theme-color)' icon={faInfoCircle} />&nbsp;Problem Desciption:</h6>&nbsp;&nbsp;&nbsp;{problemDetails?.description}</p>
              <button className='button-css'><a target="_blank" style={{ textDecoration: "none", color: "white" }} href={problemDetails?.link}>Practice Now</a></button></>) : <Skeleton />}
          </div>
        </div>

        <div className='mt-5'>
          <Footer />
        </div>
      </Sidebar>


    </div >
  )
}

export default ProblemView