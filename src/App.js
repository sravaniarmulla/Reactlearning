import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import TableTraslate from "./Table";
import UserDetails from "./UserDetails";
import AddUser from "./User/index";
import en from "./locales/en/traslation";
import hin from "./locales/hin/traslation.json";
import tel from "./locales/tel/traslation.json";
import SimpleForm from "./reduxForm";
import Login from "./login/index";
import ResetPassword from "./login/RestPas";
import { setTranslations, setDefaultLanguage } from "react-multi-lang";

// let lang =["en","tel","hin"]
setTranslations({ en, hin, tel });
function App() {
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setDefaultLanguage(localStorage.getItem("lang"));
    } else {
      setDefaultLanguage("hin");
    }
  }, []);
  return (
    <div className="App">
      {/* <Link to="/addUser">Click to login</Link> */}
      <Routes>
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/restpasword" element={<ResetPassword />} />
        <Route path="/" element={<Navigate replace to="/addUser" />} />
        <Route path="/user" element={<TableTraslate />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
