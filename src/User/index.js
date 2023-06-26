import React, { useState, useEffect } from "react";
import UserModal from "./Modal";
import axios from "axios";

const AddUser = () => {
  const [userAddedDeatails, setUserAddedDeatails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const header = ["NAME", "EMAIL", "Action"];
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${process.env.REACT_APP_USER_URL}`, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        setUserAddedDeatails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userAddedDeatails);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} type="button">
        Add User
      </button>
      {isOpen && (
        <UserModal
          userAddedDeatails={userAddedDeatails}
          setUserAddedDeatails={setUserAddedDeatails}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          initialValues={
            initialValues?.name
              ? { name: initialValues.name, email: initialValues.email }
              : {}
          }
        />
      )}
      <table>
        <thead>
          <tr>
            {header.map((data) => {
              return <th>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {userAddedDeatails.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(true);
                      setInitialValues(data);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AddUser;
