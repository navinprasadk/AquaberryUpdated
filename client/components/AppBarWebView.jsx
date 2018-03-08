import React, {Component} from 'react';
import {Menu, Icon, Grid,  Header,  Button, Modal, Loader } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppBarWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      downloadStatusModal:false,
      modelContentChange: true,
      redirectStatus: false
    }
    this.activateDownload = this.activateDownload.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  activateDownload(){
    this.setState({downloadStatusModal:true})
    setTimeout(() =>
    {
      this.setState({
        modelContentChange: false
      })
    }, 4000);
  }

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Grid>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <Menu secondary style={{backgroundColor:'#f8f8f8', color:'#212121'}}>
                  <Menu.Item style={{color:'#212121'}}><Icon name="close" /></Menu.Item>
                  <Menu.Item header
                    style={{fontWeight:'400',
                            color:"212121",
                            float:"left",
                            textTransform:"lowercase"
                          }}> https://m.aquaberry.com  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item><Icon size="large" name="bookmark outline"  style={{color:'#212121'}} />
                                <Icon size="large" name="ellipsis vertical" style={{color:'#212121'}} />
                  </Menu.Item>
                  </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only='mobile' style={{marginTop:"-7%", paddingBottom:"5%"}}>
            <Grid.Column width={16}>
              <Menu secondary style={{backgroundColor:'#DF4B37', color:'#FFFFFF'}}>
                  <Menu.Item style={{color:'#FFFFFF'}}><Icon size="large" name="bars" onClick={this.handleToggle.bind(this)}/></Menu.Item>
                  <Menu.Item header id="titleText" style={{fontWeight:'normal', letterSpacing:'3px', textTransform:'capitalize', color:"#FFFFFF", float:"left", fontSize:'140%'}} name='Aquaberry' />
                  <Menu.Menu position='right'>
                    <Menu.Item name="Signin"><Icon size="large" name="search" style={{color:'#FFFFFF'}} /></Menu.Item>
                    <Menu.Item name="Signin"><Icon size="large" name="shopping bag" style={{color:'#FFFFFF'}} /></Menu.Item>
                  </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="mobile" style={{backgroundColor:'#eee', marginTop:"-5%", paddingBottom:"5%" }}>
                  {/* <Grid.Column width={1}></Grid.Column> */}
              <Grid.Column width={11}
                    style={{
                      fontSize:'11px',
                      textAlign:'center',
                      fontWeight:'bold',
                      fontFamily:'Raleway'}} >
                      For better browsing experience
                      download the <span style={{fontWeight:'900'}}>NEW</span> AR enabled app now!
              </Grid.Column>
              <Grid.Column width={5}><Button secondary style={{color:'#eee'}} onClick={this.activateDownload}>Get</Button></Grid.Column>
            </Grid.Row>
        </Grid>

        <Modal size="mini" dimmer="blurring" basic open={this.state.downloadStatusModal}>
            {
              this.state.modelContentChange ?
               <Loader>Your App is downloading..</Loader> :
                <div style={{ textAlign:'center'}}>
                   <Icon name="check" size="huge" /><br/>
                   <h3>Successfully downloaded and installed</h3>
                   <br/><br/>
                   <Link to="./mHome">
                   <Button color="black"
                     style={{letterSpacing:'1px'}}
                     onClick={() => {
                       this.setState({
                         downloadStatusModal: false,
                         redirectStatus: true,
                         modelContentChange: true
                       })
                     }}>
                     Open the App
                   </Button>
                   </Link>
                </div>
           }
        </Modal>

        <Drawer docked={false} width={250} open={this.state.open} onRequestChange={(open) => this.setState({open})}>

          <Menu.Item></Menu.Item>
          <Menu.Item></Menu.Item>

         <MenuItem style={{marginTop:'10%'}}>
           <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='home' style={{color:'#212121'}}/>Home</Header>
         </MenuItem>

         <MenuItem>
           <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='shopping bag' style={{color:'#212121'}}/>Bag</Header>
         </MenuItem>

         <MenuItem>
           <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='heart' style={{color:'#212121'}}/>Saved Items</Header>
         </MenuItem>

         <MenuItem>
           <Header as='h4' style={{letterSpacing:"2px", textTransform:"capitalize"}}><Icon size='small' name='home' style={{color:'#212121'}}/>My Account</Header>
         </MenuItem>

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
