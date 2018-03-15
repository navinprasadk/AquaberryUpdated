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
import { VoicePlayer, VoiceRecognition } from "react-voice-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AddtoCart from "./../../redux/actions/addItem.js";

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0,
      voiceRecommendation: false,
      Recommended: false,
      emptyHeart: true,
      emptyHeart1: true,
      emptyHeart2: true,
      emptyHeart3: true,
    };
    this.handleWishlist = this.handleWishlist.bind(this);
  }
  handleWishlist() {
    this.setState({
      wishlistStatus: true
    });
  }
  componentDidMount() {
    this.setState({ voiceRecommendation: "true" });
  }
  onEnd() {}
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

    // var hearticon = (
    //   <Icon
    //     name="empty heart"
    //     style={{
    //       position: "absolute",
    //       color: "red",
    //       top: "8px",
    //       right: "16px"
    //     }}
    //     size="large"
    //     onClick={() => this.props.AddtoCart(data[0])}
    //   />
    // );

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
          <Grid.Row style={{marginTop:'7%'}}>
            <Grid.Column width={2} />
            <Grid.Column width={5}>
              <center><Image
                circular
                // onClick={this.handleVoiceRecommendation.bind(this)}
                src="./client/assets/Images/istock/bot.png"
                size="medium"
                style={{
                  top: "20%"
                  // left: "-134%"
                }}
              /></center>

            </Grid.Column>
            <Grid.Column width={9} style={{marginTop:'15%',marginLeft:'-9%'}}>
              <h3>Selected Size : {this.props.cartDetails.size} </h3>
            </Grid.Column>
            {/* <Grid.Column width={1}/> */}
          </Grid.Row>
          {this.state.Recommended == true ? (
            <Grid.Row style={{ marginTop: "2%" }}>
              <Grid.Column width={16}>
                <Segment
                  style={{
                    marginTop: "-4%",
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
                    height: "2vh"
                  }}
                >
                  <center style={{ fontSize: "90%",marginLeft:'-9%' }}>Recommended items</center>
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
          ) : null}
        </Grid>
        {this.state.Recommended == true ? (
          <Grid centered columns={2}>
            <Grid.Row only="mobile" style={{ marginTop: "4%" }}>
              {womanCategory}
            </Grid.Row>
          </Grid>
        ) : null}
        {this.state.Recommended == true ? (
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
        ) : null}
        {this.state.Recommended == true ? (
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
                    src="/client/assets/Images/Newistock/recommended/Styleitwith/iStock-171301947.jpg"
                  />
                  {this.state.emptyHeart ? (
                    <Icon
                      name="empty heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart: false })}
                    />
                  ) : (
                    <Icon
                      name="heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart: true })}
                    />
                  )}

                  <span
                    style={{ marginTop: "4%", textTransform: "capitalise" }}
                  >
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
                    <span>$20</span>
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
                    src="/client/assets/Images/Newistock/recommended/Styleitwith/iStock-185245429.jpg"
                  />
                  {this.state.emptyHeart1 ? (
                    <Icon
                      name="empty heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart1: false })}
                    />
                  ) : (
                    <Icon
                      name="heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart1: true })}
                    />
                  )}

                  <span
                    style={{ marginTop: "4%", textTransform: "capitalise" }}
                  >
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
                    <span>$22</span>
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
                    src="/client/assets/Images/Newistock/recommended/Styleitwith/iStock-469138016.jpg"
                  />
                  {this.state.emptyHeart2 ? (
                    <Icon
                      name="empty heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart2: false })}
                    />
                  ) : (
                    <Icon
                      name="heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart2: true })}
                    />
                  )}

                  <span
                    style={{ marginTop: "4%", textTransform: "capitalise" }}
                  >
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
                    <span>$28</span>
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
                    src="/client/assets/Images/Newistock/recommended/Styleitwith/iStock-453681153.jpg"
                  />{" "}
                  {this.state.emptyHeart3 ? (
                    <Icon
                      name="empty heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart3: false })}
                    />
                  ) : (
                    <Icon
                      name="heart"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "16px"
                      }}
                      size="large"
                      color="red"
                      onClick={() => this.setState({ emptyHeart3: true })}
                    />
                  )}
                  <span
                    style={{ marginTop: "4%", textTransform: "capitalise" }}
                  >
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
                    <span>$25</span>
                  </span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Slider>
        ) : null}
        {this.state.Recommended == true ? (
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
        ) : null}
        {this.state.Recommended == true ? (
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
                    src="/client/assets/Images/Newistock/recommended/celebrities/iStock-514514983.jpg"
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
                    src="/client/assets/Images/Newistock/recommended/celebrities/iStock-611899104.jpg"
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
                    src="/client/assets/Images/Newistock/recommended/celebrities/iStock-184911935.jpg"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Slider>
        ) : null}
        {this.state.Recommended == true ? (
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
        ) : null}
        {this.state.voiceRecommendation && (
          <VoicePlayer
            play
            text="Here Are some Recommended items based on your size and preferences"
            onEnd={() => {
              this.setState({
                Recommended: true,
                voiceRecommendation: false
              });
            }}
          />
        )}
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
