import React, { Component } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import Breadcrumb from "../common/breadcrumb";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <Breadcrumb title={"Login"} />

        {/*Login section*/}
        <section className="login-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Login</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="Enter your password"
                        required=""
                      />
                    </div>
                    <button
                      disabled={isInvalid}
                      type="submit"
                      className="btn btn-solid"
                    >
                      Sign In
                    </button>

                    {error && <p>{error.message}</p>}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 right-login">
                <h3>New Customer</h3>
                <div className="theme-card authentication-right">
                  <h6 className="title-font">Create A Account</h6>
                  <p>
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to be able to order from our
                    shop. To start shopping click register.
                  </p>
                  <a href="/register" className="btn btn-solid">
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default compose(withRouter, withFirebase)(Login);
