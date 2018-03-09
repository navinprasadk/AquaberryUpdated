import React, { Component } from "react";
import { Grid, Advertisement, Dropdown, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import handleSize from "./../../redux/actions/handleSize.js";

class ModifySize extends Component {
  constructor(props) {
    super(props);
  }
  handlemodifysize(e, a) {
    this.props.handleSize(a.value);
  }
  render() {
    const options = [
      {
        key: "Petite Small",
        text: "Petite Small",
        value: "Petite Small"
      },
      {
        key: "Small",
        text: "Small",
        value: "Small"
      },
      {
        key: "Medium",
        text: "Medium",
        value: "Medium"
      },
      {
        key: "Large",
        text: "Large",
        value: "Large"
      },
      {
        key: "Extra Large",
        text: "Extra Large",
        value: "Extra Large"
      }
    ];
    return (
      <div>
        <Advertisement
          unit="banner"
          test="Shop With Shape"
          style={{
            marginTop: "0%",
            width: "100%",
            fontSize: "20px",
            fontFamily: "Raleway",
            backgroundColor: "#ed6a07"
          }}
        />
        <Grid>
          <Grid.Row style={{ marginTop: "10%" }}>
            <Grid.Column width={2} />
            <Grid.Column
              width={12}
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              Best Size fit :{" "}
              <spam style={{ fontSize: "20px" }}>REGULAR SMALL</spam>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "3%" }}>
            <Grid.Column width={2} />
            <Grid.Column
              width={12}
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              If you wish to modify your size
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "3%" }}>
            <Grid.Column width={2} />
            <Grid.Column
              width={12}
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              Select Size : <br />
              <br />
              <Dropdown
                placeholder="State"
                search
                selection
                options={options}
                onChange={this.handlemodifysize.bind(this)}
              />
              {/* onChange={()=>this.props.handleSize(value)} */}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <center>
                <Link to="/personalstylist/true/true/true/true/true/true">
                  <Button style={{ backgroundColor: "#ed6a07" }}>Submit</Button>
                </Link>
              </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Recommended: state.Recommended,
    cartDetails: state.cartReducer
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleSize: handleSize
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ModifySize);
