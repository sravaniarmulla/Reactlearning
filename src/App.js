import React, { useEffect } from "react";
import "./App.css";
import TableTraslate from "./Table";
import en from "./locales/en/traslation";
import hin from "./locales/hin/traslation.json";
import tel from "./locales/tel/traslation.json";
import { setTranslations, setDefaultLanguage } from "react-multi-lang";
// let lang =["en","tel","hin"]
setTranslations({ en, hin, tel });
console.log(localStorage.getItem("lang"));
function App() {
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setDefaultLanguage(localStorage.getItem("lang"));
    } else {
      setDefaultLanguage("hin");
    }
  }, [localStorage.getItem("lang")]);
  return (
    <div className="App">
      <TableTraslate />
    </div>
  );
}

export default App;
