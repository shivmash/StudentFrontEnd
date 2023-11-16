import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";
import "../components/ViewStyle.css";
function ViewTable() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("https://studentbackend-qa9o.onrender.com/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableItems = () => {
    return students.map((student, i) => {
      return <ViewTableRow obj={student} key={i} />;
    });
  };

  return (
    <Layout>
      <h1>View data</h1>

      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Parent Name</th>
          <th>Parent Contact</th>
          <th>Options</th>
        </thead>
        <tbody> {TableItems()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
