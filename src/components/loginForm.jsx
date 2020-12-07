import React, { Component, Fragment } from 'react';
import {NavLink} from "react-router-dom";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    inputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevState => {
            const nState = {...prevState};
            nState[name] = value;
            return nState;
        });
    };

    render() {
        return (
            <Fragment>
                <form>
                    <div className="appForm">
                        <h2>Login</h2>
                        <input defaultValue={this.state.username}
                               name="username"
                               onChange={this.inputChange}
                               type="text" placeholder="Username"
                               required
                        />
                        <input defaultValue={this.state.password}
                               name="password"
                               onChange={this.inputChange}
                               type="password" placeholder="Password"
                               required
                        />
                        <button
                            className="formBtn"
                            onClick={() => this.props.onClick(this.state.username, this.state.password)}>
                            <span>Login</span>
                        </button>
                        <p>Not a member? <NavLink to="/signup" className="hotlink">Create an account</NavLink></p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default LoginForm;