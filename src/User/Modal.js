import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import CommonField from "../login/commonForm";

function UserModal(props) {
  const {
    handleSubmit,
    submitting,
    userAddedDeatails,
    setUserAddedDeatails,
    updateModal,
    isOpen,
    setIsOpen,
    initialValues,
  } = props;
  const [val, setVal] = useState([]);
  const [mail, setMail] = useState([]);
  console.log(initialValues);
  // const [addDetails, setAddDetails] = useState([]);

  // const addUserClick = () => {
  //   let newAddDetails = [...userAddedDeatails];
  //   const data = { name: val, email: mail };
  //   // addDetails.push(val);
  //   newAddDetails.push(data);
  //   setUserAddedDeatails(newAddDetails);
  //   setMail("");
  //   setVal("");
  // };
  const formSubmit = (values) => {
    if (userAddedDeatails) {
      let newAddDetails = [...userAddedDeatails];
      const data = { name: values.name, email: values.email };
      // addDetails.push(val);
      newAddDetails.push(data);
      setUserAddedDeatails(newAddDetails);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalBody>
          <form onSubmit={handleSubmit(formSubmit)}>
            <Field
              type="text"
              component={CommonField}
              id="name"
              label="Name"
              name="name"
            />
            <Field
              type="text"
              component={CommonField}
              id="mail"
              label="Email"
              name="email"
            />
            {updateModal ? (
              <button type="button">Update</button>
            ) : (
              <button type="submit">Add</button>
            )}
            <button type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default reduxForm({
  form: "Modal",
})(UserModal);
