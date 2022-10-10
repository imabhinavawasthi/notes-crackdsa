import React, { useState } from "react";
import registerpic from "./register.svg";
import log from "./log.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { NavLink } from "react-router-dom";
import "./forgotpassword.css"

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();
  const [sucessmess, setSuccesmess] = useState("");
  const [errormess, setErrormess] = useState("");
  const auth = getAuth();
  const submitclick = (e) => {
    e.preventDefault();
    const auth = getAuth();
    if(email==""){
        setErrormess("Enter Email");
        setTimeout(() => {
            setErrormess('');
        }, 2000);
    }
    sendPasswordResetEmail(auth, email)
.then(() => {
// Password reset email sent!
// console.log("Password reset email sent!");
let msg='Password reset email sent to '+email;
setSuccesmess(msg);
// ..
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// console.log(errorMessage);
if(errorMessage=='Firebase: Error (auth/invalid-email).')
setErrormess('Invalid Email');
else if(errorMessage=='Firebase: Error (auth/user-not-found).')
setErrormess('User not found');
setTimeout(() => {
    setErrormess('');
}, 2000);
// ..
});
}
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {sucessmess&&<>
                <div className="ver-mess">
                {sucessmess}
                </div>
            </>}
            {!sucessmess&&<>
                <form className="sign-in-form">
              <h2 className="title">Forgot Password</h2>
              {errormess&&<>
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
                value="Reset Password"
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
