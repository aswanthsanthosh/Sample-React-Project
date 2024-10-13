import React, { useState, useEffect } from 'react';
import UserTable from './Users';
import PaginationComponent from './Pagination';
import SearchBar from './SearchBar';
import Sidebar from './SideBar';
import { FaRegUserCircle } from "react-icons/fa";


const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  
useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
        try {
          const response = await fetch('http://127.0.0.1:8000/users/', 
            {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`  // Add the Bearer token here
              }
              }); // Replace with your API endpoint
          if (!response.ok) {
            console.log("111111")
            throw new Error('Error fetching data');
          } else{
            console.log("2222222")
            const data = await response.json();
            console.log(data)
            setUsers(data); // Set the fetched users into state
            };
        } catch (err) {
          setError(err.message); // Handle errors
        } finally {
          setLoading(false); // Stop loading when data is fetched or an error occurs
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='dashboard-container'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className='dash-header'>
            <h1>Dashboard Title</h1>
            <FaRegUserCircle className='img'/>
        </div>
        <div className='dash-content'>
        <h2 className='dash-user-heading'>登録ユーザー一覧</h2>
          <div className='dash-search'>
            <SearchBar />
          </div>
            <UserTable users={users}/>
        </div>
    </div>
  );
};

export default Dashboard;