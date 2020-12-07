import React, { Component, Fragment } from 'react';
import {NavLink} from "react-router-dom";

class SignupForm extends Component {
    state = {
        newUsername: "",
        newPassword: "",
        confirmPassword: ""
    }

    render() {
        return (
            <Fragment>
                <form>
                    <div className="appForm">
                        <h2>Sign up</h2>
                        <input id="newUname" type="text" defaultValue={this.state.newUsername} placeholder="Username" required/>
                        <input id="newPw" type="password" defaultValue={this.state.newPassword} placeholder="Password" required/>
                        <input id="conPw" type="password" defaultValue={this.state.confirmPassword} placeholder="Confirm Password" required/>
                        <button id="signupBtn" className="formBtn"><span>Next</span></button>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password cannot be too similar to previous information entered.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must consist of letters <u>and</u> numbers.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be at least <u>8</u> characters.
                        </small>
                        <p>Have an account? <NavLink to="/login" className="hotlink">Login</NavLink></p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignupForm;