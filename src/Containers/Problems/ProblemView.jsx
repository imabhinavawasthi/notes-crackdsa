import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer.jsx'
import { items } from "../../Containers/SidebarP/ItemsList.js"
import { Sidebar } from "react-responsive-sidebar";
import { useParams } from 'react-router-dom';
import * as api from "../../axios.js"
import "./problemview.css"

const ProblemView = () => {
  const params = useParams()

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
  let leetcodeLogo = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
  let gfgLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png";
  let platform = problemDetails?.platform;
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


      <div className='mt-5'>
        <Footer />
      </div>
    </Sidebar>


    </div >
  )
}

export default ProblemView