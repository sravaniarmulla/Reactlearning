import React from "react";
import { Field, reduxForm } from "redux-form";
import CommonField from "./commonForm";
import axios from "axios";

function Login(props) {
  const { handleSubmit, submitting } = props;
  console.log(props);
  const formSubmit = (values) => {
    console.log(values);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("https://3.109.64.89:8443/user/login", values, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Field component={CommonField} type="text" label="Email" name="email" />
        <Field
          component={CommonField}
          type="text"
          label="Password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default reduxForm({
  form: "login",
})(Login);
