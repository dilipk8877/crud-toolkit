import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./UserList.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import FormData from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser } from "../../features/UserSlice";
const UserList = () => {
  const userList = useSelector((state) => state.users.userItem);
  const dispatch = useDispatch()
  console.log(userList);
  const [modalToggle, setModalToggle] = useState(false);
  const handleShow = () => {
    setModalToggle(true);
  };
  const handleEdit =(id)=>{
    dispatch(editUser(id))
    setModalToggle(true);
  }
  return (
    <div className="user-conatiner position-relative">
      <Row md={4} className="g-4">
        {userList.map((user, item) => {
          return (
            <Col key={item}>
              <Card>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Card.Text>{user.phone}</Card.Text>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="secondary"
                      onClick={() => handleEdit(user.id)}
                    >
                      Update
                    </Button>
                    <Button variant="secondary" onClick={()=>dispatch(deleteUser(user.id))}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <AiOutlinePlusCircle
        className="text-ligth position-absolute bottom-0 end-0 me-3 text-light fs-1 mb-3"
        onClick={handleShow}
      />
      <FormData modalToggle={modalToggle} setModalToggle={setModalToggle} />
    </div>
  );
};

export default UserList;
