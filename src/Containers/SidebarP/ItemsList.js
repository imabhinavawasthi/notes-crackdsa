import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { NavLink } from "react-router-dom";
import logogif from "../../Components/assets/logo.gif"
import "./sidebar.css"
import {PersonLinesFill, BoxArrowInRight } from 'react-bootstrap-icons';
const logout=(e)=>{
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.reload(false);
}
export const items = [
  <SidebarItem>
    <div className="pt-3 pb-3">
        <NavLink to="/" style={{ textDecoration: 'none' }}><img className="logogif-css" src={logogif} alt="crackdsanoteslogo" /></NavLink>

    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="">
      <hr/>
        <NavLink to="/dashboard" style={{ textDecoration: 'none', color: "black" }}>Dashboard 🚀</NavLink>
        <hr  />
        <hr/>
      <NavLink to="/user/addproblem" style={{ textDecoration: 'none', color: "black" }}>add Problem🎯</NavLink>
      <hr />
      <hr/>
      <NavLink to="/user/pofile" style={{ textDecoration: 'none', color: "black" }}>Profile <PersonLinesFill color="#fa718b"/> </NavLink>
      <hr />
      <hr/>
      <NavLink to="/dsasheet" style={{ textDecoration: 'none', color: "black" }} >DSA Sheet 🔥</NavLink>
      <hr />
    </div>
  </SidebarItem>,
  <SidebarItem>
  <div className="">
  <hr/>
    <button onClick={(e)=>{logout(e)}}  style={{background:"white", textDecoration: 'none', color: "var(--theme-color)" }}>Logout <BoxArrowInRight/></button>
    <hr />
  </div>
</SidebarItem>,
];