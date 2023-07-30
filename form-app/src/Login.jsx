import React, { useState } from "react";
export const Login = (props) => { 
    return ( 
        <>
        <div className="auth-form-container">
        <h2>Login</h2>
            <form className="login-form">
                <label htmlfor="ID Number">ID Number</label>
                <input type="number" placeholder="your ID Number" id="ID Number" name="ID Number" required />
                <label htmlfor="password">PASSWORRD</label>
                < input  type="password" placeholder="********" id="password" name="password" required/>       
                <div class="button">
                    <button>LOGIN</button>
                    </div>
                <button className="lk-btn" >FORGOT PASSWORD ?</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
        </div> 
        </>
      
    )

}