import React, { useState } from 'react';
import '../dashboard.css';
import { NavLink } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='sidebarLeft' style={{ width: isOpen ? "250px" : "50px", background: 'rgb(25 93 163)', color: '#fff', height: 'auto', transition: 'all 0.6s', }}>
        <div className='top_section' style={{ display: 'flex', alignItems: 'center', padding: '20px 15px', }}>
            {/* <h1 className='dashboardLogo' style={{ display: isOpen ? "block" : "none", fontSize: '25px', }}>LOGO</h1> */}
            <img src={logo} alt='Logo' className='dashboardLogo'title='System' style={{ display: isOpen ? "block" : "none", fontSize: '25px', }}/>
            <div className='dashboardBars' style={{ marginLeft: isOpen ? "80px" : "0px", fontSize: '25px', display: 'flex', cursor: 'pointer', transition: 'all 0.5s', }}>
                <span onClick={toggle}><i className="fa-solid fa-bars"></i></span>
            </div>
        </div>
        <NavLink className='sidebarNavLink' style={{ display: 'flex', padding: '10px 15px', color: '#fff', gap: '15px', transition: 'all 0.5s', }}>
            <div className='icon'><span className="fas fa-th-list"></span></div>
            {/* <div style={{ display: isOpen ? "block" : "none" }} className='link_text'>Dashboard</div> */}
            <Link className="navbar-brand link_text" style={{ display: isOpen ? "block" : "none" }} to={'/dashboard'}>
            Dashboard
            </Link>
        </NavLink>
        <NavLink className='sidebarNavLink' style={{ display: 'flex', padding: '10px 15px', color: '#fff', gap: '15px', transition: 'all 0.5s', }}>
            <div className='icon'><span className="fas fa-chart-line"></span></div>
            {/* <div style={{ display: isOpen ? "block" : "none" }} className='link_text'>Listings</div> */}
            <Link className="navbar-brand link_text" style={{ display: isOpen ? "block" : "none" }} to={'/listings'}>
             Listings
            </Link>
        </NavLink>
    </div>
    );
}

export default Sidebar;
