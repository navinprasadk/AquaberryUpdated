import React from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from "./AppBar.jsx";

const VirtualFitting = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar />
      <Grid>
        <Grid.Row style={{ marginTop: "10%" }}>
          <Grid.Column width={16}>
            <center>
              <Image src="./client/assets/Images/istock/vricon.png" />
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginBottom:'10%'}}>
          <Grid.Column width={16}>
            <center>
              <Button
                className="submit_vr"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                  fontSize: "18px",
                  // boxShadow: "7px 16px 24px #eee",
                  backgroundColor: "#DF4B37", letterSpacing:'2px',
                  color: "white"
                }}
              >
                Try the virtual fitting room
              </Button>
            </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default VirtualFitting;
