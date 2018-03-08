import React, {Component} from 'react';
import { Grid, Radio, Rating,Form,TextArea,Button,Modal, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppBar from './AppBar.jsx';
export default class Feedback extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      submit:false
    }
  }
  handleChange = (e, { value }) => this.setState({ value })
  handleChange1 = (e, { value1 }) => this.setState({ value1 })
  handleChange2 = (e, { value2 }) => this.setState({ value2 })
  handleChange3 = (e, { value3 }) => this.setState({ value3 })
  handleChange4 = (e, { value4 }) => this.setState({ value4 })
  handleChange5 = (e, { value5 }) => this.setState({ value5 })
  handleChange6 = (e, { value6 }) => this.setState({ value6 })
  hadlesubmit(){
    this.setState({submit:true})
  }
render(){
  return(
    <div>
      <AppBar/>
      <Grid>
        <Grid.Row style={{marginTop:'13%',fontSize:'20px',fontFamily:'Raleway',fontWeight:'bold'}}>
          <Grid.Column width={5}/>
            <Grid.Column width={6}>
              Feedback
          </Grid.Column>
          <Grid.Column width={5}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              1) How was your last shopping Experience?<br/>
              <Radio style={{fontFamily:'Raleway'}} label='☹️' value='☹️'
            checked={this.state.value === '☹️'}
            onChange={this.handleChange}/>
              <Radio style={{fontFamily:'Raleway'}} label='😏 ' value='😏 '
            checked={this.state.value === '😏 '}
            onChange={this.handleChange}/>
              <Radio style={{fontFamily:'Raleway'}} label='😐' value='😐'
            checked={this.state.value === '😐'}
            onChange={this.handleChange}/>
              <Radio style={{fontFamily:'Raleway'}} label='🙂' value='🙂'
            checked={this.state.value === '🙂'}
            onChange={this.handleChange} />
              <Radio style={{fontFamily:'Raleway'}} label='😄' value='😄'
            checked={this.state.value === '😄'}
            onChange={this.handleChange}/>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              2) How Satisfied where you with the product?<br/>
              <Radio style={{fontFamily:'Raleway'}} label='Very Satisfied' value1='Very Satisfied'
            checked={this.state.value1 === 'Very Satisfied'}
            onChange={this.handleChange1}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='Satisfied' value1='Satisfied'
            checked={this.state.value1 === 'Satisfied'}
            onChange={this.handleChange1}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='Neutral' value1='Neutral'
            checked={this.state.value1 === 'Neutral'}
            onChange={this.handleChange1}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='Unsatisfied' value1='Unsatisfied'
            checked={this.state.value1 === 'Unsatisfied'}
            onChange={this.handleChange1} />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              3) Rate your delivery experience?<br/><br/>
              <Rating maxRating={5} icon='star' size='massive' clearable/>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              4) Did you like the fitting of the floral dress?<br/>
              <Radio style={{fontFamily:'Raleway'}} label='Yes' value2='Yes'
            checked={this.state.value2 === 'Yes'}
            onChange={this.handleChange2}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='No' value2='No'
            checked={this.state.value2 === 'No'}
            onChange={this.handleChange2}/>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              5) How Likely you will recommend our brand to your friends?<br/>
              <Radio style={{fontFamily:'Raleway'}} label='Very Likely' value3='Very Likely'
            checked={this.state.value3 === 'Very Likely'}
            onChange={this.handleChange3}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='May Be' value3='May Be'
            checked={this.state.value3 === 'May Be'}
            onChange={this.handleChange3}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='Not very likely' value3='Not very likely'
            checked={this.state.value3 === 'Not very likely'}
            onChange={this.handleChange3}/><br/>
              <Radio style={{fontFamily:'Raleway'}} label='Never' value3='Never'
            checked={this.state.value3 === 'Never'}
            onChange={this.handleChange3} />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              6) Help improve our service with your  suggestion<br/>
              <Form>
    <TextArea placeholder='Tell us more' />
  </Form>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
          <Grid.Column width={1}/>
            <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
              7) Help us plan your next shopping cart!<br/>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={1}/>
                  <Grid.Column width={7}>
                    <Header style={{fontSize:'16px'}}>Items Looking For</Header>
                    <Radio style={{fontFamily:'Raleway'}} label='Tops' value4='Tops'
                  checked={this.state.value4 === 'Tops'}
                  onChange={this.handleChange4}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Dresses' value4='Dresses'
                  checked={this.state.value4 === 'Dresses'}
                  onChange={this.handleChange4}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Trousers' value4='Trousers'
                  checked={this.state.value4 === 'Trousers'}
                  onChange={this.handleChange4}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Foot wear' value4='Foot wear'
                  checked={this.state.value4 === 'Foot wear'}
                  onChange={this.handleChange4} /><br/>
                  <Radio style={{fontFamily:'Raleway'}} label='Accessories' value4='Accessories'
                checked={this.state.value4 === 'Accessories'}
                onChange={this.handleChange4} />
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header style={{fontSize:'16px'}}>OutFit For</Header>
                    <Radio style={{fontFamily:'Raleway'}} label='Formal Wear' value5='Formal Wear'
                  checked={this.state.value5 === 'Formal Wear'}
                  onChange={this.handleChange5}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Party Wear' value5='Party Wear'
                  checked={this.state.value5 === 'Party Wear'}
                  onChange={this.handleChange5}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Evening Wear' value5='Evening Wear'
                  checked={this.state.value5 === 'Evening Wear'}
                  onChange={this.handleChange5}/><br/>
                    <Radio style={{fontFamily:'Raleway'}} label='Casual' value5='Casual'
                  checked={this.state.value5 === 'Casual'}
                  onChange={this.handleChange5} /><br/>
                  <Radio style={{fontFamily:'Raleway'}} label='Beach Wear' value5='Beach Wear'
                checked={this.state.value5 === 'Beach Wear'}
                onChange={this.handleChange5} />
                  </Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row>
                <Grid.Row style={{fontSize:'16px',fontFamily:'Raleway'}}>
                  <Grid.Column width={1}/>
                    <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
                      7) As a part of our loyalty reward program , we would like to invite you to the launch of our new fast fashion range on 15 April 2018.<br/><br/>
                      Pls confirm your presence by clicking <br/><br/>
                      <Radio style={{fontFamily:'Raleway'}} label='Attending' value6='Attending'
                    checked={this.state.value6 === 'Attending'}
                    onChange={this.handleChange6}/><br/>
                      <Radio style={{fontFamily:'Raleway'}} label='May Be' value6='May Be'
                    checked={this.state.value6 === 'May Be'}
                    onChange={this.handleChange6}/><br/>
                  </Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row>
              </Grid>
              <Grid.Row style={{marginTop:'10%'}}>
                <Grid.Column width={2}/>
                  <Grid.Column width={12} style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'18px'}}>
                    Thank you for your valuable time.
                </Grid.Column>
                <Grid.Column width={2}/>
              </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}/>
          <Grid.Column width={4}>
            <Button positive onClick={this.hadlesubmit.bind(this)} style={{backgroundColor:"#DF4B37"}}>
              Submit
            </Button>
          </Grid.Column>
          <Grid.Column width={6}/>
        </Grid.Row>
      </Grid>
      <Modal open={this.state.submit} basic size='small'>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={14} style={{fontFamily:'Raleway'}}>
                <Header style={{color:'white',fontFamily:'Raleway'}}><center>Thanks for your valuable feedback.</center></Header>
              </Grid.Column>
              <Grid.Column width={1}/>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}/>
              <Grid.Column width={3}>
                <Link to='/mHome'>
                <Button color='green' inverted onClick={() => {this.setState({submit:false})}}>
                   OK
                </Button>
                </Link>
                </Grid.Column>
              <Grid.Column width={3}/>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </div>

  );
}
}
