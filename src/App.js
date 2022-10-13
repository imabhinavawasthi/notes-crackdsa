import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/auth/Signup.jsx"
import Dashboard from "./Containers/Dashboard/Dashboard.jsx";
import Home from './Containers/Home/Home.jsx';
import Profile from "./Containers/Profile/Profile.jsx";
import AddProblem from "./Containers/Problems/AddProblem.jsx"
import ProblemView from "./Containers/Problems/ProblemView.jsx";
import DsaSheet from "./Containers/Content/DsaSheet.jsx";
import { useState,useEffect } from "react";
import ForgotPassword from "../src/Components/auth/ForgotPassword.jsx"

function App() {


  const [user, setUser] = useState("");
  function GetCurrentUser() {
    useEffect(() => {
      setUser(JSON.parse( localStorage.getItem("user")));
    }, []);
    return user;
  }
  GetCurrentUser();

  return (
    <div>
      <BrowserRouter>
        {user?
        <Routes>
        <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
        <Route exact path="/dashboard" element={<Dashboard curruser={user} />} />
        <Route exact path="/user/addproblem" element={<AddProblem/>} />
        <Route exact path="/user/problem" element={<ProblemView />} />
        <Route exact path="/user/pofile" element={<Profile />} />
        <Route exact path="/dsasheet" element={<DsaSheet/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>:
      <Routes>
      <Route exact path="/" element={<Navigate replace to="/auth" />} />
      <Route exact path="/auth" element={<Signup />} />
      <Route exact path="/auth/forgotpassword" element={<ForgotPassword/>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
