import React, { useState } from "react";
import {BrowserRouter, Routes, Route, Link}from "react-router-dom";
import '../SignUp/SignUp.css';
import '../Log in/LogIn'

const SignUp = () =>{
  return (
    (
      <div class="container slim">
       <form>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
          <p className="forgot-password text-right">
              Already registered <a href="/login">log In?</a>
             
          </p>
      </form>
      </div>
   )
 
  )}
export default SignUp