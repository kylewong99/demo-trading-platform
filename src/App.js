import "./App.css";
import Summary from "./components/Summary";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import Instruments from "./components/Instruments";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function App() {
  const [userData, setUserData] = useState({});

  const axios = require("axios").default;

  const getUserInfo = () => {
    axios.get("https://reqres.in/api/users/2").then((response) => {
      setUserData(response.data.data);
    });
    console.log(userData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className="containers">
        <div className="mb-4">
          <Summary />
        </div>
        <Row className="mb-4">
          <Col md={4}>
            <UserProfile
              firstName={userData.first_name}
              lastName={userData.last_name}
              avatar={userData.avatar}
              email={userData.email}
            />
          </Col>
          <Col md={8}>
            <EditProfile
              firstName={userData.first_name}
              lastName={userData.last_name}
              email={userData.email}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={4}>
            <Instruments />
          </Col>
          <Col md={8}>
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.LIGHT}
              locale="fr"
              autosize
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
