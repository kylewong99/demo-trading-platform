import React from "react";
import "./instruments.css";
import {
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@material-ui/core/InputBase";
import { useEffect, useState } from "react";

const Instruments = () => {
  const [marketData, setMarketData] = useState([]);
  const [queryResult, setQueryResult] = useState([]);

  const axios = require("axios").default;

  const getMarketData = () => {
    axios
      .get(
        "https://secure.equinoxmarkets.com/api/spread-group-symbols-price/RUBY-Premium"
      )
      .then((response) => {
        let previousMarketData = [];
        if (marketData.length > 0) {
          previousMarketData = marketData;
          response.data.map((item, index) => {
            let newPrice = parseFloat(item.Bid);
            let oldPrice = parseFloat(previousMarketData[index].Bid);
            let percentage = Math.abs((
              ((newPrice - oldPrice) / ((newPrice + oldPrice) / 2)) *
              100
            )).toFixed(4);

            item.percentage = percentage.toString() + "%";

            if (newPrice < oldPrice) {
              item.changes = "down";
            } else if (newPrice > oldPrice) {
              item.changes = "up";
            } else {
              item.changes = "none";
            }
            return item;
          });
        }
        setMarketData(response.data);
      });
  };

  useEffect(() => {
    getMarketData();
  }, [marketData]);

  return (
    <>
      <Card style={{borderRadius: "3%", boxShadow: "2px 2px 5px 2px #DCDDE2", padding: "10px"}}>
        <Card.Header style={{ backgroundColor: "white", border: "0px" }}>
          <Row className="align-items-center">
            <Col style={{fontWeight: "bold"}} md={4}>Instruments</Col>
            <Col
              style={{ border: "1px solid grey" }}
              md={{ span: 5, offset: 3 }}
            >
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  let queryResult = marketData.filter((item) =>
                    item.Symbol.toLowerCase().includes(
                      e.target.value.toLowerCase()
                    )
                  );
                  setQueryResult(queryResult);
                }}
                startAdornment={<SearchIcon />}
              />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div style={{ maxHeight: "600px", overflowY: "auto" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sell</th>
                    <th>Buy</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {queryResult.length > 0
                    ? queryResult.map((item) => {
                        return (
                          <>
                            <tr className={item.changes} key={item.id}>
                              <td>{item.Symbol}</td>
                              <td>{item.Ask}</td>
                              <td>{item.Bid}</td>
                              <td>{item.percentage}</td>
                            </tr>
                          </>
                        );
                      })
                    : marketData.map((item) => {
                        return (
                          <>
                            <tr className={item.changes} key={item.id}>
                              <td>{item.Symbol}</td>
                              <td>{item.Ask}</td>
                              <td>{item.Bid}</td>
                              <td>{item.percentage}</td>
                            </tr>
                          </>
                        );
                      })}
                </tbody>
              </Table>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Instruments;
