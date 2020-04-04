import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Joe Bailey",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
      ],
      home: {
        title: "Curiosity + Dedication = Growth",
        subTitle: "",
        text: "",
      },
      about: {
        title: "About Me",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Joe Bailey</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <AboutPage
                title={this.state.about.title}
              />
            )}
          />
          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
