import React, { useState } from "react";
export const Register = (props) => { 
        
        return(
            <>
            <div className="auth-form-container">
                    <h2>Register</h2>
                <form className="register-form">
                    <label htmlFor="First name"> First Name</label>
                    <input type="text" name="First name" id="First name" placeholder="Enter your First name"/>
                    <label htmlfor="Last Name">Last Name</label>
                    <input type="text" placeholder="Enter your Last Name" id="Last Name" name="Last Name"/>
                    <label htmlFor="ID Number">ID Number</label>
                    < input type="number" placeholder="Your ID Number" id="ID Number" name="ID Nuber" required/> 
                    <label htmlfor="password">PASSWORRD</label>
                    <input  type="password" placeholder="********" id="password" name="password" required/>
                     <div>
                    <label class="department">Choose Department :</label>
                    <select name='department'>
                        <option value="/"></option>
                        <option value="CSE">CSE</option>
                        <option value="ISE">ISE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                    </select>   
                    </div>  
                    <div class="button">
                    <button>REGISTER</button>
                    </div>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>already have an account? login</button>
        </div>
        </>
    )
}