import React from 'react';
import banner from '../assets/text.svg';
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className="sidebar">
    <img src={banner} alt="Logo" className="login-image" />
        <div className='sidebar-chart'>
      <h2>MENU</h2>
      <ul>
        <li> <LuLayoutDashboard /> <a href="/dashboard">ダッシュボード</a></li>
        <li> <LuUsers2 /><a href="/users">登録ユーザー</a></li>
        <li> <IoGiftOutline /><a href="/winner">当選者</a></li>
        <li> <FaUserTie /><a href="/admin">運営管理者</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;