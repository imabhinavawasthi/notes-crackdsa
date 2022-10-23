import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheckCircle, faCode, faExclamationCircle, faTags, faTerminal } from "@fortawesome/free-solid-svg-icons";
import "./problemlist.css"
import { NavLink } from 'react-router-dom';


const RowProblem = (props) => {
    let leetcodeLogo="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
    let gfgLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png";
    let platform=props.problem?.platform;
    return (
        <div><div class="job-box d-md-flex align-items-center justify-content-between mb-3">
            <div class="job-left d-md-flex align-items-center flex-wrap">
            {props.problem?.isSolved?
                            <div><FontAwesomeIcon color='green' icon={faCheckCircle} /></div>:
                            <div>
                                <FontAwesomeIcon color="#8B8000"  icon={faExclamationCircle} />
                            </div>
                            }

                <div class="job-content">
                    
                    <ul class="ul-list-css d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li>
                        <a href={props.problem?.link} target="_blank" style={{textDecoration:"none",color:"black"}} ><h5 class="problem-list-hover-css">
                            {platform=="Leetcode"&&<img width="30px" src={leetcodeLogo} />}
                            {platform=="GeeksforGeeks"&&<img width="30px" src={gfgLogo} />}
                            &nbsp;&nbsp;&nbsp;{props.problem?.title}</h5></a>
                        </li>
                        <li className='mob-hidden-css' >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className='mob-hidden-css' >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li class="mr-4 problem-list-hover-css" >
                            <FontAwesomeIcon color='var(--theme-color)' icon={faCode} /> {props.problem?.platform} &nbsp;&nbsp;&nbsp;
                        </li>
                        <li class="mr-4 problem-list-hover-css">
                            {props.problem?.isSolved?
                            <div><FontAwesomeIcon color='green' icon={faCheckCircle} /> Solved&nbsp;&nbsp;&nbsp;</div>:
                            <div>
                                <FontAwesomeIcon color="#8B8000"  icon={faExclamationCircle} /> Unsolved&nbsp;&nbsp;&nbsp;
                            </div>
                            }
                            
                        </li>
                        <li class=" mr-4 problem-list-hover-css">
                            <FontAwesomeIcon color='blue' icon={faTags} /> {props.problem?.topic}&nbsp;&nbsp;&nbsp;
                        </li>
                    </ul>
                </div>
            </div>
            <div class="job-right my-4 flex-shrink-0">
            <NavLink to={`/user/problem/${props.problem.title}/${props.problem._id}`} target="_blank" style={{textDecoration:"none"}} ><button style={{ textDecoration: "none" }} class="button-css">Revise <FontAwesomeIcon color='white' icon={faArrowUpRightFromSquare} /></button></NavLink>
            </div>
        </div></div>
    )
}

export default RowProblem