import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import Breadcrumb from "../common/breadcrumb";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6, "Password has to be longer than 6 characters!")
    .required("Password is required!"),
});

const Register = (props) => {
  const [state, setState] = React.useState({
    error: null,
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data) => {
    props.firebase
      .doCreateUserWithEmailAndPassword(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      )
      .then((authUser) => {
        //Create user to database
        return props.firebase.user(authUser.user.uid).set(
          {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            createdDate: Date.now(),
            udpatedDate: Date.now(),
          },
          { merge: true }
        );
      })
      .then(() => {
        props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setState({
          error: error,
        });
      });
  };

  return (
    <div>
      <Breadcrumb title={"create account"} />

      {/*Regsiter section*/}
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>create account</h3>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required=""
                        name="firstName"
                        ref={register}
                      />
                      {errors.firstName && (
                        <p className="text-danger">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required=""
                        name="lastName"
                        ref={register}
                      />
                      {errors.lastName && (
                        <p className="text-danger">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                        name="email"
                        ref={register}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="review"
                        placeholder="Enter your password"
                        required=""
                        name="password"
                        ref={register}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password.message}</p>
                      )}
                    </div>
                    <button type="submit" className="btn btn-solid">
                      create Account
                    </button>
                  </div>
                  {state.error && <p className="text-danger">{state.error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default compose(withRouter, withFirebase)(Register);
