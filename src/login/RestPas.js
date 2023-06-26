import React from "react";
import { Field, reduxForm } from "redux-form";
import CommonField from "./commonForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword(props) {
  const history = useNavigate();
  const { handleSubmit, submitting } = props;
  console.log(props, `${process.env.REACT_APP_API_URL}`);
  const formSubmit = (values) => {
    console.log(values);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, values, {
        headers: headers,
      })
      .then((response) => {
        localStorage.setItem("loginResponse", JSON.stringify(response));
        console.log(response);
        history("/adduser");
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
  form: "ResetPassword",
})(ResetPassword);
