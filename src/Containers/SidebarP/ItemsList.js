import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { NavLink } from "react-router-dom";
import logogif from "../../Components/assets/logo.gif"
import "./sidebar.css"
import { PersonLinesFill, BoxArrowInRight } from 'react-bootstrap-icons';
const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("crackdsa-user");
  window.location.reload(false);
}
export const items = [
  <SidebarItem>
    <div className="pt-3 pb-3">
      <NavLink to="/" style={{ textDecoration: 'none' }}><img className="logogif-css" src={logogif} alt="crackdsanoteslogo" /></NavLink>

    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
      <NavLink to="/dashboard"  style={{ textDecoration: 'none', color: "white" }}>Dashboard 🚀</NavLink>

    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <NavLink to="/user/addproblem" style={{ textDecoration: 'none', color: "white" }}>Add Problem🎯</NavLink>
    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <NavLink to="/user/pofile" style={{ textDecoration: 'none', color: "white" }}>Profile <PersonLinesFill color="#fa718b" /> </NavLink>
    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <NavLink to="/dsasheet" style={{width:"100%", textDecoration: 'none', color: "white" }} >DSA Sheet 🔥</NavLink>
    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="mt-5">
      <button className="button-css" onClick={(e) => { logout(e) }}  >Logout <BoxArrowInRight /></button>
    </div>
  </SidebarItem>,
];