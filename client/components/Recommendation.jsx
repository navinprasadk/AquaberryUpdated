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
  List,
  Loader,
  Dimmer,
  Card,
  Message
} from "semantic-ui-react";
import Slider from "react-slick";
import AppBar from "./AppBar.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AddtoCart from "./../../redux/actions/addItem.js";

const data = [
  {
    imageurl: "BlackBlouse.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "BlackNeckTop.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "GreyCheckedTop.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "RustPrintShirt.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "NavyPrintedShirt.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "GreenSheeredTop.jpg",
    name: "black tops",
    cost: 40
  },
  {
    imageurl: "PetiteRuffleTop.jpg",
    name: "black tops",
    cost: 40
  }
];

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    var styleCarouselSettings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    var hearticon = (
      <Icon
        name="empty heart"
        style={{
          position: "absolute",
          color: "red",
          top: "8px",
          right: "16px"
        }}
        size="large"
        onClick={() => this.props.AddtoCart(data[0])}
      />
    );
    if (cookies.get("flag2") == 1) {
      hearticon = (
        <Icon
          name="heart"
          style={{
            position: "absolute",
            top: "8px",
            right: "16px",
            color: "red"
          }}
          size="large"
        />
      );
    }
    var womanCategory = this.props.cartDetails.women.map((item, key) => {
      var iconComponent = item.checked ? (
        <Icon
          name="heart"
          style={{ position: "absolute", top: "8px", right: "16px" }}
          size="large"
          color="red"
          onClick={() => this.props.AddtoCart(item)}
        />
      ) : (
        <Icon
          name="empty heart"
          style={{
            position: "absolute",
            color: "red",
            top: "8px",
            right: "16px"
          }}
          size="large"
          onClick={() => this.props.AddtoCart(item)}
        />
      );

      return (
        <Grid.Column width={7}>
          <Image src={item.imgurl} alt="" />
          {iconComponent}
          <div>
            <center>
              <p className="WomenCategoryWebViewTitle">{item.name}</p>
            </center>
            <center>
              <p className="WomenCategoryWebViewPrice">{item.price}</p>
            </center>
          </div>
        </Grid.Column>
      );
    });
    return (
      <div style={{ overflow: "hidden" }}>
        <AppBar />

        <Grid>
          <Grid.Row />

          <Grid.Row style={{ marginTop: "2%" }}>
            <Grid.Column width={16}>
              <Segment
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "108%",
                  backgroundColor: "white",
                  color: "black",
                  position: "fixed",
                  zIndex: "100",
                  height: "2vh"
                }}
              >
                <center style={{ fontSize: "90%" }}>Recommended items</center>
                {/* <Image
                  src="./client/assets/Images/flaticon/augmented-realityr.svg"
                  size="mini"
                  style={{
                    height: "50px",
                    top: "11.5%",
                    position: "fixed",
                    zIndex: "100",
                    left: "84%"
                  }}
                /> */}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered columns={2}>
          <Grid.Row only="mobile" style={{ marginTop: "4%" }}>
            {womanCategory}
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row style={{ marginBottom: "3%" }}>
            <Grid.Column width={16}>
              <center
                style={{
                  letterSpacing: "3px",
                  textTransform: "capitalise",
                  fontWeight: "bold",
                  fontFamily: "Raleway"
                }}
              >
                Style it with...
              </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Slider {...styleCarouselSettings}>
          <Grid style={{ marginTop: "0%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="large"
                  style={{ borderRadius: "10%", height: "100%" }}
                  src="/client/assets/Images/istock/171301947.jpg"
                />
                <span style={{ marginTop: "4%", textTransform: "capitalise" }}>
                  <center>
                    <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                      Tan Peep Toe Heels
                    </h5>
                  </center>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <span>20$</span>
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid style={{ marginTop: "0%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="large"
                  style={{ borderRadius: "10%", height: "100%" }}
                  src="/client/assets/Images/istock/185245429.jpg"
                />
                <span style={{ marginTop: "4%", textTransform: "capitalise" }}>
                  <center>
                    <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                      Beige Peep Toe w/ Pink Heels
                    </h5>
                  </center>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <span>22$</span>
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid style={{ marginTop: "0%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="large"
                  style={{ borderRadius: "10%", height: "100%" }}
                  src="/client/assets/Images/istock/469138016.jpg"
                />
                <span style={{ marginTop: "4%", textTransform: "capitalise" }}>
                  <center>
                    <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                      Claasic Black Closed Heels
                    </h5>
                  </center>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <span>28$</span>
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid style={{ marginTop: "0%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="large"
                  style={{ borderRadius: "10%", height: "100%" }}
                  src="/client/assets/Images/istock/453681153.jpg"
                />
                <span style={{ marginTop: "4%", textTransform: "capitalise" }}>
                  <center>
                    <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                      Red Peep Toe Heels
                    </h5>
                  </center>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <span>25$</span>
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Slider>

        <Grid>
          <Grid.Row style={{ marginTop: "6%", marginBottom: "3%" }}>
            <Grid.Column width={16}>
              <center
                style={{
                  letterSpacing: "3px",
                  textTransform: "capitalise",
                  fontWeight: "bold",
                  fontFamily: "Lily Script One",
                  fontSize: "15px"
                }}
              >
                Celebrities Fashion
              </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Slider {...settings}>
          <Grid style={{ marginTop: "0%", marginBottom: "3%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="medium"
                  style={{ borderRadius: "2%", height: "100%" }}
                  src="/client/assets/Images/istock/514514983.jpg"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid style={{ marginTop: "0%", marginBottom: "3%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="medium"
                  style={{ borderRadius: "2%", height: "100%" }}
                  src="/client/assets/Images/istock/611899104.jpg"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid style={{ marginTop: "0%", marginBottom: "3%" }}>
            <Grid.Row>
              <Grid.Column width={1} />
              {/* <img src='./client/assets/Images/istock/622809430ss.jpg' /> */}
              <Grid.Column
                width={15}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  className="card_Promotions_Carousel"
                  size="medium"
                  style={{ borderRadius: "2%", height: "100%" }}
                  src="/client/assets/Images/istock/184911935.jpg"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Slider>

        <Grid>
          <Grid.Row style={{ width: "100%" }}>
            {/* <Grid.Column width={1}/> */}
            <Grid.Column
              width={16}
              style={{ position: "fixed", zIndex: "100", bottom: 0 }}
            >
              <Segment
                style={{
                  backgroundColor: "#ed6a07",
                  color: "white",
                  width: "110%"
                }}
              >
                <center>Promo offer Buy 3 Get 30% Off. Only for you</center>
              </Segment>
            </Grid.Column>
            {/* <Grid.Column width={1}/> */}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartDetails: state.cartReducer
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddtoCart: AddtoCart
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Recommendation);
