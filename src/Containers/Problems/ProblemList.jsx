import React, { useEffect, useState } from 'react'
import "./problemlist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheckCircle, faCode, faTags, faTerminal } from "@fortawesome/free-solid-svg-icons";
import RowProblem from './RowProblem.jsx';
import * as api from "../../axios.js"
import Loading from '../../Components/Loading/Loading.jsx';

const ProblemList = () => {
    const [problems, setProblems] = useState()
    const [problemsFilter, setProblemsFilter] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserID] = useState()
    const [nameSearch, setNameSearch] = useState("")
    const [statusSearch, setStatusSearch] = useState("")
    const [topicSearch, setTopicSearch] = useState("")
    const [platformSearch, setPlatformSearch] = useState("")

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

    useEffect(() => {
        const filterData = async () => {
            setProblemsFilter(problems);
            if(nameSearch!="")
            setProblemsFilter(problems.filter(detail => detail?.title.toLowerCase().includes(nameSearch.toLowerCase())));
            if(statusSearch!="")
            {
                if(statusSearch=="1"){
                    setProblemsFilter(problems.filter(detail => detail?.isSolved==true));
                }
                else{
                    setProblemsFilter(problems.filter(detail => detail?.isSolved==false));
                }
            }
            if(topicSearch!=""){
                setProblemsFilter(problems.filter(detail => detail?.topic.includes(topicSearch)));
            }
        }
        filterData()

    }, [problems,nameSearch,topicSearch,platformSearch,statusSearch])

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
                                                <input onChange={(e)=>{setNameSearch(e.target.value);}} type="text" class="form-control" placeholder="Enter Problem Name" id="keywords" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <div class="select-container">
                                                <select onChange={(e)=>{setStatusSearch(e.target.value)}} class="custom-select">
                                                    <option value="" selected="">Status</option>
                                                    <option value="1">Solved</option>
                                                    <option value="2">Unsolved</option>
                                                    <option value="">All</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 my-2">
                                            <div class="select-container">
                                                <select onChange={(e)=>{setTopicSearch(e.target.value)}} class="custom-select">
                                                    <option value="" selected="">Topic/Tag</option>
                                                    <option value="">All</option>
                                                    <option value="Binary Search">Binary Search</option>
                                                    <option value="Dynamic Programming">Dynamic Programming</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <div class="select-container">
                                                <select onChange={(e)=>{setPlatformSearch(e.target.value)}} class="custom-select">
                                                    <option value="" selected="">Platform</option>
                                                    <option value="">All</option>
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
                                        <div class="col-md-6 col-lg-2 my-2">
                                            <button onClick={(e)=>{e.preventDefault();}} style={{ backgroundColor: "white", color: "var(--theme-color)" }} type="button" class="button-css" id="contact-submit">
                                                Reset Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="filter-result ">
                                {problemsFilter?.map((problem) => {
                                    return (
                                        <RowProblem problem={problem} />
                                    )
                                })||<div style={{height:"500px"}} ><Loading a="w"/></div>}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProblemList