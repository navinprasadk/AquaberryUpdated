import React, { Component } from "react";
import {
  Grid,
  Advertisement,
  Button,
  Image,
  Dimmer,
  Loader,
  Modal,
  Header
} from "semantic-ui-react";
import Snackbar from "material-ui/Snackbar";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import handleSize from "./../../redux/actions/handleSize.js";

class ShopWithShape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontupload: false,
      sideupload: false,
      loaderstatus: false,
      open: false,
      openmodal: false,
      fetchloader: false,
      sizemodal: false
    };
    this.handlemodal = this.handlemodal.bind(this);
  }
  handlefrontupload() {
    setTimeout(() => {
      this.setState({
        loaderstatus: false
      });
    }, 1000);
    this.setState({ frontupload: true, loaderstatus: true, open: true });
  }
  handlesideupload() {
    setTimeout(() => {
      this.setState({
        loaderstatus: false
      });
    }, 1000);
    this.setState({ sideupload: true, loaderstatus: true, open: true });
  }
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  handlesubmit() {
    setTimeout(() => {
      this.setState({
        openmodal: false,
        fetchloader: true
      });
      this.handlemodal();
    }, 3000);
    this.setState({ openmodal: true });
  }
  handlemodal() {
    setTimeout(() => {
      this.setState({
        fetchloader: false
      });
      this.setState({ sizemodal: true });
    }, 3000);
  }
  render() {
    console.log("------>", this.props.cartDetails.size);
    var frontview = (
      <div>
        <center
          style={{
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Front View
        </center>
        <center style={{ marginTop: "20%" }}>
          <Button onClick={this.handlefrontupload.bind(this)}>Upload</Button>
        </center>
      </div>
    );
    var frontupload = (
      <div>
        <center
          style={{
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Front View
        </center>
        <Image src="./client/assets/Images/istock/508132676-1.png" />
      </div>
    );
    var sideview = (
      <div>
        <center
          style={{
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Side View
        </center>
        <center style={{ marginTop: "20%" }}>
          <Button onClick={this.handlesideupload.bind(this)}>Upload</Button>
        </center>
      </div>
    );
    var sideupload = (
      <div>
        <center
          style={{
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Side View
        </center>
        <Image src="./client/assets/Images/istock/508132536-1.png" />
      </div>
    );
    return (
      <div style={{ overflow: "hidden" }}>
        <Modal open={this.state.sizemodal} basic size="small">
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14} style={{ fontFamily: "Raleway" }}>
                  <Header style={{ color: "white", fontFamily: "Raleway" }}>
                    <center>
                      Best Fit size is{" "}
                      <spam
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "18px",
                          fontWeight: "bold"
                        }}
                      >
                        Regular SMALL
                      </spam>
                    </center>
                  </Header>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3} />
                <Grid.Column width={11}>
                  <Link to="/modifysize">
                    <Button color="orange" inverted>
                      Modify
                    </Button>
                  </Link>
                  <Link to="/personalstylist/true/true/true/true/true/true">
                    <Button
                      color="orange"
                      inverted
                      onClick={() => this.props.handleSize("small")}
                    >
                      OK
                    </Button>
                  </Link>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Grid>
          </Modal.Actions>
        </Modal>
        <Snackbar
          open={this.state.open}
          message="Image Uploaded successfully"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          style={{ marginTop: "50%" }}
        />
        {this.state.loaderstatus == true ? (
          <Grid>
            <Dimmer active>
              <Loader>Uploading Image</Loader>
            </Dimmer>
          </Grid>
        ) : null}
        {this.state.openmodal == true ? (
          <Grid>
            <Dimmer active>
              <Loader>Processing Image</Loader>
            </Dimmer>
          </Grid>
        ) : null}
        {this.state.fetchloader == true ? (
          <Grid>
            <Dimmer active>
              <Loader>Fetching Your Correct Size</Loader>
            </Dimmer>
          </Grid>
        ) : null}
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
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column
              width={8}
              style={{
                fontFamily: "Raleway",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "5%"
              }}
            >
              Capture Your Image
            </Grid.Column>
            <Grid.Column width={4} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={7}>
              {this.state.frontupload == true ? frontupload : frontview}
            </Grid.Column>
            <Grid.Column width={7}>
              {this.state.sideupload == true ? sideupload : sideview}
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "20%" }}>
            <Grid.Column width={6} />
            <Grid.Column width={4}>
              <Button onClick={this.handlesubmit.bind(this)}>Submit</Button>
            </Grid.Column>
            <Grid.Column width={6} />
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

export default connect(mapStateToProps, matchDispatchToProps)(ShopWithShape);
