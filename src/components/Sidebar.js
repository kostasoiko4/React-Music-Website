import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faAngleRight, faTable, faUsers, faLocationArrow, faAddressBook, faRobot } from "@fortawesome/free-solid-svg-icons";
import { Nav, ListGroup, ListGroupItem, Image } from "react-bootstrap"

import ThemeSwitch from './ThemeSwitch'
import { ThemeProvider } from '../hooks/useThemeContext'
import { Routes } from "../routes";

import logo from "../assets/new logo.png"
import "../styles/Sidebar.css"

const Sidebar = () => {
    return (
        <>
            <Nav 
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <ListGroup variant="flush" className="sidebar">
                    <Image className="logo-image" fluid rounded src={logo}/>
                    <ListGroup.Item className="sidebar-item"> 
                        <Nav.Item>
                            <Nav.Link className="sidebar-text" href={Routes.HomePage.path}>Home</Nav.Link>
                        </Nav.Item>
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar-item">
                        <Nav.Item>
                            <Nav.Link className="sidebar-text" eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar-item">
                        <Nav.Item>
                            <Nav.Link className="sidebar-text" eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar-item">
                        <Nav.Item>
                            <Nav.Link className="sidebar-text" eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </ListGroup.Item>

                    <ThemeProvider>
                        <ListGroupItem className="sidebar-item">
                            <ThemeSwitch />
                        </ListGroupItem>
                    </ThemeProvider>

                </ListGroup>
            </Nav>
        </>
    );
}

export default Sidebar