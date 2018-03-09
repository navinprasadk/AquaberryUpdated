import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import AppBar from './AppBar.jsx';
import {Link} from 'react-router-dom';

const WishList = () => {
  
  return(
    <div style={{overflow:'hidden'}}>
      <AppBar/>
    <Grid>
      <Grid.Row style={{marginTop:'14%'}}>
        <Grid.Column width={3}/>
        <Grid.Column width={10}>
        <center style={{fontSize:'20px',fontWeight:'bold'}}>My Wish List</center>
      </Grid.Column>
        <Grid.Column width={3}/>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={7}>
          <Link to='/productDetails/top1'>
<Image src='./client/assets/Images/istock/606210954-1.jpg'/>
<div style={{color:'black'}}>
  <center>
    <p>Polka Dot Tie-Up Top</p>
  </center>
  <center>
    <p>$15.00</p>
  </center>
</div></Link>
        </Grid.Column>


        <Grid.Column width={7}>
          <Image src='./client/assets/Images/istock/578795956-1.jpg'/>
          <div>
            <center>
              <p>Vintage lace white top</p>
            </center>
            <center>
              <p>$24.00</p>
            </center>
          </div>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
      <Grid.Row style={{marginBottom:"12%"}}>
        <Grid.Column width={1}/>
        <Grid.Column width={7}>
<Image src='./client/assets/Images/istock/476486628.jpg'/>
<div>
  <center>
    <p>Layered top with multiple color stripes</p>
  </center>
  <center>
    <p>$33.00</p>
  </center>
</div>
        </Grid.Column>
        <Grid.Column width={7}>
          <Image src='./client/assets/Images/istock/495170366-1.jpg'/>
          <div>
            <center>
              <p>Kitten heels in tan leather</p>
            </center>
            <center>
              <p>$25.00</p>
            </center>
          </div>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
      
    </Grid>
    <Grid>
      <Grid.Row>
        <Grid.Column width={16} style={{position:'fixed',bottom:'0%'}}>
          <Segment style={{backgroundColor:'#ed6a07',color:'white',width:'108%'}}>
            <center>Try out our VIRTUAL FITTING room to see how you look!</center>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );

}

export default WishList;