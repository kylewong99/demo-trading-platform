import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import "./EditProfile.css";

const EditProfile = (props) => {
  const { firstName, lastName, email } = props;

  return (
    <>
      <Card
        style={{
          height: "100%",
          borderRadius: "3%",
          boxShadow: "2px 2px 5px 2px #DCDDE2",
        }}
      >
        <Card.Header style={{ border: "0px" }}>Edit Profile</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="#">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder={firstName} />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="#">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder={lastName} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="#">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder={email} />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
        <Button className="button" variant="danger" type="">
          Confirm
        </Button>
      </Card>
    </>
  );
};

export default EditProfile;
