import React from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

const ProductRecommended = () => {
  
  var settings = {
     centerMode: true
   };
  return(
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
    <Slider {...settings}>
        <div><Card style={{width:'80%'}}>
    <center><Image src= 'http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL256201024_3col_P_1.jpg' size='small'/></center>
    <Card.Content>
      <Card.Header style={{fontFamily: 'Raleway'}}>Navy Paisley Print Shell Top
</Card.Header>
      <Card.Description>$30.00</Card.Description>
    </Card.Content>
  </Card></div>
        <div><Card style={{width:'80%'}}>
    <center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL250431024_3col_P_1.jpg' size='small'/></center>
    <Card.Content>
      <Card.Header style={{fontFamily: 'Raleway'}}>Cream Spot Ruffle Top
</Card.Header>
      <Card.Description>$33.00</Card.Description>
    </Card.Content>
  </Card></div>
        <div><Card style={{width:'80%'}}>
    <center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL257181003_3col_P_1.jpg' size='small'/></center>
    <Card.Content>
      <Card.Header style={{fontFamily: 'Raleway'}}>Grey Jacquard Layered Top
</Card.Header>
      <Card.Description>$30.00</Card.Description>
    </Card.Content>
  </Card></div>
        <div><Card style={{width:'80%'}}>
    <center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL099181121_3col_P_1.jpg' size='small'/></center>
    <Card.Content>
      <Card.Header style={{fontFamily: 'Raleway'}}>Navy Striped T-Shirt</Card.Header>
      <Card.Description>$15.00</Card.Description>
    </Card.Content>
  </Card></div>
        <div><Card style={{width:'80%'}}>
    <center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL095371003_3col_P_1.jpg' size='small'/></center>
    <Card.Content>
      <Card.Header style={{fontFamily: 'Raleway'}}>Brown Leopard Print Shift Dress</Card.Header>
      <Card.Description>$20.00</Card.Description>
    </Card.Content>
  </Card></div>
      </Slider>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row/>
      </Grid>
      </div>
  );
}

export default ProductRecommended;