import React, {Component} from 'react';
import { Grid, Divider, Header, Image, Radio, Form, Segment,Modal,Button,Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class ExchangePage extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      openmodal:false
    }
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(e,value){
    //this.setState({value:value})
    this.setState({openmodal:true})
  }

render(){
  return(

    <div className="bgImage_orderDetails" style={{overflow:'hidden'}}>
      <AppBar/>
    <Grid>
      <Grid.Row only='mobile' style={{marginTop:"15%"}}>
      <Grid.Column width={1} />
          <Grid.Column width={14} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight:"bold", textTransform:"capitalise", letterSpacing:"2px"}}>
                  <span style={{fontSize:"150%",fontFamily:"Raleway"}}>Exchange/Return</span>
          </Grid.Column>
      <Grid.Column width={1} />
      </Grid.Row>

      <Grid.Row only='mobile' className="card_orderDetails" style={{marginTop: "0%" }}>
          <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
              <p className="lightGreyText" style={{fontSize:"75%",fontFamily:'Raleway'}}>ORDER NO: 01102764</p>
             <p className="lightGreyText" style={{position:'right', fontSize:"75%",fontFamily:'Raleway'}}>Placed on 21/02/18</p>
          </Grid.Column>
          <Divider />
          <Grid.Column width={16}  style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/514713868ss.jpg' />
              <p style={{ marginLeft: "3%",fontFamily:'Raleway'}}>
                  <Header className="darkText" > Polka Black Dotted Top</Header>
                  <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header style={{fontFamily:'Raleway'}}>55$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 3 Items</span> </p>
              </p>
           </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={12} style={{fontFamily:'Raleway'}}>
            Select Preferred Delivery/Return Option
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
      <Grid.Row only='mobile' style={{marginTop:"0%"}}>
          <Grid.Column width={2} />
          <Grid.Column width={12}  >
            <Link to='/exchangeSuccessful'>
              <Segment>
                  <Form>
                      <Form.Field style={{fontWeight:"bold", textTransform:"uppercase",fontFamily:'Raleway'}}>
                          <Radio label='Voice enabled chat bot' name='radioGroup' value='Voice enabled chat bot' checked={this.state.value === 'Voice enabled chat bot'} onChange={this.handleChange}/>
                      </Form.Field>
                  </Form>
              {/* You have selected <b>{this.state.value}</b> */}
            </Segment>
            </Link>
          </Grid.Column>
          <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row only='mobile' style={{marginTop:"0%"}}>
            <Grid.Column width={2} />
          <Grid.Column width={12}  >
            <Link to='/exchangeSuccessful'>
              <Segment>
                  <Form>
                      <Form.Field style={{ fontWeight: "bold", textTransform: "uppercase",fontFamily:'Raleway'}}>
                          <Radio label='Call CSC through mobile' name='radioGroup' value='Call CSC through mobile' checked={this.state.value === 'Call CSC through mobile'} onChange={this.handleChange} />
                      </Form.Field>
                  </Form>
              </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column width={2} />
      </Grid.Row>
      <Grid.Row only='mobile' style={{marginTop:"0%"}}>
        <Grid.Column width={2} />
      <Grid.Column width={12}  >
          <Segment>
              <Form>
                  <Form.Field style={{ fontWeight: "bold", textTransform: "uppercase",fontFamily:'Raleway'}}>
                      <Radio label='Sending an Email' name='radioGroup' value='Sending an Email' checked={this.state.value === 'Sending an Email'} onChange={this.handleChange} />
                  </Form.Field>
              </Form>
          </Segment>
      </Grid.Column>
      <Grid.Column width={2} />
  </Grid.Row>
    </Grid>
    </div>
  );
}
}
