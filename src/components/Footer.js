import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../components/styles.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Row>
        <Col>
          <table>
            <tr>
              <th>Learn </th>
              <th>More </th>
              <th>Contact </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Maths</li>
                  <li>Science</li>
                  <li>History</li>
                  <li>Geography</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Presentation</li>
                  <li>Building Character</li>
                  <li>Comprehension</li>
                  <li>Info</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>123456789</li>
                  <li>987654321</li>
                  <li>school@mail.com</li>
                  <li>#school</li>
                </ul>
              </td>
            </tr>
            <tr></tr>
          </table>
        </Col>
        <Col>
          <form className="footer-form">
            <label for="email">Email</label>
            <input type="email" id="email" />

            <label for="description">Description</label>
            <textarea id="description"> Enter Your Query </textarea>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
