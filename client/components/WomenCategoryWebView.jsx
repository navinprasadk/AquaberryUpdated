import React, { Component } from "react";
import {
  Grid,
  Segment,
  Image,
  Modal,
  Header,
  Icon,
  Button,
  Container,
  Label,
  List,
  Loader,
  Dimmer,
  Dropdown,
  Divider
} from "semantic-ui-react";
import AppBarWebView from "./AppBarWebView.jsx";
import "../styles/style.css";

export default class WomenCategoryWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadMessage: false,
      loaderStatus: true
    };
  }
  // componentDidMount() {
  //   setTimeout(()=>{
  //     this.setState({ downloadMessage:true      });
  //   }, 3000);
  //   }

  componentWillMount() {
    this.setState({
      loaderStatus: true
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaderStatus: false
      });
    }, 2000);
  }

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        {this.state.loaderStatus ? (
          <Grid
            style={{
              fontWeight: "bold",
              fontSize: "15px"
            }}
          >
            <Dimmer active>
              <Loader>Loading...</Loader>
            </Dimmer>
          </Grid>
        ) : (
          <Grid
            style={{
              fontWeight: "bold",
              fontSize: "15px"
            }}
          >
            <Grid.Row
              style={{
                height: "56"
              }}
            >
              <Grid.Column width={16}>
                <AppBarWebView />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ marginTop: "-4%" }}>
              <Grid.Column width={16}>
                <center
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontFamily: "Raleway"
                  }}
                >
                  Women's Dresses
                </center>
              </Grid.Column>
            </Grid.Row>

            {/*  Sort and Filter */}
            <Divider style={{ marginTop: "-2%" }} />
            <Grid.Row
              style={{
                backgroundColor: "#eee",
                height: "4vh",
                marginTop: "-2.8%"
              }}
            >
              <Grid.Column width={8}>
                <center
                  style={{
                    textTransform: "Capitalise",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    marginTop: "-5%"
                  }}
                >
                  <Dropdown text="SORT">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Price - Low to High" />
                      <Dropdown.Item text="Price - High to Low" />
                    </Dropdown.Menu>
                  </Dropdown>
                </center>
              </Grid.Column>
              <Grid.Column width={8}>
                <center
                  style={{
                    textTransform: "Capitalise",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontFamily: "Raleway",
                    marginTop: "-5%"
                  }}
                >
                  FILTER
                </center>
              </Grid.Column>
            </Grid.Row>
            <Divider style={{ marginTop: "0.7%" }} />
            <Grid.Row style={{ marginTop: "-5%" }}>
              <Grid.Column width={16}>
                <center
                  style={{
                    color: "#9e9e9e",
                    letterSpacing: "1px",
                    fontFamily: "Raleway"
                  }}
                >
                  238 styles found
                </center>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column width={1} />
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/172435569.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Sylvia Red Knitted Top
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$40.00</p>
                  </center>

                  <Label
                    size="mini"
                    className="labelstyle"
                    circular
                    style={{ backgroundColor: "#2C3E50" }}
                    size="mini"
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#6C3483" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/624226978.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle" />
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$40.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#000" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#2980B9" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column width={1} />
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/621114356.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">Ben Fur Jacket</p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$30.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#566573" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#16A085" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/174932808.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Emy Turtle Neck Knitted Top
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$20.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#922B21" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#F39C12" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column width={1} />

              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/505864838.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Mia High Neck In Light Pink
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$35.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#94b359" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#b2ae85" }}
                  />
                </div>
              </Grid.Column>

              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/493031324.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Flora Long Blue Fleece Jacket
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$20.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#D0D3D4" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#000" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column width={1} />
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/621465950.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Fem multicolor stole
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$30.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#273746" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#16A085" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image
                  src="./client/assets/Images/istock/624248974.jpg"
                  alt=""
                />
                <div>
                  <center style={{ marginTop: "5%" }}>
                    <p className="WomenCategoryWebViewTitle">
                      Megan black embroidered top{" "}
                    </p>
                  </center>
                  <center>
                    <p className="WomenCategoryWebViewPrice">$40.00</p>
                  </center>

                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#4A476F" }}
                  />
                  <Label
                    size="mini"
                    circular
                    style={{ backgroundColor: "#6F4767" }}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            {/* <Grid.Row>
                  <Grid.Column width={1}/>
                  <Grid.Column width={7}>
                    <Image src='./client/assets/Images/istock/9.jpg' alt="" />
                    <div>
                      <center>
                        <p className="WomenCategoryWebViewTitle">Grey Textured V-Neck Tunic Jumper</p>
                      </center>
                      <center>
                        <p className="WomenCategoryWebViewPrice">$20.00</p>
                      </center>

                        <Label size='mini' circular style={{backgroundColor:"#f5f5f5"}} />
                        <Label size='mini' circular style={{backgroundColor:"#56323E"}} />

                    </div>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Image src='./client/assets/Images/BlueJumper.jpg' alt="" />
                    <div>
                      <center>
                        <p className="WomenCategoryWebViewTitle">Blue Button Detail Jumper</p>
                      </center>
                      <center>
                        <p className="WomenCategoryWebViewPrice">$40.00</p>
                      </center>

                        <Label size='mini' circular style={{backgroundColor:"#E3A269"}} />
                        <Label size='mini' circular style={{backgroundColor:"#78BDD3"}} />
                      
                    </div>
                  </Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row> */}
          </Grid>
        )}
      </div>
    );
  }
}
