import React from "react";
import "./Summary.css";
import { Row, Col, Card } from "react-bootstrap";
import logo1 from "../assets/Group 17.png";
import logo2 from "../assets/Group -1.png";
import logo3 from "../assets/Group -2.png";
import logo4 from "../assets/Group -3.png";

const Summary = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="summary">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col>TOTAL TRAFFIC</Col>
                  </Row>
                  <Row>
                    <Col>123,456</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <img src={logo1} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="summary">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col>NEW USERS</Col>
                  </Row>
                  <Row>
                    <Col>2,345</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <img src={logo2} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="summary">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col>SALES</Col>
                  </Row>
                  <Row>
                    <Col>924</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <img src={logo3} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="summary">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col>PERFORMANCE</Col>
                  </Row>
                  <Row>
                    <Col>48.65%</Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <img src={logo4} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Summary;
