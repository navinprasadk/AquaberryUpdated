import React, {Component} from 'react';
import { Grid , Divider, Image, Modal, Button,Icon, Form, Input, Segment} from 'semantic-ui-react';
import Checkbox from 'material-ui/Checkbox';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';
import {Link} from 'react-router-dom';
import AppBar from './AppBar.jsx';
export default class PageNotFound extends Component{
  constructor(props){
    super(props);
    this.state={
      audioStatus:false
    }
  }
render(){
  return(
    <div style={{overflow:"hidden"}}>
      <AppBar/>
      <Grid style={{marginTop:'13%'}}>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <center style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'22px',padding:3}}>From Freddie</center>
            <center style={{fontFamily:'Raleway',fontSize:'18px'}}>Tell Freddie what are you looking for!!</center>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Divider style={{marginTop:'-0.8%'}}/>
        {/* <Grid.Row style={{marginTop:'-5%'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>

          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row> */}

        <Grid.Row style={{backgroundColor:'#eee',marginTop:'-2.8%'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={6}>
            <center style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'17px'}}>Wanted Items</center>
          </Grid.Column>
          <Grid.Column width={1}>
            <Segment style={{padding:0.1,backgroundColor:'grey',height:20}}>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <center style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'17px'}}>Outfits For</center>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Divider style={{marginTop:'0.5%'}}/>
        <Grid.Row style={{marginTop:"-3%"}}>
          <Grid.Column width={1}/>
          <Grid.Column width={6}>
            <Checkbox label="Tops" style={{fontSize:'17px',width:'100%'}} labelStyle={{fontFamily:'Raleway'}} iconStyle={{border:'grey',requiredColor:'red'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Trousers" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Jewellery" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Shoes" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Bags" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>

          </Grid.Column>
          <Grid.Column width={1}>
            <Segment style={{padding:0.1,backgroundColor:'grey',height:130}}>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Work Wear" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Evening Wear" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Party Wear" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Formal" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
            <Checkbox labelStyle={{fontFamily:'Raleway'}} label="Beach Wear" style={{fontFamily:'Raleway',fontSize:'16px',width:'100%'}}/>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>

        <Grid.Row style={{marginTop:"-2%"}}>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Form>
              <Form.Field inline>
                <label style={{fontFamily:'Raleway',fontSize:'15px',fontWeight:'bold'}}>Any Specific Items</label>
                <Input placeholder='Add Items...' />
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        {/* <Grid.Row style={{marginTop:'-3%'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <h4 style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'17px'}}>Outfits For</h4>
            <Checkbox radio style={{fontFamily:'Raleway',fontSize:'17px',fontWeight:'bold',backgroundColor:'#e6e7ed',width:'100%'}} label='Work Wear' /><br/>
            <Checkbox radio style={{fontFamily:'Raleway',fontSize:'17px',fontWeight:'bold',backgroundColor:'#e6e7ed',width:'100%'}} label='Evening Wear' /><br/>
            <Checkbox radio style={{fontFamily:'Raleway',fontSize:'17px',fontWeight:'bold',backgroundColor:'#e6e7ed',width:'100%'}} label='Party Wear' /><br/>
            <Checkbox radio style={{fontFamily:'Raleway',fontSize:'17px',fontWeight:'bold',backgroundColor:'#e6e7ed',width:'100%'}} label='Formal' /><br/>
            <Checkbox radio style={{fontFamily:'Raleway',fontSize:'17px',fontWeight:'bold',backgroundColor:'#e6e7ed',width:'100%'}} label='Beach Wear' />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row> */}
        <Grid.Row style={{marginTop:'-4%'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <h4 style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'17px'}}>Color</h4>
            <Image src='./client/assets/Images/flaticon/color.png' style={{marginTop:'-5%'}} size='medium'/>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        {/* <Grid.Row style={{marginTop:'-114%'}}>
          <Grid.Column width={8}/>
          <Grid.Column width={6}>
            <Image circular onClick={() => {
              this.setState({
                audioStatus: true
              })
            }} src='https://www.voicebot.net/ImagesCommon/Icons/256x256/VoiceBot.png' size='tiny' style={{position:'fixed',zIndex:'100',top:'80%',left:'75%'}} />
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row> */}
      </Grid>

        <Link to="/recommendation">

            <Segment style={{backgroundColor:'#ed6a07',fontSize:'18px',color:'white',width:'100%',position:'fixed',bottom:0}}>
              <center>Click Here for Recommendation</center>
            </Segment>

      </Link>

      {/* {(
        this.state.audioStatus &&
        <VoicePlayer
          play
          text="Hi Rachel, here is our recommended product list for you"
          onEnd = {() => {
            this.setState({
              audioStatus: false,
              confirmationModal: true
            })
          }}
        />
      )} */}

      {/* <Modal size="mini" dimmer="blurring" basic open={this.state.confirmationModal}>
              <div style={{ textAlign:'center'}}>
                <Modal.Content>
                 <h3>Want to browse the product list?</h3>
                </Modal.Content>
                 <Modal.Actions>
                  <Button size="mini" basic color='red' inverted onClick={() => {
                    this.setState({
                      confirmationModal: false
                    })
                  }}>
                    <Icon name='remove' /> No
                  </Button>
                  <Link to="/recommendation">
                    <Button size="mini" color='green' inverted>
                      <Icon name='checkmark' /> Yes
                    </Button>
                  </Link>
                </Modal.Actions>
              </div>

      </Modal> */}
    </div>
  );
}
}
