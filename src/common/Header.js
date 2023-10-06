import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../dashboard.css';
import logo from '../assets/images/logo.png';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Notification
    </Tooltip>
);
    return (
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#92BAF4', color: '#fff', }}>
      <Container>
      <img src={logo} alt='Logo' className='footerLogo' title='System'/>
          <Navbar.Brand href="/dashboard" className='textWhite'>Patient Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  <Nav.Link href="#home" className='textWhite'>Home</Nav.Link>
                  <Nav.Link href="#link" className='textWhite'>Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='textWhite'>
                      <NavDropdown.Item href="#action/3.1" className=''>Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2" className=''>
                          Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3" className=''>Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4" className=''>
                          Separated link
                      </NavDropdown.Item>
                  </NavDropdown>
                  <div className="topNavSearchBox ms-3" id='topNavSearchBox'>
                      <input type="text" placeholder="Search..." name="search" />
                      <i className="fa fa-search"></i>
                  </div>
                  <span className="nav-item dropdown user user-menu">
                      <a href="#news" className="nav-link dropdown-toggle userDropdown" data-toggle="dropdown">
                          <i className="fa-solid fa-user"></i>
                          <span className="hidden-xs ps-2">Profile</span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right me-2 profileMenu">
                          <li className="user-header">
                              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="img-circle elevation-2" alt="User" />
                              <p>
                                  Profile Member 
                                  <small> Nov. 2012</small>
                              </p>
                          </li>
                          {/* <li className="user-body">
                              <div className="row">
                                  <div className="col-4 text-center">
                                      <a href="#news"><i class="fa-solid fa-user-group"></i> Followers</a>
                                  </div>
                                  <div className="col-4 text-center">
                                      <a href="#news"><i class="fa-solid fa-chart-line"></i> Sales</a>
                                  </div>
                                  <div className="col-4 text-center">
                                      <a href="#news"><i class="fa-solid fa-user-group"></i> Friends</a>
                                  </div>
                              </div>
                          </li> */}
                          <li className="user-footer">
                              <div className="pull-left" style={{ borderBottom: '1px solid grey', marginLeft: '20px', marginRight: '20px' }}>
                                  <a href="#footer" className="btn btn-default btn-flat">Profile</a>
                              </div>
                              <div className="pull-right" style={{ borderBottom: '1px solid grey', marginLeft: '20px', marginRight: '20px' }}>
                                  <a href="#footer" className="btn btn-default btn-flat">Sign out</a>
                              </div>
                          </li>
                      </ul>
                  </span>
                  <div className='notification'>
                      <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                      >
                          <span><i class="fa-solid fa-bell"></i></span>
                      </OverlayTrigger>
                  </div>
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
    );
}

export default Header;
