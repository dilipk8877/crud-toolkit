import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setModalClose, setToggleClose, updateUser } from "../../features/UserSlice";
import { v4 as uuidv4 } from "uuid";

const FormData = ({  setUserData, userData }) => {
  const {toggleUpdate,modalOpen,editId} = useSelector((state) => state.users);
  const dispatch = useDispatch();


  const handleClose = () => {
    dispatch(setToggleClose());
    dispatch(setModalClose(false))
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, id: uuidv4(), [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    dispatch(setModalClose(false))
    setUserData("")
  };
  const handleUpdate = () => {
    dispatch(updateUser({userData,editId}));
    dispatch(setModalClose(false))
    setUserData("")
  };
  return (
    <div>
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Phone Number"
                autoFocus
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {toggleUpdate ? (
                <Button variant="primary" onClick={handleSubmit}>
                  Save
                </Button>
              ) : (
                <Button variant="primary" onClick={handleUpdate}>
                  Update 
                </Button>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormData;
