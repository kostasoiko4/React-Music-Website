import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

import { Col, Row, Navbar, Nav, Image } from "react-bootstrap";

import logo from "../assets/LOGO WIDE.png"
import facebook from "../assets/fb.png"
import bandcamp from "../assets/bc.png"
import youtube from "../assets/yt.png"

// Pages
import HomePage from "./HomePage";
import MusicPage from "./MusicPage"
import ContactPage from "./ContactPage";

// Custom CSS
import "../styles/pageWithNavbar.css"
import "../styles/navbar.css"

const RouteWithNavbar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    const localStorageIsSettingsVisible = () => {
      return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
      localStorage.setItem('settingsVisible', !showSettings);
    }
  
    return (
        <Route {...rest} render={props => (
            <>
              <Row className="justify-content-md-center">
                <Navbar variant="dark">
                  <Col sm="12" xl="6">
                    <Navbar.Brand href="#">
                      <Image className="logo" src={logo}/>
                    </Navbar.Brand>
                  </Col>
                  <Col sm="12" xl="6">
                    <Row className="justify-content-md-center">
                      <Nav className="nav">
                        <Nav.Link href={`#${Routes.HomePage.path}`}>Home</Nav.Link>
                        <Nav.Link href={`#${Routes.MusicPage.path}`}>Music</Nav.Link>
                        <Nav.Link href={`#${Routes.ContactPage.path}`}>Contact</Nav.Link>
                      </Nav>
                    </Row>
                  </Col>
                </Navbar>
              </Row>

              <Row className="justify-content-md-center main-page">
                <Col xs={12} xl={10}>
                  <main className="content">
                      <Component {...props} />
                  </main>
                </Col>
              </Row>

              <Row className="justify-content-md-center" style={{backgroundColor: "#111", height: "5rem"}}>
                <Col xs={12} xl={3} style={{marginTop: "0.5rem"}}>
                  <a href="https://www.instagram.com/">
                    <Image 
                      src={"https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"}
                      className="link-logo"
                    />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image 
                      src={facebook}
                      className="link-logo"
                    />
                  </a>
                  <a href="https://www.youtube.com/">
                    <Image 
                      src={youtube}
                      className="link-logo"
                    />
                  </a>
                  <a href="https://www.bandcamp.com/">
                    <Image 
                      src={bandcamp}
                      className="link-logo"
                    />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image 
                      src={"https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"}
                      className="link-logo"
                    />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image 
                      src={"https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"}
                      className="link-logo"
                    />
                  </a>
                </Col>
              </Row>
            </>
        )}
        />
    );
  };

const Router = () => {
    return (
      <div className="main-page">
        <Switch style={{overflow: "hidden"}}>
            <RouteWithNavbar exact path={Routes.HomePage.path} component={HomePage} />
            <RouteWithNavbar exact path={Routes.MusicPage.path} component={MusicPage} />
            <RouteWithNavbar exact path={Routes.ContactPage.path} component={ContactPage} />
        </Switch>
      </div>
    )
};

export default Router;