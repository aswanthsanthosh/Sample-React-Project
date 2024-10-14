import React, { useEffect, useState } from "react";
import Layout from "./layout";
import SearchBar from "./SearchBar";
import UserTable from "./Users";
import PaginationComponent from "./Pagination";

function UserPage() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1)
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("accessToken");
            try {
                const url = new URL("http://127.0.0.1:8000/users/");
                if (searchTerm) {
                    url.searchParams.append("name", searchTerm); // Add search term to query params
                }
                if (page) {
                    url.searchParams.append("page", page); // Add search term to query params
                }

                const response = await fetch(url.toString(), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    console.log("111111");
                    throw new Error("Error fetching data");
                } else {
                    console.log("2222222");
                    const data = await response.json();
                    console.log(data);
                    setUsers(data); // Set the fetched users into state
                }
            } catch (err) {
                setError(err.message); // Handle errors
            } finally {
                setLoading(false); // Stop loading when data is fetched or an error occurs
            }
        };

        fetchData();
    }, [searchTerm, page]);

    return (
        <Layout>
            <div className="user-content">
                <div className="user-head">
                    <h2>登録ユーザー一覧</h2>
                    <div className="dash-search">
                        <SearchBar value={searchTerm} onChange={(value) => setSearchTerm(value)} />
                    </div>
                </div>

                <UserTable users={users} />
                <div className="table-footer">
                    <div>{users?.data?.count}人中 - {users?.data?.results?.length}人表示</div>
                    <PaginationComponent count={users?.data?.total_pages} onChange={(e, page) => { setPage(page) }} />
                </div>

            </div>
        </Layout>
    );
}

export default UserPage;