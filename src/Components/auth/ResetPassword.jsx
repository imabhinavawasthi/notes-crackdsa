import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchorLock, faLock } from "@fortawesome/free-solid-svg-icons";
import "./signup.css"
import log from "./log.svg"
import { NavLink } from "react-router-dom";
import * as api from "../../axios.js"

const ResetPassword = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [pass, setPass] = useState()
    const [conpass, setConPass] = useState()
    const [logerrormess, setLogErrormess] = useState();
    const [loginfomess, setLogInfomess] = useState();
    const [logvermess, setLogVermess] = useState();
    const [logsuccessmess, setLogSuccessmess] = useState();
    if (!params.email) {
        navigate("/")
    }
    const resetPass = async (e) => {
        e.preventDefault()
        if (!pass || !conpass) {
            setLogErrormess("Please fill both the fields!")
            setLogInfomess()
            return;
        }
        else if (pass != conpass) {
            setLogErrormess("Password doesn't match!")
            setLogInfomess()
            return;
        }
        else {
            setLogInfomess("Updating New Password")
            let res = await api.resetPass({ email: params.email, new_password: pass });
            if (res.data.message == "user not exists") {
                setLogErrormess("Unauthorised Action")
                setLogInfomess()
                return;
            }
            else {
                setLogErrormess()
                setLogInfomess()
                setLogSuccessmess("done")

            }
        }
    }
    return (
        <div>
            {params?.email && <div>
                <>
                    <form className="sign-in-form mt-5">
                        <h2 className="title">Reset Password</h2>
                        {logerrormess && (<>
                            <div className="error-mess" >{logerrormess}</div>
                        </>)}
                        {loginfomess && <>
                            <div className="info-mess">
                                {loginfomess}
                            </div>
                        </>}
                        {logsuccessmess && <>
                            <div className="success-mess mt-5">
                                Password Reset Done, You Can <NavLink style={{textDecoration:"none"}} to="/auth">Login</NavLink> Now!
                            </div>
                        </>}
                        {!logsuccessmess&&
                        <div>
                        <div className="input-field">
                            <i>
                                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            </i>
                            <input
                                onChange={(e) => { setPass(e.target.value); setLogErrormess(); setLogInfomess(); }}
                                type="password"
                                placeholder="New Password"
                            />
                        </div>
                        <div className="input-field">
                            <i>
                                <FontAwesomeIcon icon={faAnchorLock}></FontAwesomeIcon>
                            </i>
                            <input
                                onChange={(e) => { setConPass(e.target.value); setLogErrormess(); setLogInfomess(); }}
                                type="text"
                                placeholder="Confirm Password"
                            />
                        </div>

                        <input
                            onClick={(e) => { resetPass(e) }}
                            type="submit"
                            value="Reset"
                            className="btn solid "
                        />
                        </div>
                        
                        }

                        <p className="for-pass mt-3">
                            Back to Login <NavLink style={{ textDecoration: "none" }} className="nav-col" to="/auth">Here</NavLink>
                        </p>
                    </form>
                </></div>}
        </div>
    )
}

export default ResetPassword