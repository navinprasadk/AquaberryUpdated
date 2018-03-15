import React, {Component} from 'react';
import { Grid, Message, Segment, Table, Divider, Form , Radio} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class DeliveryOptions extends Component{
  constructor(props){
    super(props);
    this.state={
        dateValue:"",
        value:''
      }
  }

componentWillMount() {
    var d = new Date();
    d.setDate(d.getDate() + 10);
    var x=d.toString().slice(4,16);
    this.setState({
        dateValue: x
      });
}

handleChange = (e, { value }) => this.setState({ value:value})

render(){
  return(
    <div>
    <Grid>
      {/* <Grid.Row only='mobile'>
        <Grid.Column width={16}><AppBar /></Grid.Column>
      </Grid.Row> */}

     <Grid.Row only='mobile' style={{marginTop:"10%"}}>
        <Grid.Column width={16} style={{fontWeight:"bold", textTransform:"uppercase", letterSpacing:"2px"}}><center><h3>Delivery Details</h3></center></Grid.Column>
      </Grid.Row>

      <Grid.Row only='mobile' >
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={14}>
            <Message color="teal"><p><b style={{textTransform:"uppercase"}}>Best Delivery Dates</b></p>
              <p><span>Express delivery</span> 2 - 4 days</p>
              <p><span>Standard delivery</span> 5 - 10 days</p>

            </Message>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid.Row>
   <Grid.Row style={{fontSize:"85%", fontWeight:"bold"}}>
    <Grid.Column width={1}/>
      <Grid.Column width={6}>
        {/* <Form>
            <Form.Field style={{fontWeight:"bold", textTransform:"uppercase"}}> */}
                <Radio label='Express' name='radioGroup' value='Express' checked={this.state.value === 'Express'} onChange={this.handleChange}/>
            {/* </Form.Field>
        </Form> */}
      </Grid.Column>
      <Grid.Column width={1}>-</Grid.Column>
      <Grid.Column width={7}>
      Addtional Charges $5 apply
      </Grid.Column>
      <Grid.Column width={1}/>
    </Grid.Row>

    <Grid.Row style={{fontSize:"85%",marginTop:"-4%", fontWeight:"bold"}}>
    <Grid.Column width={1}/>
      <Grid.Column width={6}>
        {/* <Form>
            <Form.Field style={{fontWeight:"bold", textTransform:"uppercase"}}> */}
                <Radio label='Standard' name='radioGroup' value='Standard' checked={this.state.value === 'Standard'} onChange={this.handleChange}/>
            {/* </Form.Field>
        </Form> */}
      </Grid.Column>
      <Grid.Column width={1}>-</Grid.Column>
      <Grid.Column width={7}>
      Free Shipping
      </Grid.Column>
      <Grid.Column width={1}/>

    </Grid.Row>

   <Grid.Row style={{marginTop:"0%"}} only='mobile'>
     <Grid.Column width={1}></Grid.Column>
     <Grid.Column width={14} style={{textAlign:"center", letterSpacing:"2px",fontFamily:"Raleway"}} ><Divider horizontal style={{fontFamily:"Raleway"}}>Or </Divider></Grid.Column>
     <Grid.Column width={1}></Grid.Column>
   </Grid.Row>

      <Grid.Row only='mobile' style={{marginTop:'-2%', marginBottom:"15%"}}>
          <Grid.Column width={16} style={{color:"#df4b37", fontWeight:"bold", fontSize:"120%"}}>
          <center>
            Try out our <span style={{textTransform:"uppercase"}}>smart store</span> option!</center>
          </Grid.Column>
          <Grid.Column width={16} style={{marginTop:'2%',fontSize:'17px'}}>
            <center>
              <Link to='/smartstore'>
              Click Here
            </Link>
            </center>
          </Grid.Column>
     </Grid.Row>

    </Grid>
    </div>
  );
}
}
