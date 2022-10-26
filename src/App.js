import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/auth/Signup.jsx"
import Dashboard from "./Containers/Dashboard/Dashboard.jsx";
import Profile from "./Containers/Profile/Profile.jsx";
import AddProblem from "./Containers/Problems/AddProblem.jsx"
import ProblemView from "./Containers/Problems/ProblemView.jsx";
import DsaSheet from "./Containers/Content/DsaSheet.jsx";
import ForgotPassword from "../src/Components/auth/ForgotPassword.jsx"
import Error404 from "./Components/Helpers/ErrorPage/Error404.jsx";
import ResetPassword from "./Components/auth/ResetPassword.jsx"
import TermsAndConditions from "./Components/Helpers/TermsAndConditions.jsx";

function App() {


  const user = JSON.parse(localStorage.getItem('crackdsa-user'));

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
          <Route exact path="/dashboard" element={<Dashboard curruser={user} />} />
          <Route exact path="/user/addproblem" element={<AddProblem />} />
          <Route exact path="/user/problem/:name/:id" element={<ProblemView />} />
          <Route exact path="/user/pofile" element={<Profile />} />
          <Route exact path="/dsasheet" element={<DsaSheet />} />
          {/* <Route exact path="/auth" element={<Auth/>} /> */}
          <Route exact path="/auth" element={<Signup/>} />
          <Route exact path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/auth/resetpassword/:email" element={<ResetPassword/>}/>
          <Route exact path="/terms&conditions" element={<TermsAndConditions/>}/>
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
