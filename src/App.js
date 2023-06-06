import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableTraslate from "./Table";
import UserDetails from "./UserDetails";
import en from "./locales/en/traslation";
import hin from "./locales/hin/traslation.json";
import tel from "./locales/tel/traslation.json";
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
      {/* <Link to="/user">Click to login</Link> */}
      <Routes>
        <Route path="/user" element={<TableTraslate />}>
          <Route path="/user-details" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
