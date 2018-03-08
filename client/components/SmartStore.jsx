import React from 'react';
import { Menu,Icon,Segment,Input,Grid,Image,Button,List,Card,Divider,Modal,Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default class SmartStore extends React.Component {

  constructor()
  {
    super();
    this.state={
      open:false,
      msg:''
    }
  }

  handleModal(time)
  {
    this.setState({open:true,msg:('You have chosen ')+time+(' time slot')})
  }


   render() {

      return (
         <div className="bgImage_smartStore" style={{backgroundImage:'url(./client/assets/Images/istock/464602136.jpg)',position:'relative'}}>
         <div style={{position:'absolute',marginTop:'8%',width:'100%',marginLeft:'1%'}}>
           <Link to ='/mHome'>
           <center><span style={{color:'white',fontSize:'33px'}} id="titleText" >Aquaberry</span></center>
           </Link>
         </div>
            <div style={{position:'absolute',marginTop:'20%',textAlign:'center',marginLeft:'30%'}}>
              <center style={{color:'white',fontSize:'28px',lineHeight: '100%'}} className="headerText">Come visit</center>
            </div>
            <div style={{position:'absolute',marginTop:'30%',marginLeft:'15%'}}>
              <center><span style={{color:'white',fontSize:'28px',lineHeight: '100%'}} className="headerText">THE SMART STORE</span></center>
            </div>
            <div style={{position:'absolute',marginTop:'40%',marginLeft:'30%'}}>
              <center><span style={{color:'white',fontSize:'28px',lineHeight: '100%'}} className="headerText">near you !!</span></center>
            </div>


            <Grid padded>
              <Grid.Row style={{position:'absolute',marginTop:'60%'}}>
                <Grid.Column width={3}/>
              <Grid.Column width={12} onClick={this.handleModal.bind(this, '11.00-12.00')}>
                  <span style={{color:'white',fontSize:'15px'}} >Los Angeles, CA 91303 <br/>(818) 347-6500 </span><br/>
                  <span style={{color:'white',fontSize:'15px'}}  onClick={this.handleModal.bind(this,'11.00-12.00')}>Available Slot :&nbsp;</span>
                  <span style={{color:'white',fontSize:'15px'}} onClick={this.handleModal.bind(this,'11.00-12.00')}>11.00 - 12.00</span><br/>
                  <span style={{color:'white',fontSize:'15px'}}>1 mile from your location</span>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
              <Grid.Row style={{position:'absolute',marginTop:'85%'}}>
                <Grid.Column width={3}/>
              <Grid.Column width={12} onClick={this.handleModal.bind(this, '18.00-19.00')}>
                  <span style={{color:'white',fontSize:'15px',textAlign:'left'}} >Sacramento,CA 95815 <br/>(916) 927-3162 </span><br/>
                  <span style={{color:'white',fontSize:'15px'}}  onClick={this.handleModal.bind(this,'18.00-19.00')}>Available Slot :&nbsp;</span>
                  <span style={{color:'white',fontSize:'15px'}} onClick={this.handleModal.bind(this,'18.00-19.00')}>18.00 - 19.00</span><br/>
                  <span style={{color:'white',fontSize:'15px'}}>3 miles from your location</span>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
              <Grid.Row style={{position:'absolute',marginTop:'110%'}}>
                <Grid.Column width={3}/>
              <Grid.Column width={12} onClick={this.handleModal.bind(this, '17.00-19.00')}>
                  <span style={{color:'white',fontSize:'15px'}} >Brea, CA 92821 <br/>(714) 529-9002 </span><br/>
                  <span style={{color:'white',fontSize:'15px'}}  onClick={this.handleModal.bind(this,'17.00-19.00')}>Available Slot :&nbsp;</span>
                  <span style={{color:'white',fontSize:'15px'}} onClick={this.handleModal.bind(this,'17.00-19.00')}>17.00 - 19.00</span><br/>
                  <span style={{color:'white',fontSize:'15px'}}>5 miles from your location</span>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
            </Grid>

            <Modal open={this.state.open} basic size='small'>
              <Header icon='info' content={this.state.msg}/>
              <Modal.Content>
                <Header style={{color:'white'}}><center>Thank you, we will see you soon!</center></Header>
              </Modal.Content>
              <Modal.Actions>
                <Link to='/mHome'>
                <Button color='green' inverted onClick={() => {this.setState({open:false})}}>
                   OK
                </Button>
                </Link>
              </Modal.Actions>
            </Modal>

         </div>
      );
   }
}
