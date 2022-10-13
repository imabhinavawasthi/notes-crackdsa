import React, { useState } from "react";
import registerpic from "./register.svg";
import log from "./log.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./forgotpassword.css"
import "./signup.css"

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();
  const [sucessmess, setSuccesmess] = useState("");
  const [errormess, setErrormess] = useState("");
  const submitclick = () => {
    alert("done")
  }
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {sucessmess && <>
              <div className="ver-mess">
                {sucessmess}
              </div>
            </>}
            {!sucessmess && <>
              <form className="sign-in-form">
                <h2 className="title">Forgot Password</h2>
                {errormess && <>
                  <div className="error-mess">
                    {errormess}
                  </div>
                </>}
                <div className="input-field">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <input
                  onClick={submitclick}
                  type="submit"
                  value="Verify"
                  className="btn solid "
                />
              </form>
            </>
            }
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>How to remember your password?</h3>
              <p>
                Learn It!
              </p>
            </div>
            <img src={log} className="image" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
