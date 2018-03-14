import React, { Component } from "react";
import {
  Grid,
  Button,
  Image,
  Header,
  Icon,
  Segment,
  Message,
  Accordion,
  Step,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from "./AppBar.jsx";
import ChatApp from "./ChatApp.jsx";

export default class ModifyDeliveryDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      dateValue: "",
      dateValueTransit: ""
    };
  }

  componentWillMount() {
    var d = new Date();
    d.setDate(d.getDate() + 10);
    var x = d.toString().slice(4, 16);
    this.setState({
      dateValue: x
    });

    // Today
    var today = new Date();
    today.setDate(today.getDate());
    var a = today.toString().slice(4, 16);
    this.setState({
      dateValueTransit: a
    });
  }

  handleClick(e, titleProps) {
    var index = titleProps;
    var activeIndex = this.state;
    var newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex }, function() {
      console.log("state", this.state.activeIndex);
    });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <AppBar />

        <Grid>
          <Grid.Row only="mobile" style={{ marginTop: "15%" }}>
            <Grid.Column width={1} />
            <Grid.Column
              width={14}
              style={{
                fontWeight: "bold",
                textTransform: "capitalise",
                letterSpacing: "2px"
              }}
            >
              <center>
                {" "}
                <span style={{ fontSize: "125%", fontFamily: "Raleway" }}>
                  Customer Care
                </span>{" "}
              </center>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>

          <Grid.Row
            only="mobile"
            className="card_orderDetails"
            style={{ marginTop: "0%" }}
          >
            <Grid.Column width={16}>
              <h5
                style={{
                  color: "orange",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontFamily: "Raleway"
                }}
              >
                In-Transit
              </h5>
            </Grid.Column>
            <Grid.Column
              width={16}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontWeight: "bold",
                textTransform: "capitalise",
                letterSpacing: "2px"
              }}
            >
              <p
                className="lightGreyText"
                style={{ fontSize: "75%", fontFamily: "Raleway" }}
              >
                ORDER NO: 01120448
              </p>
              <p
                className="lightGreyText"
                style={{
                  position: "right",
                  fontSize: "75%",
                  fontFamily: "Raleway"
                }}
              >
                Placed on {this.state.dateValueTransit}
              </p>
            </Grid.Column>
            <Divider />
            <Grid.Column
              width={16}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Image
                size="tiny"
                style={{ borderRadius: "10%", height: "100%" }}
                src="/client/assets/Images/Newistock/Orders/iStock-467870548.jpg"
              />
              <p style={{ marginLeft: "3%", fontFamily: "Raleway" }}>
                <Header className="darkText"> Sia Dress w/ Pockets</Header>
                <p
                  className="greyText"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontSize: "90%",
                    color: "#9E9E9E",
                    fontFamily: "Raleway"
                  }}
                >
                  <span>
                    <Header>$26.00</Header>
                  </span>{" "}
                  <span>
                    <span style={{ fontWeight: "bold" }}>Quantity</span> 1 Item
                  </span>{" "}
                </p>
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="mobile">
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <center>
                <h3 style={{ fontFamily: "Raleway", letterSpacing: "2px" }}>
                  Talk to us{" "}
                </h3>
              </center>
              <br />
              <h3 style={{ fontFamily: "Raleway" }}>
                Update your delivery date and time here!!
              </h3>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
        <ChatApp style={{ height: "50%", fontFamily: "Raleway" }} />
      </div>
    );
  }
}
