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
                            {platform=="HackerRank"&&<img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" />}
              {platform == "CodeChef" && <img width="30px" src="https://gitgud.io/uploads/-/system/group/avatar/12294/cc.png" />}
              {platform == "HackerEarth" && <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/800px-HackerEarth_logo.png" />}
              {platform == "TopCoder" && <img width="30px" src="https://cdn.iconscout.com/icon/free/png-256/topcoder-3629111-3030251.png" />}
              {platform == "Spoj" && <img width="30px" src="data:image/jpeg;base64,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" />}
              {platform == "CodeForces" && <img width="30px" src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png"/>}
              {platform == "AtCoder" && <img width="30px" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p1mckvzowm4fzzixscah"/>}
              {platform == "Other" && <img width="30px" src="https://icon2.cleanpng.com/20180203/tdw/kisspng-computer-programming-programmer-icon-design-softwa-coder-png-transparent-image-5a756d8976f6e6.1112940115176451934873.jpg"/>}
                            
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