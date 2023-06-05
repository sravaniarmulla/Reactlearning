import React, { useEffect, useState } from "react";
import "./common.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useTranslation } from "react-multi-lang";

function TableTraslate() {
  const t = useTranslation();
  const [employees, setEmployees] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.text())
      .then((data) => setEmployees(JSON.parse(data)));
  }, []);

  const headers = [
    t("HOME.NAME"),
    t("HOME.EMAIL"),
    t("HOME.NUMBER"),
    t("HOME.WEBSITE"),
  ];
  const changeLangauge = (value) => {
    localStorage.setItem("lang", value);
    window.location.reload();
  };
  return (
    <div className="App">
      <h1>{t("HOME.HELLO")}</h1>
      <h2>{t("HOME.Text")}</h2>
      <table>
        <thead>
          <tr>
            {headers.map((data) => {
              return <th>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Dropdown
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle color="secondary">Dropdown button</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => changeLangauge("tel")}>
            TELUGU
          </DropdownItem>
          <DropdownItem onClick={() => changeLangauge("hin")}>
            HINDI
          </DropdownItem>
          <DropdownItem onClick={() => changeLangauge("en")}>
            ENGLISH
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default TableTraslate;
