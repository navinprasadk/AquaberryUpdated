import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import AppBar from "./AppBar.jsx";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar />
      <Grid>
        
        <Grid.Row style={{ marginTop: "14%" }}>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <center style={{ fontSize: "20px", fontWeight: "bold" }}>
              My Wish List
            </center>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={7}>
            <Link to="/productDetails/top1">
              <Image src="./client/assets/Images/istock/175505251.jpg" />
              <div style={{ color: "black" }}>
                <p>Mia Blue Dress w/ Polka Dots</p>
                <p>$24.00</p>
              </div>
            </Link>
          </Grid.Column>
          <Grid.Column width={7}>
            <Image src="./client/assets/Images/istock/467870548.jpg" />
            <div>
              <p>Sia Dress w/ Pockets</p>
              <p>$33.00</p>
            </div>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{}}>
          <Grid.Column width={1} />
          <Grid.Column width={7}>
            <Image src="./client/assets/Images/istock/172470273.jpg" />
            <div>
              <p>Flora Short Dress</p>
              <p>$25.00</p>
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <Image src="./client/assets/Images/istock/181101785.jpg" />
            <div>
              <p>Myrtle Short Sleeveless Dress</p>
              <p>$50.40</p>
            </div>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{ marginBottom: "12%" }}>
          <Grid.Column width={1} />
          <Grid.Column width={7}>
            <Image src="./client/assets/Images/istock/453681153.jpg" />
            <div>
              <p>Red Peep Toe Heels</p>
              <p>$25.00</p>
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <Image src="./client/assets/Images/istock/171301947.jpg" />
            <div>
              <p>Tan Peep Toe Heels</p>
              <p>$20.00</p>
            </div>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

      </Grid>

      <Grid>

        <Grid.Row>
          <Grid.Column width={16} style={{ position: "fixed", bottom: "0%" }}>
            <Segment
              style={{
                backgroundColor: "#ed6a07",
                color: "white",
                width: "108%"
              }}
            >
              <center>
                Try out our <strong>Virtual Fitting</strong> room to see how you look!
              </center>
            </Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </div>
  );
};

export default WishList;
