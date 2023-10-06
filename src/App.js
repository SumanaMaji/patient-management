import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Dashboard from './components/dashboard.component'
import Header from "./common/Header"
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';
import Listings from './pages/Listings';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Patient Management System
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        {/* <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />        
            </Routes>
            <Header/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listings" element={<Listings />} /> 
              <Route path="/sidebar" element={<Sidebar />} />      
            </Routes>
      <Footer/>
      </div>
    </Router>
  )
}
export default App