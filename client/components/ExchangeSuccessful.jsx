import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from "./AppBar.jsx";
import ReturnChatApp from "./ReturnChatApp.jsx";

const ExchangeSuccessful = () => {
  return (
    <div>
      <AppBar />
      <Grid>
        <Grid.Row style={{ marginTop: "15%" }}>
          <Grid.Column width={16}>
            <center
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
              Say hello to Start Taking to our chat bot
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <ReturnChatApp />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ExchangeSuccessful;