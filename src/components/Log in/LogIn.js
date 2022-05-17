import React, { useState } from "react";
import '../Log in/LogIn.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../SignUp/SignUp'

const LogIn = () => {
    return (
        (
            <div class="container slim">
                <form>
                    <h3>Log In</h3>


                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Log In</button>
                    <p className="forgot-password text-right">
                        Not a member yet? <a href="/signup">Sign Up!</a>
                    </p>
                </form>
            </div>

        )

    )
}
export default LogIn