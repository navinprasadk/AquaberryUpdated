import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Grid>
      <Grid.Row style={{ marginTop: "40%" }} only="mobile">
        <Grid.Column width={2} />
        <Grid.Column
          width={12}
          style={{
            textAlign: "center",
            fontWeight: "normal",
            letterSpacing: "2px",
            fontFamily: "Open Sans",
            color: "grey"
          }}
        >
          <h3 style={{ textTransform: "capitalize" }}>Page not found</h3>
          <p>You may have mistyped the address or the page may have moved</p>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>

      <Grid.Row only="mobile">
        <Grid.Column width={2} />
        <Grid.Column
          width={12}
          style={{
            textAlign: "center",
            fontWeight: "normal",
            textTransform: "capitalize",
            letterSpacing: "2px",
            fontFamily: "Open Sans"
          }}
        >
          <Link to="/home">Go to Home</Link>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  );
};
export default PageNotFound;
