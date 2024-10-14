import React, { useState } from "react";
import banner from "../assets/text.svg";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <div>
      {/* Hamburger icon for mobile view */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src={banner} alt="Logo" className="login-image" />
        <div className="sidebar-chart">
          <ul>
            <li
              onClick={() => navigate("/dashboard")}
              className={`${pathname === "/dashboard" ? "active" : ""}`}
            >
              <LuLayoutDashboard className="icon" />
              ダッシュボード
            </li>
            <li
              onClick={() => navigate("/users")}
              className={`${pathname === "/users" ? "active" : ""}`}
            >
              <LuUsers2 className="icon" />
              登録ユーザー
            </li>
            <li onClick={() => navigate("/dashboard")}>
              <IoGiftOutline className="icon" />
              当選者
            </li>
            <li onClick={() => navigate("/dashboard")}>
              <FaUserTie className="icon" />
              運営管理者
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;