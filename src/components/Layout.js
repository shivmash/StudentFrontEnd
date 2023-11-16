import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
function Layout(props) {
  return (
    <div className="layout-container">
      <Header />
      <main style={{ height: "80vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
