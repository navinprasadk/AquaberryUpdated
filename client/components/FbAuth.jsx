import React, {Component} from 'react';
import { Dimmer, Loader, Grid, Menu, Icon, Button } from 'semantic-ui-react';
import Snackbar from 'material-ui/Snackbar';
import { Link, Redirect } from 'react-router-dom';

export default class FbAuth extends Component{
  constructor(props){
    super(props);
    this.state = {
      snackbarOpen: false,
      redirect: false,
      loaderStatus:true
    };
  }
  handleClick = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      snackbarOpen: false,
      redirect: true
    });
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loaderStatus:false,
      });
    },500)
  }
render(){
  if(this.state.redirect) {
    return <Redirect to='/signin' />
  }
  return(

    <div className="fbAuth_Background" style={{backgroundColor:"#E9EBEE"}}>
      
    {
      this.state.loaderStatus ?
      <Grid style={{fontWeight: 'bold', fontSize: '15px'}}>
       <Dimmer active>
         <Loader>Loading.. </Loader>
        </Dimmer>
      </Grid>
        :
        (
            <Grid className="fbFont">
              <Grid.Row only='mobile' style={{ paddingBottom: "0%" }}>
                <Grid.Column width={16}>
                  <Menu secondary style={{ backgroundColor: '#3b5998', color: '#eee' }}>
                    <Menu.Item style={{ color: 'white' }}><Icon size="large" name="facebook" /></Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal', letterSpacing: '1px', textTransform: 'capitalize', color: "white", fontSize: '140%' }} name='post to facebook' />
                  </Menu>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row only='mobile' style={{ marginTop: "0%" , marginTop:"20%"}}>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12}><center><Icon size="huge" name="edit" /></center></Grid.Column>
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>

              <Grid.Row only='mobile' style={{ marginTop: "0%", marginTop: "0%" }}>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12} style={{ letterSpacing: "1px", fontSize: "110%" }} ><center><p><span style={{ fontWeight: "bold" }}>Aquaberry</span> would like to post publicly on Facebook for you. Who can see Aquaberry's post on your Timeline?</p></center></Grid.Column>
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>

              <Grid.Row only='mobile' style={{ marginTop: "0%", marginTop: "0%" }}>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12}>
                  <center>
                    <Button size="huge" as='div' labelPosition='right'>
                      <Button basic><Icon name='globe' />Public </Button>
                    </Button>
                  </center>
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>

              <Grid.Row only='mobile' style={{ bottom:0,position:'absolute'}}>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={7}>
                  <center>
                    <Button fluid basic onClick={this.handleClick} style={{ letterSpacing: "1px" }}>Not Now</Button>
                  </center>
                </Grid.Column>
                <Grid.Column width={7}> <center> <Link to='/inventory'><Button fluid style={{ backgroundColor: "#4D89FF", color: "white", letterSpacing: "1px" }}>OK</Button></Link> </center></Grid.Column>
                <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              <Snackbar
                open={this.state.snackbarOpen}
                message="Permission denied"
                autoHideDuration={800}
                onRequestClose={this.handleRequestClose}
              />
            </Grid>
      )
    }
    
  </div>
  );
}
}
