import {Redirect, Route, Switch, NavLink, HashRouter, BrowserRouter} from 'react-router-dom';
import './App.css';
import React, { Component, Fragment} from "react";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import About from "./components/about";
import Home from "./components/home";
import Map from "./components/map";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
            username: '',
            isAuth: "hello",
            HOST: 'http://127.0.0.1:8000/'
        };
    }

    login = (username, password) => {
        //error checking that inputs are not null
        if(username === ''){
            alert('Username cannot be empty');
            return;
        } else if (password === '') {
            alert('Password cannot be empty');
            return;
        }

        fetch(this.state.HOST + 'token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        }).then(json => {
                this.setState({
                    logged_in: true,
                    username: json.user.username
                });
                localStorage.setItem('token', json.token);
                localStorage.setItem('state', this.state);
                alert(localStorage.getItem('token'));
        }).catch((error) => {
            localStorage.setItem('token', null);
            alert(error + this.state.logged_in);
            throw error;
        });

    };

    logout = () => {
        this.setState({
            logged_in: false,
            username: ''
        });
        localStorage.setItem('token', null);
        localStorage.setItem('state', this.state);
    }

    componentDidMount() {
        if(this.state.logged_in === true){
            this.setState({username: this.state.username});
        }
    }

    render() {
        if(this.state.logged_in === true) {
            return (
                <BrowserRouter>
                    {this.state.logged_in ? <Redirect to='/home'/> : null}
                    <div className="App">
                        <Fragment>
                            <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#387be1", marginBottom: "2vh"}}>
                                <NavLink className="navbar-brand" to="/home"><b>{this.state.username}</b></NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse text-left" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink to="/home" className="nav-link" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/about" className="nav-link" >About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/map" className="nav-link">Map</NavLink>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" >Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Fragment>
                        <Switch>
                            <Fragment>
                                <Route path='/home'>
                                    <Home user={this.state.username}/>
                                </Route>
                                <Route path='/map'>
                                    <Map />
                                </Route>
                                <Route path='/about'>
                                    <About />
                                </Route>
                            </Fragment>
                        </Switch>
                    </div>
                </BrowserRouter>
            );
        } else if(this.state.logged_in === false) {
            return (
                <BrowserRouter>
                    {!this.state.logged_in ? <Redirect to='/login'/> : null}
                    <div className="App">
                        <Fragment>
                            <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#387be1", marginBottom: "2vh"}}>
                                <a className="navbar-brand" href="/"><b>L3aflet</b></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse text-left" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink to="/signup" className="nav-link" >Signup</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link" >Login</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Fragment>
                        <Switch>
                            <Fragment>
                                <Route path='/login'>
                                    <LoginForm
                                        onClick={this.login}
                                    />
                                </Route>
                                <Route path='/signup'>
                                    <SignupForm />
                                </Route>
                            </Fragment>
                        </Switch>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

export default App;
