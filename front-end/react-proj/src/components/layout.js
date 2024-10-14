import React from "react";
import Sidebar from "./SideBar";
import { FaRegUserCircle } from "react-icons/fa";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="dash-right">
        <div className="dash-header">
          <FaRegUserCircle className="icon" />
        </div>
        <div className="dash-body">{children}</div>
      </div>
    </div>
  );
}

export default Layout;