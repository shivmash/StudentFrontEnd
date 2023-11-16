import React, { useState } from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
// import studentImage from "../assets/image1.jpeg";
function SignUp() {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [parentname, setparentname] = useState();
  const [parentcontact, setparentcontact] = useState();

  const studentObg = {
    //object creation
    firstname,
    lastname,
    email,
    contact,
    parentname,
    parentcontact,
  };
  let handleSubmit = (event) => {
    //event handling function
    let url =
      "https://studentbackend-qa9o.onrender.com/students/create-student";
    axios
      .post(url, studentObg)
      .then((res) => {
        if (res.status === 200) {
          alert("Student added succesfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {}); //send the data by post menthod
    event.preventDefault(); //to prevent auto refresh
  };
  return (
    <div>
      <Layout>
        <h1 id="heading">Student Registration Form</h1>
        <Container>
          <Row>
            <Col>
              <img src="image2.webp" alt="image" />
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter Your First Name"
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />

                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter Your Last Name"
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                ></input>

                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />

                <label for="contact">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Enter Your Contact"
                  onChange={(e) => {
                    setcontact(e.target.value);
                  }}
                />

                <label for="parentname">Parent Name</label>
                <input
                  type="text"
                  id="parentname"
                  placeholder="Enter Your Parent Name"
                  onChange={(e) => {
                    setparentname(e.target.value);
                  }}
                />

                <label for="parentcontact">Parent Contact</label>
                <input
                  type="tel"
                  id="parentcontact"
                  placeholder="Enter Your Parent Contact "
                  onChange={(e) => {
                    setparentcontact(e.target.value);
                  }}
                />

                <input type="submit" id="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default SignUp;
