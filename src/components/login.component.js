import React, { Component } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // 👇️ redirect to /dashboard
    navigate('/dashboard');
  };

    return (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
                </div>
                <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
                </div>
                <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                    </label>
                </div>
                </div>
                <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </div>
                <p className="forgot-password text-right">
                <a href="#">Forgot password?</a>
                </p>
                <p className="">
                <a href="/sign-up"> Don't have an account yet? </a>
                </p>
            </form>
      </div>
      </div>
    );
}

export default Login;