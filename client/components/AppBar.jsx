import React, {Component} from 'react';
import {Menu, Icon, Grid, Image, Header, Label} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import signin from './Signin.jsx';
import ProductDetails from './ProductDetails.jsx';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import { connect } from 'react-redux';

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      wish:0,
      profile:'./client/assets/Images/istock/profile.png'
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }
  handleClose() {
    this.setState({open: false});
  }
  render() {
console.log(this.props.cartDetails);
    return (
      <div>

        <Grid >
     <Grid.Row only='mobile'>
       <Grid.Column width={16}>
         <Menu secondary style={{position:'fixed',zIndex:'100',width:'102%',backgroundColor:'#DF4B37',height:'8vh'}}>
           <Menu.Item>
             <Icon name="bars" size="large" onClick={this.handleToggle.bind(this)} style={{color:'white'}}/>
           </Menu.Item>
           <Link to='/mHome' >
           <Menu.Item style={{display:'flux',}}>
             <Image size='small' src='./client/assets/Images/istock/aquaberry1.png'/>
             {/* <span id="titleText" style={{fontWeight:'normal', letterSpacing:'3px', textTransform:'capitalize', color:"white", float:"left", fontSize:'165%'}}>Aquaberry</span> */}
           </Menu.Item>
           </Link>
           <Menu.Menu position='right'>
             <Link to='/wishList'>
                      <Menu.Item style={{marginTop:'6%'}}>
                        <Icon name='empty heart' size='large' style={{color:'white',marginTop:'2%'}}/>
                 <Label color='red' style={{marginTop:'-37%',marginLeft:'-29%'}} circular>{this.props.cartDetails.count}</Label>
                      </Menu.Item>
                      </Link>
                      {/* <Link to='/cart'> */}

                      <Menu.Item style={{marginTop:'-5%',marginLeft:'-19%'}}>
                        <Icon name='shopping cart' size='large' style={{color:'white',marginTop:'25%'}}/>

                 <Label color='red' style={{marginTop:'-10%',marginLeft:'-21%'}} circular>{this.props.cartDetails.cartCount}</Label>
                      </Menu.Item>
           {/* </Link> */}
           </Menu.Menu>
         </Menu>
       </Grid.Column>
     </Grid.Row>
     </Grid>

       <Drawer docked={false} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
         <Menu.Item style={{marginTop:"5%"}}>
           <center><Image avatar circular size='tiny' src={this.state.profile}/></center>
           <center><Header as='h3' style={{marginTop:'3%'}}>Hi Rachel</Header></center>
         </Menu.Item>
         <Menu.Item></Menu.Item>
         <Menu.Item></Menu.Item>
         <Link to='/mHome'>
        <MenuItem style={{marginTop:'10%'}}>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='home' style={{color:'#212121'}}/>Home</Header>
        </MenuItem>
</Link>
        {/* <MenuItem>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='shopping bag' style={{color:'#212121'}}/>Bag</Header>
        </MenuItem> */}
        <Link to='/wishList'>
        <MenuItem>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='heart' style={{color:'#212121'}}/>Saved Items</Header>
        </MenuItem>
        </Link>

        <Link to='/order'>
        <MenuItem>
           <Header as='h4' style={{ letterSpacing: "2px", textTransform: "capitalize" }}><Icon size='small' name='ticket' style={{ color: '#212121' }} />My Orders</Header>
        </MenuItem>
        </Link>

        <Link to='/notification'>
        <MenuItem>
          <h4 as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='large' name='alarm' style={{color:'#212121'}}/>&nbsp;Notification&nbsp;<Label circular color='red'>1</Label></h4>

        </MenuItem>
        </Link>

        <Link to='/order'>
        <MenuItem style={{marginTop:'0%'}}>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='home' style={{color:'#212121'}}/>My Account</Header>
        </MenuItem>
      </Link>
        <Link to='/promotions'>
        <MenuItem>
           <Header as='h4' style={{ letterSpacing: "2px", textTransform: "capitalize" }}><Icon size='small' name='rocket' style={{ color: '#212121' }} />Promotions for you</Header>
        </MenuItem>
        </Link>
        <Link to='/sscheckout'>
        <MenuItem>
           <Header as='h4' style={{ letterSpacing: "2px", textTransform: "capitalize" }}><Icon size='small' name='building' style={{ color: '#212121' }} />Smart Store</Header>
        </MenuItem>
        </Link>
        <Link to='/feedback'>
        <MenuItem>
           <Header as='h4' style={{ letterSpacing: "2px", textTransform: "capitalize" }}><Icon size='small' name='building' style={{ color: '#212121' }} />Feedback</Header>
        </MenuItem>
        </Link>
        <MenuItem>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='setting' style={{color:'#212121'}}/>Settings</Header>
        </MenuItem>

        <MenuItem>
          <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size="small" name='info' style={{color:'#212121'}}/>Help & FAQ's</Header>
        </MenuItem>
      </Drawer>

      </div>
      );
  }
}

function mapStateToProps(state){
  return {
    cartDetails:state.cartReducer
  }
}

export default connect(mapStateToProps,null)(AppBar);
