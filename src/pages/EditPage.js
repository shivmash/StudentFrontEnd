import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  //initialization
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [parentname, setparentname] = useState();
  const [parentcontact, setparentcontact] = useState();

  const obj1 = useParams();

  useEffect(() => {
    axios
      .get(
        "https://studentbackend-qa9o.onrender.com/students/update-student/" +
          obj1.id
      )
      .then((res) => {
        if (res.status === 200) {
          setfirstname(res.data.firstname);
          setlastname(res.data.lastname);
          setemail(res.data.email);
          setcontact(res.data.contact);
          setparentname(res.data.parentname);
          setparentcontact(res.data.parentcontact);
        }
      });
  }, [obj1.id]);

  const handleSubmit = () => {
    const newData = {
      firstname,
      lastname,
      email,
      contact,
      parentname,
      parentcontact,
    };
    let url = "http://localhost:5000/students/update-student/" + obj1.id;
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("Record Updated");
        } else {
          alert("Something went wrong");
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      {/* //edit form */}
      <form onSubmit={handleSubmit}>
        <label for="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter Your First Name"
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
          defaultValue={firstname}
        />

        <label for="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Enter Your Last Name"
          onChange={(e) => {
            setlastname(e.target.value);
          }}
          defaultValue={lastname}
        ></input>

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          defaultValue={email}
        />

        <label for="contact">Contact</label>
        <input
          type="tel"
          id="contact"
          placeholder="Enter Your Contact"
          onChange={(e) => {
            setcontact(e.target.value);
          }}
          defaultValue={contact}
        />

        <label for="parentname">Parent Name</label>
        <input
          type="text"
          id="parentname"
          placeholder="Enter Your Parent Name"
          onChange={(e) => {
            setparentname(e.target.value);
          }}
          defaultValue={parentname}
        />

        <label for="parentcontact">Parent Contact</label>
        <input
          type="tel"
          id="parentcontact"
          placeholder="Enter Your Parent Contact "
          onChange={(e) => {
            setparentcontact(e.target.value);
          }}
          defaultValue={parentcontact}
        />

        <input type="submit" id="submit" />
      </form>
    </Layout>
  );
}

export default EditPage;
