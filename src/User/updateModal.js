import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

export default function UserUpdateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState([]);
  const [mail, setMail] = useState([]);
  const [addDetails, setAddDetails] = useState([]);

  const addUserClick = () => {
    let newAddDetails = [...addDetails];
    const data = { name: val, email: mail };
    // addDetails.push(val);
    newAddDetails.push(data);
    setAddDetails(newAddDetails);
    setMail("");
    setVal("");
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type="button">
        Add User
      </button>
      <Modal isOpen={isOpen}>
        <ModalBody>
          <label>Name</label>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            id="name"
          />
          <label>Email</label>
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            id="mail"
          />
          <button type="Add" onClick={() => addUserClick()}>
            Add
          </button>
          <button type="Add" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
}
