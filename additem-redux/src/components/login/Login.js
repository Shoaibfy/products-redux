import React, { Component } from "react";

import { Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./login.css";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: false,
            errorMessage: "incorrect username or password",
        };
    }

    login = (e) => {
        e.preventDefault();
        // let history = useHistory();
        let thisView = this;
        if (
            this.state.username === "shoaib@gmail.com" &&
            this.state.password === localStorage.getItem("password")
        ) {
            console.log("username..");
            thisView.props.history.push("/card");
            localStorage.setItem("password", this.state.password);
        } else {
            this.setState({
                error: true,
            });
        }
        console.log(this.state);
    };



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <Row className="login-table">
                    <Row className="login-content">
                        <center>
                            <h2 className="login-title">Login</h2>
                        </center>

                        <Row className="login-lable">
                            <input
                                placeholder="Enter username"
                                type="email"
                                name="username"
                                value={this.state.username}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Row>
                        <Row className="login-lable">
                            <input
                                placeholder=" Enter password"
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Row>
                        {this.state.error ? (
                            <Row className="error-lable">{this.state.errorMessage}</Row>
                        ) : (
                            " "
                        )}
                        <Row>
                            <Link to='/card'>
                                <Button className="btn-title1" >
                                    Login
                                </Button>
                            </Link>
                        </Row>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default Login;
