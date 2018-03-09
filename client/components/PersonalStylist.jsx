import React, { Component } from "react";
import { Grid, Image, Header, Button, Form, Input, Label, Modal, Card, Icon } from "semantic-ui-react";
import Checkbox from "material-ui/Checkbox";

import { Link } from "react-router-dom";
import AppBar from "./AppBar.jsx";
import { VoicePlayer, VoiceRecognition } from "react-voice-components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PersonalStylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioStatus: this.props.match.params.audioStatus,
      audioStatusOutfit: false,
      audioStatusSpecificItems: false,
      audioStatusColor: false,
      audioStatusHeight:false,
      buttonstate: this.props.match.params.buttonstate,
      outfit: this.props.match.params.outfit,
      color: this.props.match.params.color,
      height:this.props.match.params.height,
      shopwithshape:false,
      uploadimage:false,
      audioStatusSize:false,
      size:this.props.match.params.size,
      specificItemsStatus:false,
      handleSpecificHeight:false
    };
  }
  handleVoice(){
    this.setState({audioStatusOutfit:true,audioStatus:'true'})
  }
  handleshape(){
    this.setState({shopwithshape:true})
  }
  uploadimage(){
    this.setState({uploadimage:true})
  }
  handlesubmit() {
    this.setState({ buttonstate: 'true', audioStatusOutfit: true });
  }
  handleoutfit() {
    this.setState({ outfit: 'true', audioStatusSpecificItems: true });
  }
  handleColor() {
    this.setState({ color: 'true', audioStatusColor: true });
  }
  handleHeight(){
    this.setState({height:'true', audioStatusHeight:true})
  }
  handlesize(){
    this.setState({size:'true',audioStatusSize:true})
  }
  handleSpecificItemsChange() {
    this.setState({ specificItemsStatus:true });
  }
  handleSpecificHeight(){
    this.setState({handleSpecificHeight:true})
  }
  handleSpecificItemsChange() {
    this.setState({ specificItemsStatus:true });
  }
  render() {
    console.log(typeof this.props.match.params.audioStatus);
    var chat = (
      <Grid.Row style={{marginTop:'10%'}}>
        <Grid.Column width={8} />
        <Grid.Column width={6}>
          <Image
            circular
            onClick={this.handleVoice.bind(this)}
            src="./client/assets/Images/istock/bot.png"
            size="small"
            style={{
              // top: "13%",
              left: "-134%"
            }}
          />
          {this.state.audioStatus == 'true' ? (
            <div>
              <Header
                style={{
                  marginTop: "-50%",
                  marginLeft: "-50%",
                  fontFamily: "Raleway"
                }}
              >
                Hi, Tell me what you are looking for!!
              </Header>
              <Grid.Row style={{ marginLeft: "-100%" }}>
                {/* <Grid.Column width={1}/> */}
                <Grid.Column width={16}>
                  <Header
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginTop: "10%"
                    }}
                  >
                    Select Wanted Items
                  </Header>
                  <Checkbox
                    label="Tops"
                    style={{ fontSize: "17px", width: "100%" }}
                    labelStyle={{ fontFamily: "Raleway" }}
                    iconStyle={{ border: "grey", requiredColor: "red" }}
                  />
                  <Checkbox
                    labelStyle={{ fontFamily: "Raleway" }}
                    label="Dresses"
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      width: "100%"
                    }}
                  />
                  <Checkbox
                    labelStyle={{ fontFamily: "Raleway" }}
                    label="Jewellery"
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      width: "100%"
                    }}
                  />
                  <Checkbox
                    labelStyle={{ fontFamily: "Raleway" }}
                    label="Shoes"
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      width: "100%"
                    }}
                  />
                  <Checkbox
                    labelStyle={{ fontFamily: "Raleway" }}
                    label="Bags"
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      width: "100%"
                    }}
                  />
                  <center>
                    <Button
                      onClick={this.handlesubmit.bind(this)}
                      style={{ backgroundColor: "#DF4B37" }}
                    >
                      OK
                    </Button>
                  </center>
                </Grid.Column>
                {/* <Grid.Column width={1}/> */}
              </Grid.Row>
            </div>
          ) : null}
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    );
    var Outfits = (
      <Grid.Row style={{ marginLeft: "19%" }}>
        {/* <Grid.Column width={1}/> */}
        <Grid.Column width={16}>
          <Header
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              fontSize: "17px"
            }}
          >
            Select Outfits For
          </Header>
          <Checkbox
            labelStyle={{ fontFamily: "Raleway" }}
            label="Work Wear"
            style={{ fontFamily: "Raleway", fontSize: "16px", width: "100%" }}
          />
          <Checkbox
            labelStyle={{ fontFamily: "Raleway" }}
            label="Evening Wear"
            style={{ fontFamily: "Raleway", fontSize: "16px", width: "100%" }}
          />
          <Checkbox
            labelStyle={{ fontFamily: "Raleway" }}
            label="Party Wear"
            style={{ fontFamily: "Raleway", fontSize: "16px", width: "100%" }}
          />
          <Checkbox
            labelStyle={{ fontFamily: "Raleway" }}
            label="Formal"
            style={{ fontFamily: "Raleway", fontSize: "16px", width: "100%" }}
          />
          <Checkbox
            labelStyle={{ fontFamily: "Raleway" }}
            label="Beach Wear"
            style={{ fontFamily: "Raleway", fontSize: "16px", width: "100%" }}
          />
          <center>
            <Button
              onClick={this.handleoutfit.bind(this)}
              style={{ backgroundColor: "#DF4B37", marginLeft: "-15%" }}
            >
              OK
            </Button>
          </center>
        </Grid.Column>
        {/* <Grid.Column width={1}/> */}
      </Grid.Row>
    );
    var Specific = (
      <Grid.Row>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Form>
            <Form.Field inline>
              <label
                style={{
                  fontFamily: "Raleway",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                Any Specific Items
              </label>
              <Input onChange={this.handleSpecificItemsChange.bind(this)} placeholder="Add Items..." />
            </Form.Field>
          </Form>
          <br />
          <center>
            {this.state.specificItemsStatus ? (
              <Button
                onClick={this.handleColor.bind(this)}
                style={{ backgroundColor: "#DF4B37", marginRight: "-7%" }}
              >
                OK
              </Button>
            ) : null}
          </center>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    );
    var colorpage = (
      <Grid.Row style={{ marginLeft: "13%" }}>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Header
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              fontSize: "17px"
            }}
          >
            Select any specific color
          </Header>
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={2}/> */}
              <Grid.Column width={8}>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}>
                    <Label circular color='red'></Label>
                    <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Red</label>
                  </div>
                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}>
                    <Label circular color='orange'></Label>
                    <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Orange</label>
                  </div>
                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}><Label circular color='black'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Black</label></div>

                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}><Label circular color='blue'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Blue</label></div>

                </div>

              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}>
                    <Label circular color='yellow'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Yellow</label></div>

                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}><Label circular color='olive'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Olive</label></div>

                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}><Label circular color='purple'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Purple</label></div>

                </div>
                <div>
                  <Checkbox/>
                  <div style={{marginLeft:'23%',marginTop:'-16%'}}><Label circular color='pink'></Label>
                  <label style={{position:'absolute',marginLeft:'10px',marginTop:'2%'}}>Pink</label></div>

                </div>

              </Grid.Column>

            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <center>
                  <Button
                    onClick={this.handleHeight.bind(this)}
                    style={{ backgroundColor: "#DF4B37",marginLeft:'-10%'}}
                  >
                    OK
                  </Button>
                </center>
              </Grid.Column>
            </Grid.Row>


          </Grid>


        </Grid.Column>

        <Grid.Column width={1} />
      </Grid.Row>
    );
    var Height = (

      <Grid.Row>
        <Grid.Column width={3}/>
        <Grid.Column width={12}>
          <Form>
            <Form.Field inline>
              <label
                style={{
                  fontFamily: "Raleway",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                Height
              </label>
              <Input onChange={this.handleSpecificHeight.bind(this)}
                placeholder="Give your height..." />
            </Form.Field>
          </Form><br/>
          <center>
            {this.state.handleSpecificHeight ? <Button
              onClick={this.handlesize.bind(this)}
              style={{ backgroundColor: "#DF4B37",marginLeft:'-10%'}}
            >
              OK
            </Button> : null}

          </center>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>

    );
    var Size = (
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={13}>
          <span style={{fontFamily:'Raleway',fontSize:'16px'}}>Select your size using </span>
          <a onClick={this.handleshape.bind(this)} style={{fontFamily:'Raleway',fontSize:'16px'}}>"Shop with shape"</a><br/><br/><br/>
          <span style={{fontFamily:'Raleway',fontSize:'16px'}}>Selected Size: </span>
          <strong style={{fontFamily:'Raleway',fontSize:'16px',fontWeight:'bold'}}>{this.props.cartDetails.size}</strong>
          <center>
            <Link to='/recommendation'>
            <Button style={{backgroundColor: "#DF4B37",marginTop:'8%'}}>Submit</Button>
            </Link>
          </center>

        </Grid.Column>

        <Grid.Column width={1}/>
      </Grid.Row>
    )
    return (
      <div>
        <Modal open={this.state.uploadimage} basic size='small'>
          <Card style={{backgroundColor:'black',color:'white',marginLeft:'15%'}}>
            <Card.Content style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'18px'}}><Icon name='camera'/>
            <center style={{marginTop:'-7%',marginLeft:'14%'}}>Allow Shop With Shape to take and access Pictures ?</center><br/>
            <div style={{marginLeft:'29%'}}>
              <Button basic color='orange'>DENY</Button>
              <Link to='/shopwithshape'>
              <Button basic color='orange'>ALLOW</Button>
              </Link>
            </div>

          </Card.Content>
          </Card>
        </Modal>
        <Modal open={this.state.shopwithshape} basic size='small'>

    <Card style={{marginLeft:'13%'}}>
      <Card.Content extra style={{fontSize:'16px',fontWeight:'bold',fontFamily:'Raleway',color:'black'}}>
        SELECT
    </Card.Content>

      <Card.Content extra style={{fontSize:'16px',fontWeight:'bold',fontFamily:'Raleway',color:'black'}} onClick={this.uploadimage.bind(this)}>

        <Icon name='camera' />
        &nbsp;&nbsp;Upload Picture

    </Card.Content>

    <Card.Content extra style={{fontSize:'16px',fontWeight:'bold',fontFamily:'Raleway',color:'black'}}>

      <Icon name='edit' />
      &nbsp;&nbsp;Enter Manually

  </Card.Content>
    </Card>

        </Modal>
        <AppBar />
        <Grid>
          {chat}
          {this.state.buttonstate == 'true' ? Outfits : null}
          {this.state.outfit == 'true' ? Specific : null}
          {this.state.color == 'true' ? colorpage : null}
          {this.state.height == 'true' ? Height : null}
          {this.state.size == 'true' ? Size : null}
        </Grid>
        {this.state.audioStatusvoice && (
          <VoicePlayer play text="Hi, Tell me what you are looking for!!" />
        )}
        {this.state.audioStatusOutfit && (
          <VoicePlayer play text="Select the outfit occasion!!" />
        )}
        {this.state.audioStatusSpecificItems && (
          <VoicePlayer
            play
            text="any specific items you want to mention here!!"
          />
        )}
        {this.state.audioStatusColor && (
          <VoicePlayer play text="let me know your color preference?" />
        )}
        {this.state.audioStatusHeight && (
          <VoicePlayer play text="let me know your Height?" />
        )}
        {this.state.audioStatusSize && (
          <VoicePlayer play text="Select your size using Shop With Shape" />
        )
        }
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    Recommended:state.Recommended,
    cartDetails:state.cartReducer
  }
}



export default connect(mapStateToProps,null)(PersonalStylist);
