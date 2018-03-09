import React, { Component } from "react";
import {
  Grid,
  Form,
  Radio,
  Button,
  Divider,
  Dimmer,
  Card,
  Message,
  Dropdown,
  Input,
  Accordion,
  Icon,
  Table,
  Menu,
  Label,
  Header,
  Popup,
  Loader,
  Segment,
  Image
} from "semantic-ui-react";
import AppBar from "./AppBar.jsx";
import Delivery from "./DeliveryOptions.jsx";
import { ScaleLoader } from "halogenium";

import { Link } from "react-router-dom";

const locationDetails = [
  {
    header: "Charlotte Russe",
    description: "Honey Creek Mall, Terre Haute, IN, USA"
  }
];
const multiStoreDetails = [
  {
    header: "BOOHOO",
    description: " 49-51 Dale Street, Manchester, M1 2HF, US"
  },
  {
    header: "LOFT",
    description: "1251 US 31 North, Greenwood, IN 46142, United States"
  }
];
export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      inputvalue: "",
      activeIndex: 0,
      radioButtonStatus: false,
      multiDataStatus: false,
      multiDimmerStatus: false,
      offlineDataStatus: false,
      offlineDimmerStatus: false,
      loaderStatus: true,
      deliveryComponentStatus: false,
      disableZipCode:false,
    };
    this.triggerDeliveryComponent = this.triggerDeliveryComponent.bind(this);
  }
  handlechange(e, value) {
    console.log(e.target, value);
    if(value.value.length > 4){
      this.setState({
        disableZipCode: true,
      });
    }
    this.setState({ inputvalue: value.value });
    if (value.value.length === 5) {
      this.setState({
        radioButtonDimmerStatus: true,
        radioButtonStatus: false
      });
      setTimeout(() => {
        this.setState({
          radioButtonDimmerStatus: false,
          radioButtonStatus: true
        });
      }, 3000);
    }
  }
  handleClick(e, titleProps) {
    // console.log('--->', titleProps);
    var index = titleProps;
    var activeIndex = this.state;
    var newIndex = activeIndex === index ? -1 : index;
    console.log(newIndex);
    this.setState({ activeIndex: newIndex });
    // this.setState({  },function(){
    //   console.log('state',this.state.activeIndex);
    // })
  }
  triggerDeliveryComponent() {
    this.setState({
      deliveryComponentStatus: true
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaderStatus: false
      });
    }, 1000);
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{ overflow: "hidden", fontFamily: "Raleway" }}>
        {this.state.loaderStatus ? (
          <Grid>
            <Dimmer active>
              <Loader>Loading.. </Loader>
            </Dimmer>
          </Grid>
        ) : (
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <AppBar />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <h3>COUNTRY</h3>
                <Dropdown
                  style={{ fontFamily: "Raleway" }}
                  text="United States of America"
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <h3 style={{ fontFamily: "Raleway" }}>ZIP CODE</h3>
                <Input
                  fluid="fluid"
                  type="number"
                  class="inputMaxLength"
                  placeholder="90001"
                  onChange={this.handlechange.bind(this)}
                  disabled={this.state.disableZipCode}
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            {this.state.radioButtonStatus ? (
              <Grid.Row
                style={{
                  marginTop: "3%"
                }}
              >
                <Grid.Column width={2} />
                <center>
                  <h3
                    style={{
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      float: "left",
                      fontFamily: "Raleway"
                    }}
                  >
                    Inventory status
                  </h3>
                </center>
                <Grid.Column width={14}>
                  <h4
                    style={{
                      marginTop: "2%",
                      marginLeft: "13%",
                      fontFamily: "Raleway"
                    }}
                  >
                    Size : S{" "}
                  </h4>
                  <Grid
                    columns={3}
                    style={{
                      marginLeft: "8%",
                      fontFamily: "Raleway",
                      fontSize: "15px"
                    }}
                  >
                    <Grid.Row>
                      <Grid.Column width={2} />
                      <Grid.Column width={8}>
                        <Header style={{ fontFamily: "Raleway" }}>Store</Header>
                      </Grid.Column>
                      {/* <Grid.Column width={1}/> */}
                      <Grid.Column width={6}>
                        <Header style={{ fontFamily: "Raleway" }}>Count</Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: "-10%" }}>
                      <Grid.Column width={14} style={{ marginLeft: "7%" }}>
                        <Divider />
                      </Grid.Column>
                    </Grid.Row>
                    <Popup
                      trigger={
                        <Grid.Row style={{ marginTop: "-10%" }}>
                          <Grid.Column width={2} />
                          <Grid.Column
                            id="titleText"
                            width={8}
                            style={{ color: "blue", fontWeight: "bold" }}
                          >
                            Aquaberry
                          </Grid.Column>
                          {/* <Grid.Column width={1}>-</Grid.Column> */}
                          <Grid.Column
                            width={6}
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Raleway"
                            }}
                          >
                            {" "}
                            30 Pcs{" "}
                          </Grid.Column>
                        </Grid.Row>
                      }
                      on="hover"
                      hideOnScroll
                    >
                      <Grid
                        divided
                        columns="equal"
                        style={{ fontFamily: "Raleway" }}
                      >
                        <h3>Store Near You</h3>
                        <Grid.Row>
                          <Grid.Column width={9}>
                            <h5 style={{ fontFamily: "Raleway" }}>
                              100 W Broadway,<br />Glendale,CA
                            </h5>
                          </Grid.Column>
                          <Grid.Column width={5} style={{ fontWeight: "bold" }}>
                            <h5 style={{ fontFamily: "Raleway" }}>
                              12 pcs Left
                            </h5>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={9}>
                            <h5 style={{ fontFamily: "Raleway" }}>
                              1689 Arden Way,<br />Sacramento,CA
                            </h5>
                          </Grid.Column>
                          <Grid.Column width={5}>
                            <h5 style={{ fontFamily: "Raleway" }}>
                              18 pcs Left
                            </h5>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Popup>

                    <Grid.Row>
                      <Grid.Column width={2} />
                      <Grid.Column width={8}>
                        <Header
                          onClick={this.triggerDeliveryComponent}
                          as="h4"
                          style={{
                            color: "blue",
                            fontWeight: "bold",
                            fontFamily: "Raleway"
                          }}
                        >
                          Online
                        </Header>
                      </Grid.Column>
                      {/* <Grid.Column width={1}>-</Grid.Column> */}
                      <Grid.Column
                        width={6}
                        style={{ fontWeight: "bold", fontFamily: "Raleway" }}
                      >
                        25 pcs{" "}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={2} />
                      <Grid.Column
                        width={8}
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Raleway",
                          color: "blue"
                        }}
                      >
                        NORDSTORM
                      </Grid.Column>
                      <Grid.Column
                        width={6}
                        style={{ fontWeight: "bold", fontFamily: "Raleway" }}
                      >
                        10 pcs{" "}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            ) : (
              <Grid.Row
                style={{
                  marginTop: "3%",
                  height: "15vh"
                }}
              >
                <Dimmer blurring active={this.state.radioButtonDimmerStatus}>
                  {/* <ScaleLoader>Scanning Inventory</ScaleLoader> */}
                  <span>
                    <ScaleLoader color="#fff" size="16px" margin="4px" />
                    <p style={{ marginTop: "0%" }}> Scanning Inventory</p>
                  </span>
                </Dimmer>
              </Grid.Row>
            )}
            {this.state.deliveryComponentStatus ? <Delivery /> : null}
          </Grid>
        )}
      </div>
    );
  }
}
