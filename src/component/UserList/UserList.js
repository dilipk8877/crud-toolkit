import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./UserList.css";
import {AiOutlinePlusCircle} from "react-icons/ai"
import FormData from "../modal/Modal";
import { useSelector } from "react-redux";
const UserList = () => {
  const {user}=useSelector((state)=>state.users)
  console.log(user)
  const [modalToggle,setModalToggle]= useState(false)
  const handleShow = () => {
    setModalToggle(true)
};
  return (
    <div className="user-conatiner position-relative">
      <Row  md={4} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Dilip Sharma</Card.Title>
              <Card.Text>
                dk883866@gmail.com
              </Card.Text>
              <Card.Text>8872979272</Card.Text>
              <div className="d-flex justify-content-around">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        <AiOutlinePlusCircle className="text-ligth position-absolute bottom-0 end-0 me-3 text-light fs-1 mb-3" onClick={handleShow}/>
        <FormData modalToggle={modalToggle}  setModalToggle={setModalToggle}/>
    </div>
  );
};

export default UserList;
