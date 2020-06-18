import React from "react";

import { withFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    className="btn btn-red btn-rounded py-1 px-3 m-0 red-gradient waves-effect waves-light"
    onClick={firebase.doSignOut}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
