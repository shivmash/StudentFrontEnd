import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  let DeleteRecord = () => {
    let url =
      "https://studentbackend-qa9o.onrender.com/students/delete-student/";
    console.log(url + props.obj._id);
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Deleted Successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td>{props.obj.firstname}</td>
      <td>{props.obj.lastlast}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.contact}</td>
      <td>{props.obj.parentname}</td>
      <td>{props.obj.parentcontact}</td>
      <td>
        {/* link to edit page from ViewData page */}
        <Link to={`/edit-student/${props.obj._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={DeleteRecord}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
