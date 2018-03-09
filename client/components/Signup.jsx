import React from "react";
import {
  Grid,
  Input,
  Button,
  Icon,
  Divider,
  Dropdown,
  Radio,
  Form
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const dateOptions = [
  { key: "1", text: "1" },
  { key: "2", text: "2" },
  { key: "3", text: "3" },
  { key: "4", text: "4" },
  { key: "5", text: "5" },
  { key: "6", text: "6" },
  { key: "7", text: "7" },
  { key: "8", text: "8" },
  { key: "9", text: "9" },
  { key: "10", text: "10" },
  { key: "11", text: "11" },
  { key: "12", text: "12" },
  { key: "13", text: "13" },
  { key: "14", text: "14" },
  { key: "15", text: "15" },
  { key: "16", text: "16" },
  { key: "17", text: "17" },
  { key: "18", text: "18" },
  { key: "19", text: "19" },
  { key: "20", text: "20" },
  { key: "21", text: "21" },
  { key: "22", text: "22" },
  { key: "23", text: "23" },
  { key: "24", text: "24" },
  { key: "25", text: "25" },
  { key: "26", text: "26" },
  { key: "27", text: "27" },
  { key: "28", text: "28" },
  { key: "29", text: "29" },
  { key: "30", text: "30" },
  { key: "31", text: "31" }
];

const yearOptions = [
  { key: "1971", text: "1971" },
  { key: "1972", text: "1972" },
  { key: "1973", text: "1973" },
  { key: "1974", text: "1974" },
  { key: "1975", text: "1975" },
  { key: "1976", text: "1976" },
  { key: "1977", text: "1977" },
  { key: "1978", text: "1978" },
  { key: "1979", text: "1979" },
  { key: "1980", text: "1980" },
  { key: "1981", text: "1981" },
  { key: "1982", text: "1982" },
  { key: "1983", text: "1983" },
  { key: "1984", text: "1984" },
  { key: "1985", text: "1985" },
  { key: "1986", text: "1986" },
  { key: "1987", text: "1987" },
  { key: "1988", text: "1988" },
  { key: "1989", text: "1989" },
  { key: "1990", text: "1990" },
  { key: "1991", text: "1991" },
  { key: "1992", text: "1992" },
  { key: "1993", text: "1993" },
  { key: "1994", text: "1994" },
  { key: "1995", text: "1995" },
  { key: "1996", text: "1996" },
  { key: "1997", text: "1997" },
  { key: "1998", text: "1998" },
  { key: "1999", text: "1999" },
  { key: "2000", text: "2000" },
  { key: "2001", text: "2001" }
];

const monthOptions = [
  { key: "Jan", text: "Jan" },
  { key: "Feb", text: "Feb" },
  { key: "Mar", text: "Mar" },
  { key: "Apr", text: "Apr" },
  { key: "May", text: "May" },
  { key: "Jun", text: "Jun" },
  { key: "Jul", text: "Jul" },
  { key: "Aug", text: "Aug" },
  { key: "Sep", text: "Sep" },
  { key: "Oct", text: "Oct" },
  { key: "Nov", text: "Nov" },
  { key: "Dec", text: "Dec" }
];

const Signup = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: "url(./client/assets/Images/signin4.jpeg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "100%"
      }}
    >
      <Grid>
        <Grid.Row style={{ marginTop: "15%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column
            width={12}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "3px"
            }}
          >
            <h1 id="titleText">Aquaberry</h1>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column
            width={12}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: "Raleway",
              color: "#ECEFF1"
            }}
          >
            <h3>Sign up with</h3>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "0%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Button fluid color="facebook" style={{ letterSpacing: "2px" }}>
              <Icon
                name="facebook"
                style={{ float: "left", fontFamily: "Raleway" }}
              />FACEBOOK
            </Button>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Button fluid color="google plus" style={{ letterSpacing: "2px" }}>
              <Icon
                name="google"
                style={{ float: "left", fontFamily: "Raleway" }}
              />GOOGLE
            </Button>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Button fluid color="twitter" style={{ letterSpacing: "2px" }}>
              <Icon
                name="twitter"
                style={{ float: "left", fontFamily: "Raleway" }}
              />{" "}
              TWITTER
            </Button>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-2%" }} only="mobile">
          <Grid.Column width={1} />
          <Grid.Column
            width={14}
            style={{
              textAlign: "center",
              letterSpacing: "2px",
              fontFamily: "Raleway"
            }}
          >
            <Divider
              horizontal
              style={{ color: "#ECEFF1", fontFamily: "Raleway" }}
            >
              Or
            </Divider>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-2%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column
            width={12}
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontFamily: "Raleway",
              color: "#ECEFF1"
            }}
          >
            <h3>Sign up using your email address</h3>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "0%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              EMAIL ADDRESS
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input style={{ opacity: 0.6 }} fluid required />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              FIRST NAME
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input style={{ opacity: 0.6 }} fluid required />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              LAST NAME{" "}
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input style={{ opacity: 0.6 }} fluid required />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              PASSWORD{" "}
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Input style={{ opacity: 0.6 }} fluid type="password" required />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              DATE OF BIRTH{" "}
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={4}>
            <Dropdown
              style={{ opacity: 0.6 }}
              fluid
              placeholder="01"
              search
              selection
              options={dateOptions}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown
              style={{ opacity: 0.6 }}
              fluid
              placeholder="Jan"
              search
              selection
              options={monthOptions}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown
              style={{ opacity: 0.6 }}
              fluid
              placeholder="1990"
              search
              selection
              options={yearOptions}
            />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-3%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <p className="signupInputLabel" style={{ letterSpacing: "2px" }}>
              GENDER{" "}
            </p>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "-5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column width={5}>
            <Radio style={{ opacity: 0.6 }} name="radioGroup" value="this" />
            <label style={{ color: "white" }}>&nbsp; Male</label>
          </Grid.Column>
          <Grid.Column width={5}>
            <Radio style={{ opacity: 0.6 }} name="radioGroup" value="this" />
            <label style={{ color: "white" }}>&nbsp; Female</label>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "0%" }} only="mobile">
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
                JOIN AQUABERRY
              </Button>
            </center>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row style={{ marginTop: "0%", marginBottom: "5%" }} only="mobile">
          <Grid.Column width={2} />
          <Grid.Column
            width={12}
            style={{
              textAlign: "center",
              fontWeight: "normal",
              letterSpacing: "2px",
              fontFamily: "Raleway",
              color: "#ECEFF1"
            }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{ fontWeight: "bolder", color: "#ECEFF1" }}
            >
              {" "}
              Signin
            </Link>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </div>
  );
};
 export default Signup;