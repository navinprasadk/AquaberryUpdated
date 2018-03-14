import React from "react";
import { Grid, Card, Icon, Image, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AppBar from "./AppBar.jsx";

const Promotions = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  var settingsOutfit = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true
    // centerPadding:'90px'
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar />
      {/* First part -> Recommendation  */}
      <Grid style={{ marginTop: "15%" }}>
        <Grid.Row>
          <Grid.Column width={16}>
            <center style={{ color: "black", letterSpacing: "1px" }}>
              <h3
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Raleway",
                  fontSize: "95%",
                  letterSpacing: "1px"
                }}
              >
                Recommendations for you
              </h3>
            </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Slider {...settings}>
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
                src="/client/assets/Images/Newistock/Promoforyou/Recommendation/iStock-514713868.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                    Polka dot top
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
                <span style={{ textDecoration: "line-through" }}>$20</span>
                <span>
                  <span style={{ color: "green" }}>$16</span> for you
                </span>
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
                src="/client/assets/Images/Newistock/Promoforyou/Recommendation/iStock-180705919.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                    Clara Off Shoulder Top
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
                <span style={{ textDecoration: "line-through" }}>$22</span>
                <span>
                  <span style={{ color: "green" }}>$19</span> for you
                </span>
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
                src="/client/assets/Images/Newistock/Promoforyou/Recommendation/iStock-487527431.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                    Megan Shifley Top
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
                <span style={{ textDecoration: "line-through" }}>$28</span>
                <span>
                  <span style={{ color: "green" }}>$22</span> for you
                </span>
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
                src="/client/assets/Images/Newistock/Promoforyou/Recommendation/iStock-491575350.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h5 style={{ fontFamily: "Raleway", fontSize: "90%" }}>
                    Printed SweatShirt
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
                <span style={{ textDecoration: "line-through" }}>$25</span>
                <span>
                  <span style={{ color: "green" }}>$20</span> for you
                </span>
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Slider>

      {/* Second Part -> Outfit for the weekend */}
      <Grid style={{ marginTop: "1%" }}>
        <Grid.Row style={{ marginTop: "0%" }}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            {" "}
            <Divider />{" "}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-6%" }}>
          <Grid.Column width={16}>
            <center style={{ color: "black", letterSpacing: "1px" }}>
              <h3
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Raleway",
                  fontSize: "98%",
                  letterSpacing: "1px"
                }}
              >
                Outfit for the weekend
              </h3>
            </center>
          </Grid.Column>
        </Grid.Row>

        <Slider {...settingsOutfit}>
          <Grid.Row only="mobile">
            <Grid.Column
              width={16}
              style={{ display: "flex", flexDirection: "column" }}
            >
            
                <Image
                  size="medium"
                  style={{
                    borderRadius: "2%"
                  }}
                  src="/client/assets/Images/Newistock/Promoforyou/Outfitfor/iStock-512175755.jpg"
                />
          
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile">
            <Grid.Column
              width={16}
              style={{ display: "flex", flexDirection: "column" }}
            >
                <Image
                  size="medium"
                  style={{
                    borderRadius: "2%"
                  }}
                  src="/client/assets/Images/Newistock/Promoforyou/Outfitfor/accessories.jpg"
                />
            </Grid.Column>
          </Grid.Row>{" "}
          <Grid.Row only="mobile">
            <Grid.Column
              width={16}
              style={{ display: "flex", flexDirection: "column" }}
            >
                <Image
                  size="medium"
                  style={{
                    borderRadius: "2%"
                  }}
                  src="/client/assets/Images/Newistock/Promoforyou/Outfitfor/dress.jpg"
                />
            </Grid.Column>
          </Grid.Row>
        </Slider>

        <Grid.Row only="mobile">
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <center>
              <h4 style={{ textTransform: "Capitalise" }}>
                Sia White Dress
                <p>Style it with - Beige Block Sandals, Red Cross Body Handbag & Straw Hat</p>{" "}
              </h4>
            </center>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row
          style={{ display: "flex", alignItems: "center", marginTop: "-5%" }}
        >
          <Grid.Column width={1} />
          <Grid.Column width={7}>
            <center style={{ fontWeight: "bold" }}>
              <h4>
                Combo Price <span style={{ color: "green" }}> $70 </span>
              </h4>
            </center>
          </Grid.Column>
          <Grid.Column width={7}>
            <center>
              <Link to="/comboCart">
                <Button
                  className="buttonBackground"
                  style={{
                    color: "white",
                    letterSpacing: "1px",
                    textTransform: "capitalise",
                    boxShadow: "7px 16px 24px #eee"
                  }}
                >
                  Add to Bag
                </Button>
              </Link>
            </center>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-6%" }}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            {" "}
            <Divider />{" "}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>

      {/* Third Part -> Trending carousel */}
      <Grid style={{ marginTop: "2%" }}>
        <Grid.Row>
          <Grid.Column width={16}>
            <center style={{ color: "black", letterSpacing: "1px" }}>
              <h3
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Raleway",
                  fontSize: "99%",
                  letterSpacing: "1px"
                }}
              >
                Latest Trends
              </h3>
            </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Slider {...settings}>
        <Grid style={{ marginTop: "0%", marginBottom: "0%" }}>
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
                src="/client/assets/Images/Newistock/Promoforyou/Latesttrends/iStock-459193899.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h4 style={{ fontSize: "95%" }}>Yellow plain top</h4>
                </center>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <span style={{}}>
                  <b>$27</b>
                </span>
                {/* <span><span style={{ color: 'green' }}>16$</span> for you</span> */}
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
                src="/client/assets/Images/Newistock/Promoforyou/Latesttrends/iStock-501130668.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h4 style={{ fontSize: "95%" }}>Pink Handbag</h4>
                </center>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <span style={{}}>
                  <b>$28</b>
                </span>
                {/* <span><span style={{ color: 'green' }}>19$</span> for you</span> */}
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
                src="/client/assets/Images/Newistock/Promoforyou/Latesttrends/iStock-624226620.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h4 style={{ fontSize: "95%" }}>Red top</h4>
                </center>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <span style={{}}>
                  <b>$22</b>
                </span>
                {/* <span><span style={{ color: 'green' }}>22$</span> for you</span> */}
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
                src="/client/assets/Images/Newistock/Promoforyou/Latesttrends/iStock-468629769.jpg"
              />
              <span style={{ marginTop: "4%", textTransform: "uppercase" }}>
                <center>
                  <h4 style={{ fontSize: "95%" }}>Black winter top</h4>
                </center>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <span style={{}}>
                  <b>$19</b>
                </span>
                {/* <span><span style={{ color: 'green' }}>20$</span> for you</span> */}
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Slider>
    </div>
  );
};

export default Promotions;
