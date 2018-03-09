import React from "react";
import { Grid, Input, Button, Icon, Divider, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div
      className="bgImageSignin"
      style={{ backgroundImage: "url(./client/assets/Images/signin4.jpeg)" }}
    >
      <Grid>
        {/* backgroundImage:'url(https://www298.lunapic.com/do-not-link-here-use-hosting-instead/151800841630185068?1589511572)' */}
        <Grid.Row style={{ marginTop: "15%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column
            width={12}
            style={{
              fontWeight: "normal",
              letterSpacing: "3px",
              textAlign: "center"
            }}
          >
            <h1 id="titleText">Aquaberry</h1>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

       
        <Grid.Row style={{ marginTop: "10%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input
              style={{ opacity: 0.6 }}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="EMAIL ADDRESS"
            />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-1%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input
              style={{ opacity: 0.6 }}
              fluid
              icon="lock"
              iconcolor="blue"
              iconPosition="left"
              type="password"
              placeholder="PASSWORD"
            />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            {" "}
            <center>
              <Button
                fluid
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#EB4678",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "100%",
                  color: "#FAFAFA"
                }}
              >
                SIGN IN
              </Button>
            </center>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        {/* <Grid.Row style={{marginTop:"-2%"}} only='mobile'>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={10}><p style={{textAlign:"center", fontWeight:"normal", letterSpacing:"2px",fontFamily:"Open Sans"}} >Forgotten Password?</p></Grid.Column>
            <Grid.Column width={3}></Grid.Column>
        </Grid.Row> */}

        <Grid.Row style={{ marginTop: "-2%" }} only="mobile">
          <Grid.Column width={1} />
          <Grid.Column
            width={14}
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              letterSpacing: "2px",
              fontFamily: "Raleway"
            }}
          >
            <Divider horizontal style={{ color: "#ECEFF1" }}>
              Or
            </Divider>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-2%" }} only="mobile">
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Link to="/fb">
              <Button
                fluid
                color="facebook"
                style={{ letterSpacing: "2px", borderRadius: "25px" }}
              >
                <Icon name="facebook" style={{ float: "left" }} />FACEBOOK
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Button
              fluid
              color="google plus"
              style={{ letterSpacing: "2px", borderRadius: "25px" }}
            >
              <Icon name="google" style={{ float: "left" }} />GOOGLE
            </Button>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Button
              fluid
              color="twitter"
              style={{ letterSpacing: "2px", borderRadius: "25px" }}
            >
              <Icon name="twitter" style={{ float: "left" }} /> TWITTER
            </Button>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>

        {/* <Grid.Row style={{marginTop:"-4%"}} only='mobile'>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14} style={{textAlign:"center", textTransform:'capitalize', letterSpacing:"2px",fontFamily:"Open Sans"}} ><Divider/></Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row> */}

        {/*
        <Grid.Row style={{marginTop:"-1%"}} only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12} style={{textAlign:"center", fontWeight:"normal", letterSpacing:"2px",fontFamily:"Open Sans", textAlign:'center'}}><p>Sign in with your social account</p></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row> */}

        {/* <Grid.Row style={{marginTop:"2%"}} only='mobile'>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={2}><Image size="massive" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" style={{fontSize:'400px'}}/></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={2}><Image src="https://www.ramvellanki.com/img/google.png" /></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={2}><Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png" /></Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row> */}

        <Grid.Row style={{ marginTop: "0%", marginBottom: "0%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p
              style={{
                textAlign: "center",
                fontWeight: "normal",
                letterSpacing: "2px",
                fontFamily: "Raleway",
                color: "#ECEFF1"
              }}
            >
              {" "}
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ fontWeight: "bolder", color: "#ECEFF1" }}
              >
                Signup today
              </Link>{" "}
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Signin;
