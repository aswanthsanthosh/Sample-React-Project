import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const UserTable = ({ users }) => {
  const userdata = users?.data?.results;

  return (
    <TableContainer component={Paper}>
      <Table className="user-table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>ニックネーム</TableCell>
            <TableCell>メールアドレス</TableCell>
            <TableCell>生年月</TableCell>
            <TableCell>性別</TableCell>
            <TableCell>居住地</TableCell>
            <TableCell>登録日e</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(userdata) && userdata?.length > 0 ? (
            userdata?.map((user, index) => (
              <TableRow key={user.email}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.nick_name}</TableCell>
                <TableCell><span>{user.email}</span></TableCell>
                <TableCell>{user.date_of_birth}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.place_of_residence}</TableCell>
                <TableCell>{user.registation_date}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>No users available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;