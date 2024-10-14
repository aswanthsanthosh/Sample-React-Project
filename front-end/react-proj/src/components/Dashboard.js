import React, { useState, useEffect } from "react";
import UserTable from "./Users";
import PaginationComponent from "./Pagination";
import SearchBar from "./SearchBar";
import Sidebar from "./SideBar";
import { FaRegUserCircle } from "react-icons/fa";
import Layout from "./layout";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Dashboard = () => {

  return <Layout>
    <div className="dashboard-toprow">

      <div className="card">
        <div className="card-header">
          <h4>ユーザー登録数累計</h4>
          <span>2024年2月1日 - 2024年2月5日</span>
        </div>
        <div className="card-footer">
          <div className="card-footer-top">
            <h5><span>450</span>人</h5>
          </div>
          <div className="card-footer-bottom">
            <span>400人 (前月時点の累計）</span>
            <div className="badge up"><BsArrowUp />12.5%</div>
          </div>
        </div>        
      </div>

      <div className="card">
        <div className="card-header">
          <h4>アクティブユーザー</h4>
          <span>2024年2月1日 - 2024年2月5日</span>
        </div>
        <div className="card-footer">
          <div className="card-footer-top">
            <h5><span>50</span>人 / 今月</h5>
          </div>
          <div className="card-footer-bottom">
            <span>12人 (前月時点）</span>
            <div className="badge up"><BsArrowUp />316.6%</div>
          </div>
        </div>        
      </div>

      <div className="card">
        <div className="card-header">
          <h4>定着率</h4>
          <span>2024年2月1日 - 2024年2月5日</span>
        </div>
        <div className="card-footer">
          <div className="card-footer-top">
            <h5><span>10</span>% / 前月</h5>
          </div>
          <div className="card-footer-bottom">
            <span>12% (前々月）</span>
            <div className="badge down"><BsArrowDown />16.6%</div>
          </div>
        </div>        
      </div>

      <div className="card">
        <div className="card-header">
          <h4>平均検索回数</h4>
          <span>2024年2月1日 - 2024年2月5日</span>
        </div>
        <div className="card-footer">
          <div className="card-footer-top">
            <h5><span>4</span>回 / 今月</h5>
          </div>
          <div className="card-footer-bottom">
            <span>2回 (前月の今日時点）</span>
            <div className="badge up"><BsArrowUp />100%</div>
          </div>
        </div>        
      </div>

    </div></Layout>
};

export default Dashboard;