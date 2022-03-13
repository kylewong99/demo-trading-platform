import React from "react";
import profileBackground from "../assets/Mask Group 2.png";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./UserProfile.css";

const UserProfile = (props) => {
  const { firstName, lastName, avatar, email } = props;

  return (
    <>
      <Card
        style={{ borderRadius: "3%", boxShadow: "2px 2px 5px 2px #DCDDE2" }}
      >
        <div>
          <Card.Img variant="top" src={profileBackground} />
          <img className="avatar" src={avatar}></img>
        </div>
        <Card.Body>
          <Card.Text className="text-center">
            {lastName} {firstName}
            <br />
            {email}
          </Card.Text>
          <Row className="text-center mb-3">
            <Col>
              <Button variant="danger">Connect</Button>
            </Col>
            <Col>
              <Button variant="outline-danger">Message</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProfile;
