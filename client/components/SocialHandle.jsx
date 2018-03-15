import React, {Component} from 'react';
import { Grid ,Feed, Image, Icon, Menu, Card, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class SocialHandle extends Component{
  constructor(props){
    super(props);
    this.state={
      activeItem:'Tweets'
    }
  }
render(){
  const { activeItem } = this.state
  return(
    <div style={{overflow:'hidden'}}>
    <Grid>
      <Grid.Row />
      <Grid.Row style={{width:'100%'}}>
        <Menu pointing secondary>
          <Menu.Item name='Tweets' active={activeItem === 'Tweets'} color='blue'/>
          <Menu.Item name='Tweets & replies' active={activeItem === 'Tweets & replies'} />
          <Menu.Item name='Media' active={activeItem === 'Media'} />
          {/* <Menu.Menu position='right'> */}
            <Menu.Item name='Likes' active={activeItem === 'Likes'} />
          {/* </Menu.Menu> */}
        </Menu>
      </Grid.Row>
      <Grid.Row only='mobile'>
        <Grid.Column width={16}>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Image circular src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JMj69CfrZqPz2WtCIzcJSVfQuC79kLOCtIPopmy-l80Oepoe'/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary style={{fontFamily:'Raleway'}}>
                  <span style={{fontWeight:'bold'}}>Rachel</span> @rachelanne
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text style={{fontFamily:'Raleway'}}>
                  I'm having a BBQ this weekend. Come by around 4pm if you can.
                </Feed.Extra>
                <Feed.Meta  style={{display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                      {/* <Grid.Column width={1}/> */}
                        <Icon name="comment outline" size='large'/>
                        <Icon name='retweet' size='large'/>
                        <Icon name='empty heart' size='large'/>
                        {/* <Icon name='bar chart' size='large'/> */}
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
  </Feed>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='mobile'>
        <Grid.Column width={16}>
          <Card style={{width:'100%'}} >
      <Card.Content>
        <Image floated='left' size='mini' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JMj69CfrZqPz2WtCIzcJSVfQuC79kLOCtIPopmy-l80Oepoe' />
        <Card.Header>
          Rachel
        </Card.Header>
        <Card.Meta>
          08th March 2018
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={6}>
              <h3 style={{color:'#C6C8CB'}}><Icon name='like outline' size='medium' style={{color:'#C6C8CB'}}/>Like</h3>
            </Grid.Column>
          <Grid.Column width={6}>
            <h3 style={{color:'#C6C8CB'}}><Icon name='comment outline' size='medium' style={{color:'#C6C8CB'}}/>Comment</h3>
          </Grid.Column>
          <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card style={{width:'100%'}}>
    <Image src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beauty-fashion-event-facebook-cover-flyer-template-9879d71eccd7341520232d527f01198e_screen.jpg?ts=1462544337' />
    <Card.Content>
      <Card.Header>
        Friday, March 23rd at 11 AM<br/>
        Beauty Event
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          8,417 people Interested
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={8}>
            <h3 style={{color:'blue'}}><Icon name='checked calendar' size='medium' style={{color:'blue'}}/>Interested</h3>
          </Grid.Column>
        <Grid.Column width={5}>
          <h3 style={{color:'#C6C8CB'}}><Icon name='share' size='medium' style={{color:'#C6C8CB'}}/>Share</h3>
        </Grid.Column>
        <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );
}
}
