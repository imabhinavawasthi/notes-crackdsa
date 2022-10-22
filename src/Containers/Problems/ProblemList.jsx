import React, { useEffect, useState } from 'react'
import "./problemlist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheckCircle, faCode, faTags, faTerminal } from "@fortawesome/free-solid-svg-icons";
import RowProblem from './RowProblem.jsx';
import * as api from "../../axios.js"

const ProblemList = () => {
    const [problems, setProblems] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserID] = useState()

    useEffect(() => {
        const fetchData = async () => {
            let res = await api.fetchProblems();

            setName(res.data.data.name);
            setEmail(res.data.data.email);
            setUserID(res.data.data._id);
            setProblems(res.data.data.todos);
        }
        fetchData()

    }, [])
    return (
        <div>


            <div class="container">

                <div class="row">
                    <div class="col-12 ">
                        {/* <div class="alert alert-success alert-fixed" role="alert">
                            <p style={{marginLeft:"10%"}}>This is a success alert—check it out!</p>
                        </div> */}
                        <div class="career-search mb-60">
                            <div className='search-css-list mb-5'>
                                <form class="career-form mb-60">
                                    <div style={{ width: "100%" }} class="row p-4">
                                        <div class="col-md-6 col-lg-3 my-2">
                                            <div class="input-group position-relative">
                                                <input type="text" class="form-control" placeholder="Enter Problem Name" id="keywords" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <div class="select-container">
                                                <select class="custom-select">
                                                    <option selected="">Status</option>
                                                    <option value="1">Jaipur</option>
                                                    <option value="2">Pune</option>
                                                    <option value="3">Bangalore</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <div class="select-container">
                                                <select class="custom-select">
                                                    <option selected="">Topic/Tag</option>
                                                    <option value="1">Ui designer</option>
                                                    <option value="2">JS developer</option>
                                                    <option value="3">Web developer</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <div class="select-container">
                                                <select class="custom-select">
                                                    <option selected="">Platform</option>
                                                    <option value="1">Ui designer</option>
                                                    <option value="2">JS developer</option>
                                                    <option value="3">Web developer</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 my-2">
                                            <button style={{ backgroundColor: "white", color: "var(--theme-color)" }} type="button" class="button-css" id="contact-submit">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="filter-result ">

                                {problems?.map((problem)=>{
                                    return(
                                        <RowProblem problem={problem} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProblemList