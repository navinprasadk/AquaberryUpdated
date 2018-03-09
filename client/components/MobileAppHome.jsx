import React from "react";
import {
  Menu,
  Icon,
  Segment,
  Input,
  Grid,
  Image,
  Button,
  List,
  Dimmer,
  Loader,
  Message
} from "semantic-ui-react";
import AppBar from "./AppBar.jsx";
import { Link } from "react-router-dom";

export default class MobileAppHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mAppLoaderStatus: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mAppLoaderStatus: false
      });
    }, 2000);
  }
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        {this.state.mAppLoaderStatus ? (
          <Grid style={{ fontWeight: "bold" }}>
            <Dimmer active>
              <Loader>Loading...</Loader>
            </Dimmer>
          </Grid>
        ) : (
          <div style={{ overflow: "hidden" }}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <AppBar />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Image src='https://thumbs.gfycat.com/WarmheartedSmartIrishterrier-max-1mb.gif' style={{height:'50px',borderRadius:'50%',top:'20%',position:'fixed',zIndex:'100',left:'85%'}}/> */}
            <Grid style={{ marginTop: "38px" }}>
              <Grid.Row style={{ marginTop: "-1%" }}>
                {/* <Grid.Column width={1} />  */}
                <Grid.Column width={16}>
                  <center>
                    <Message
                      size="tiny"
                      style={{
                        position: "fixed",
                        zIndex: "100",
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "#000000",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: "2px"
                      }}
                    >
                      Free Delivery Worldwide
                    </Message>
                  </center>
                  {/* <Message style={{textAlign:'center',backgroundColor:'#000000',color:'white',opacity:'0.3',marginTop:'0%'}}>Free delivery worldWide</Message> */}
                </Grid.Column>
                {/* <Grid.Column width={1} />  */}
              </Grid.Row>
              <Grid.Row style={{ marginTop: "4%" }}>
                <Grid.Column width={16}>
                  <Image
                    src="./client/assets/Images/Picture2.png"
                    alt=""
                    style={{ width: "100%", height: "80%" }}
                  />
                  <center>
                    <span
                      style={{
                        position: "absolute",
                        top: "5%",
                        left: "27%",
                        color: "white",
                        fontSize: "18px",
                        letterSpacing: "2px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "Raleway"
                      }}
                    >
                      The Style Event
                    </span>
                  </center>
                  <center>
                    <span
                      style={{
                        position: "absolute",
                        top: "14%",
                        left: "32%",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        textTransform: "uppercase"
                      }}
                    >
                      Online and In store
                    </span>
                  </center>
                  <center>
                    <span
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "16%",
                        color: "white",
                        fontSize: "35px",
                        letterSpacing: "2px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "Raleway"
                      }}
                    >
                      UPTO 30% OFF
                    </span>
                  </center>
                  <center>
                    <span
                      style={{
                        position: "absolute",
                        top: "45%",
                        left: "32%",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        textTransform: "uppercase"
                      }}
                    >
                      Selected styles
                    </span>
                  </center>
                  <Button
                    inverted
                    style={{ position: "absolute", top: "59%", left: "38%" }}
                  >
                    Shop Now
                  </Button>
                </Grid.Column>
              </Grid.Row>

              {/* <Grid.Row style={{marginTop:'-6%'}}>
              <Grid.Column width={16}> */}
              {/* <center><span className="brandCategories" style={{fontSize:'20px',fontWeight:'bold'}}>On Trend</span></center> */}
              {/* </Grid.Column>
            </Grid.Row> */}

              <Grid.Row
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "-17%"
                }}
              >
                <center>
                  <Grid.Column width={16}>
                      <Image
                        size="big"
                        src="./client/assets/Images/istock/home-1.png"
                        style={{}}
                        alt=""
                      />
                      {/* <div style={{backgroundColor:"white"}}><span style={{position:"absolute", top:"85%", left:"33%", color:"black", backgroundColor:"white", letterSpacing:"3px", fontWeight:"bolder", fontSize:"120%", fontFamily:"Raleway"}}>STANDOUT TOPS</span>
                  <center><span style={{position:"absolute", top:"90%", left:"43%", color:"black", backgroundColor:"", letterSpacing:"2px", fontWeight:"bolder", fontSize:"100%", fontFamily:"Raleway"}}>SHOP NOW</span></center>
                  </div> */}
                  </Grid.Column>
                </center>
              </Grid.Row>

              <Grid.Row
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "-5%"
                }}
              >
                <center>
                  {" "}
                  <Grid.Column width={16}>
                    <Link to="/mWomenCategory/LACE" style={{ color: "black" }}>
                      <Image
                        size="big"
                        src="./client/assets/Images/istock/home-2.jpg"
                        style={{}}
                        alt=""
                      />
                    </Link>
                  </Grid.Column>
                </center>
              </Grid.Row>

              <Grid.Row
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  marginTop: "-5%",
                  overflow: "hidden"
                }}
              >
                <center>
                  {" "}
                  <Grid.Column width={16}>
                    {/* <Link to='/mWomenCategory/LACE' style={{color:"black"}}> */}
                    <center>
                      <Image
                        size="big"
                        src="./client/assets/Images/istock/517726535.jpg"
                        style={{}}
                        alt=""
                      />
                    </center>
                    {/* <span style={{position:"absolute", top:"90%", left:"33%", color:"black", backgroundColor:"white", letterSpacing:"3px", fontWeight:"bolder", fontSize:"120%", fontFamily:"Raleway"}}>DRESS UPDATE</span> */}
                    {/* <span style={{position:"absolute", top:"95%", left:"33%", color:"black", backgroundColor:"white", letterSpacing:"2px", fontWeight:"bolder", fontSize:"100%", fontFamily:"Raleway"}}>SHOP NOW</span> */}
                    <center>
                      <Link to="/mWomenCategory/LACE">
                        <span
                          style={{
                            position: "absolute",
                            top: "25%",
                            left: "15%",
                            color: "#000",
                            fontSize: "18px",
                            letterSpacing: "2px",
                            fontWeight: "800",
                            fontSize: "150%",
                            textTransform: "uppercase",
                            fontFamily: "Raleway"
                          }}
                        >
                          DRESS UPDATE
                        </span>
                      </Link>
                    </center>

                    {/* </Link> */}
                  </Grid.Column>
                </center>
                <Grid.Column width={1} />
              </Grid.Row>
              <Grid.Row
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "-5%"
                }}
              >
                <center>
                  {" "}
                  <Grid.Column width={16}>
                    {/* <Link to='/mWomenCategory/LACE' style={{color:"black"}}> */}
                    <Image
                      size="medium"
                      style={{ width: "100%" }}
                      src="./client/assets/Images/istock/home-4.png"
                      alt=""
                    />
                    {/* </Link> */}
                  </Grid.Column>
                </center>
              </Grid.Row>

              {/* <Grid.Row style={{marginLeft:'10px',marginRight:'10px'}}>
              <Grid.Column width={8}>
                <Image src="https://xo.lulus.com/images/product/xlarge/1201034_186906.jpg" alt="" />
                <center style={{marginTop:'10px'}}><span className="subCategories" style={{fontSize:'23px',fontWeight:'bold'}}>Bell Sleve</span></center>
                <center style={{marginTop:'10px'}}><span className="subCategories" style={{fontSize:'15px',fontWeight:'bold'}}>Shop All</span></center>
              </Grid.Column>
              <Grid.Column width={8}>
              <Image src="https://xo.lulus.com/images/product/xlarge/1983492_340182.jpg" alt="" />
              <center style={{marginTop:'10px'}}><span className="subCategories" style={{fontSize:'23px',fontWeight:'bold'}}>Embroidery</span></center>
              <center style={{marginTop:'10px'}}><span className="subCategories" style={{fontSize:'15px',fontWeight:'bold'}}>Shop All</span></center>
              </Grid.Column>
            </Grid.Row> */}

              <Grid.Row style={{ marginTop: "-3%" }}>
                <Grid.Column width={16}>
                  <center>
                    <span
                      className="brandCategories"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      Shop by Products
                    </span>
                  </center>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginTop: "-5%" }}>
                <Grid.Column width={16}>
                  <List selection divided verticalAlign="middle" size="mini">
                    <List.Item style={{ backgroundColor: "#D2B48C" }}>
                      <List.Content floated="right">
                        <Icon name="chevron right" size="large" />
                      </List.Content>
                      <Image
                        avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLwSiBAmnVxgqxEBaRYGOCqtddZoYHHmLXvsjH-q1hibCIC80"
                        alt=""
                      />
                      <List.Content>
                        <List.Header>Bags</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item style={{ backgroundColor: "#ed8e8e" }}>
                      <List.Content floated="right">
                        <Icon name="chevron right" size="large" />
                      </List.Content>
                      <Image
                        avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbdCWFIy2CUHd-eavIU6YDugsREZoxuHbMlp9OSd101vXfziH"
                        alt=""
                      />
                      <List.Content>
                        <List.Header>Shoes</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item style={{ backgroundColor: "#fcdd6c" }}>
                      <List.Content floated="right">
                        <Icon name="chevron right" size="large" />
                      </List.Content>
                      <Image
                        avatar
                        src="http://cdn.watchshop.com/profiler/thumb_cache/600s/99944281_v_1423897974.jpg"
                        alt=""
                      />
                      <List.Content>
                        <List.Header>Watches</List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{ marginTop: "-3%" }}>
                <Grid.Column width={16}>
                  <Segment style={{ backgroundColor: "#015289" }}>
                    <center style={{ marginTop: "0px" }}>
                      <span
                        className="subCategories"
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        Follow us on
                      </span>
                    </center>
                    <center>
                      <Icon
                        name="facebook"
                        style={{
                          color: "white",
                          marginTop: "0px",
                          marginRight: "15px"
                        }}
                        size="large"
                      />
                      <Icon
                        name="twitter"
                        style={{
                          color: "white",
                          marginTop: "0px",
                          marginRight: "15px"
                        }}
                        size="large"
                      />
                      <Icon
                        name="google"
                        style={{
                          color: "white",
                          marginTop: "0px",
                          marginRight: "15px"
                        }}
                        size="large"
                      />
                    </center>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}
