import React, {Component} from 'react';
import {  Grid, Accordion, Icon ,List, Image, Popup, Header, Label, Modal, Button, Card, Feed, Divider, Checkbox} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Appbar from './AppBar.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class InfoPage extends Component {
  constructor() {
    super();
    this.state={
       activeIndex: 0,
       color1:'grey',
       color2:'grey',
       color3:'grey',
       color4:'grey'
      }
  }

  handleClick(e, titleProps) {
      var index  = titleProps;
      var activeIndex  = this.state;
      var newIndex = activeIndex === index ? -1 : index
      this.setState({ activeIndex: newIndex },function(){
          console.log('state',this.state.activeIndex);
           })

    }
handlecolor1(){
  this.setState({color1:'red'})
}
handlecolor2(){
  this.setState({color2:'red'})
}
handlecolor3(){
  this.setState({color3:'red'})
}
handlecolor4(){
  this.setState({color4:'red'})
}

  render() {
    const { activeIndex } = this.state;
    return (
      <div>

        
        <Grid>
          <Grid.Row/>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={2}>
              <Link to='/productDetails/top5'>
              <Icon name='arrow left' size='large' color='black'/>
              </Link>
            </Grid.Column>
            <Grid.Column width={11}>
              <h2><strong>Polka Dot Tie-Up Top</strong></h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
            <Accordion fluid styled>
                  <Accordion.Title style={{color:"#01579B", letterSpacing:'1px'}} active={activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    INFO
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>Polka Dot Tie-Up Top
                    <br/>
                    <strong>Colour:</strong> White
                    <br/>
                    <strong>Item Code:</strong>1945688</p>
                    <p>Model wears size S</p>
                    <p>Add a touch of glamour to your look with this gorgeous polka dot top. Wear with jeans and heels.</p>
                    <List bulleted>
                      <List.Item>Fitted</List.Item>
                      <List.Item>Machine Washing</List.Item>
                      <List.Item>61% Cotton, 39% Viscose</List.Item>
                    </List>
                  </Accordion.Content>

                     <Accordion.Title style={{color:"#01579B", letterSpacing:'1px'}} active={activeIndex === 4} index={4} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    MORE PRODUCT DETAILS
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>Stitched and Manufactured in Turkey </p>
                    <p><strong>Manufacturing Date :</strong> October 10, 2017</p>
                    <p>Made from 100% certified organic, fair trade cotton i.e ethically and sustainably made from seed to garment</p>
                    <p><strong>Factory Details:</strong> XYZ factory Ltd, Building 22, Near Kahraba building, Turkey</p>
                    <p>Factory Employees and trains people from refugee and new migrant communities</p>
                    <p><strong>Raw material </strong>- Cotton - Nantong No:1, Cotton Mill I/E Co. Ltd, China</p>
                  </Accordion.Content>


                  <Accordion.Title style={{color:"#01579B" , letterSpacing:'1px', textTransform:"uppercase"}} active={activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    Size Guide
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                      <Grid>
                        {/* <Grid.Row>
                        <Grid.Column width={16}>
                          <h4>Select Size</h4>
                        </Grid.Column>
                      </Grid.Row> */}
                        <Grid.Row style={{marginTop:"-2%"}}>
                          <Grid.Column width={2}/>
                          <center><Grid.Column width={1} style={{fontWeight:"bold",fontSize:'14px',fontFamily:'Raleway'}}><Label onClick={this.handlecolor1.bind(this)} color={this.state.color1}>PS</Label></Grid.Column></center>
                          <Grid.Column width={1}/>
                        <center><Grid.Column width={1} style={{fontWeight:"bold",fontSize:'14px',fontFamily:'Raleway'}}><Label onClick={this.handlecolor1.bind(this)} color={this.state.color1}>S</Label></Grid.Column></center>
                        <Grid.Column width={1}/>
                        <center><Grid.Column width={1} style={{fontWeight:"bold",fontSize:'14px',fontFamily:'Raleway'}}><Label onClick={this.handlecolor2.bind(this)} color={this.state.color2}>M</Label></Grid.Column></center>
                        <Grid.Column width={1}/>
                        <center><Grid.Column width={1} style={{fontWeight:"bold",fontSize:'14px',fontFamily:'Raleway'}}><Label onClick={this.handlecolor3.bind(this)} color={this.state.color3}>M</Label></Grid.Column></center>
                        <Grid.Column width={1}/>
                        <center><Grid.Column width={1} style={{fontWeight:"bold",fontSize:'14px',fontFamily:'Raleway'}}><Label onClick={this.handlecolor4.bind(this)} color={this.state.color4}>X L</Label></Grid.Column></center>
                        <Grid.Column width={3}/>

                        <Grid.Column width={1}></Grid.Column>

                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={3}/>
                        <Grid.Column width={10}>
                          <span style={{fontFamily:'Raleway',fontSize:'16px'}}>Selected Size: </span>
                          <strong style={{fontFamily:'Raleway',fontSize:'16px',fontWeight:'bold'}}>{this.props.cartDetails.size}</strong>
                        </Grid.Column>
                        <Grid.Column width={3}/>
                      </Grid.Row>

                      <Grid.Row style={{marginTop:'-5%'}}>
                        <Grid.Column width={16}>
                          <h4 style={{fontFamily:'Raleway',fontSize:'16px'}}>We help you close your size</h4>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row style={{marginTop:'-5%'}}>
                        <Grid.Column width={16}>
                          <h4 style={{fontFamily:'Raleway',fontSize:'16px'}}>Size Chart</h4>
                        </Grid.Column>
                      </Grid.Row>
                        <Grid.Row style={{marginTop:'-5%'}}>
                          {/* <Grid.Column width={1}/> */}
                          <Grid.Column width={4}>
                            <Header as='h5' style={{fontFamily:'Raleway'}}>Size</Header>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <Header as='h5' style={{fontFamily:'Raleway'}}>Bust (cm)</Header>
                          </Grid.Column>

                          <Grid.Column width={4}>
                            <Header as='h5' style={{fontFamily:'Raleway'}}>Waist (cm)</Header>
                          </Grid.Column>

                          <Grid.Column width={4}>
                            <Header as='h5' style={{fontFamily:'Raleway'}}>Hips (cm)</Header>
                          </Grid.Column>
                          {/* <Grid.Column width={1}/> */}
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'-5%'}}>
                          {/* <Grid.Column width={1}/> */}
                          <Grid.Column width={4}>
                            S 8/10
                          </Grid.Column>
                          <Grid.Column width={4}>
                            85-89<br/>33-35"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            67-71<br/>26-28"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            91-95<br/>35-37"
                          </Grid.Column>
                          {/* <Grid.Column width={1}/> */}
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'-5%'}}>
                          {/* <Grid.Column width={1}/> */}
                          <Grid.Column width={4}>
                            M 12/14
                          </Grid.Column>
                          <Grid.Column width={4}>
                            93-99<br/>36-39"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            75-81<br/>29-32"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            99-105<br/>39-41"
                          </Grid.Column>
                          {/* <Grid.Column width={1}/> */}
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'-4%'}}>
                          {/* <Grid.Column width={1}/> */}
                          <Grid.Column width={4}>
                            L 16/18
                          </Grid.Column>
                          <Grid.Column width={4}>
                            105-111<br/>41-43"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            87-93<br/>34-36"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            111-117<br/>43-46"
                          </Grid.Column>
                          {/* <Grid.Column width={1}/> */}
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'-5%'}}>
                          {/* <Grid.Column width={1}/> */}
                          <Grid.Column width={4}>
                            XL 20/22
                          </Grid.Column>
                          <Grid.Column width={4}>
                            117-123<br/>46-48"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            99-105<br/>39-41"
                          </Grid.Column>
                          <Grid.Column width={4}>
                            123-129<br/>49-51"
                          </Grid.Column>
                          {/* <Grid.Column width={1}/> */}
                        </Grid.Row>
                      </Grid>
                </Accordion.Content>

                  <Accordion.Title style={{color:"#01579B" , letterSpacing:'1px', textTransform:"uppercase"}} active={activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    Check In store
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 3}>
                    <Link to='/signin'> Click here <span style={{color:"black"}}> to view the availability</span></Link>
                  </Accordion.Content>

                  <Accordion.Title style={{color:"#01579B" , letterSpacing:'1px'}} active={activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    DELIVERY
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 4}>
                    On time safe delivery.
                  </Accordion.Content>



                  <Accordion.Title style={{color:"#01579B", letterSpacing:'1px'}}active={activeIndex === 3} index={3} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    REVIEWS
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 5}>
                  <List>
                    <List.Item>
                      <Icon name='user outline' />
                      <List.Content>
                        <List.Header as='a'>Rachel</List.Header>
                        <List.Description>Good material and came as expected.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon name='user outline' />
                      <List.Content>
                        <List.Header as='a'>Lindsay</List.Header>
                        <List.Description>Very beautiful and very soft material. Loved the fitting . Really recommend it for formal meetings.</List.Description>
                      </List.Content>
                      </List.Item>
                    </List>
                    <h4>Connect to <span><Icon color='blue' size='large' name='facebook' /></span>for live customer feedback. <span><a>click here</a></span>  </h4>
                    {/* <p> to connect with Aquaberry page</p> */}
                  </Accordion.Content>

                  <Accordion.Title style={{color:"#01579B", letterSpacing:'1px'}} active={activeIndex === 2} index={2} onClick={this.handleClick.bind(this)}>
                    <Icon name='dropdown' />
                    RETURN
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 6}>
                    <p><strong>Returns are easy</strong></p>
                    <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/returns/return-instructions1._CB352516716_.png' alt="" />
                    <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/returns/return-instructions2._CB352516653_.png' alt="" />
                    <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/returns/return-instructions3._CB352516616_.png' alt="" />
                    <Image src='https://images-eu.ssl-images-amazon.com/images/G/31/returns/return-instructions4._CB352516834_.png' alt="" />
                  </Accordion.Content>

                </Accordion>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
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



export default connect(mapStateToProps,null)(InfoPage);
