import React from 'react';
import { Menu,Icon,Segment,Input,Grid,Image,Button,List,Card,Divider } from 'semantic-ui-react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

export default class CartDetails extends React.Component {
  constructor()
  {
    super();
    this.state={
      counter:1
    }
  }

   render() {
     console.log('delivery',this.props.img);
     var settings = {
     dots: true,
     infinite: false,
     speed: 500,
     centerPadding:'5px',
     centerMode:true,
     slidesToShow: 1,
     slidesToScroll: 1
   };
      return (
         <div >
             <Menu secondary>
               <Link to='/Arview'>
               <Menu.Item>
                <Icon name="arrow left" size="large"/>
               </Menu.Item>
               </Link>
               <Menu.Item>
                <span className="heroText" style={{fontSize:'20px',fontWeight:'bold'}}>Shopping Cart</span>
               </Menu.Item>
               <Menu.Menu position='right'>
               <Menu.Item>
                {/* <Icon name="shopping bag" size="large"/> */}
               </Menu.Item>
               </Menu.Menu>
            </Menu>

            <Grid>
              <Grid.Row style={{margin:'10px'}}>
                <Grid.Column width={16}>
                <center>
                <Slider {...settings}>
                  <div>
                  <Card>
                      <Image src='https://xo.lulus.com/images/product/xlarge/2136492_394102.jpg' size="small"/>
                      <Card.Content>
                        <Card.Header><center><span className="subCategories" style={{fontSize:'20px'}}>Women's Fashion Wear</span></center></Card.Header>
                        <Card.Meta>Imported Fabric</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <Button style={{marginRight:'10px',backgroundColor:'black',color:'white'}} >
                          <center><Icon name="minus" /></center>
                        </Button>
                        <span className="subCategories" style={{fontWeight:'bold',fontSize:"25px"}}>{this.state.counter}</span>
                        <Button style={{marginLeft:'10px',backgroundColor:'black',color:'white'}}>
                          <center><Icon name="plus" /></center>
                        </Button>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                  <Card>
                      <Image src='https://xo.lulus.com/images/product/xlarge/2136492_394102.jpg' size="small"/>
                      <Card.Content>
                        <Card.Header><center><span className="subCategories" style={{fontSize:'20px'}}>Women's Fashion Wear</span></center></Card.Header>
                        <Card.Meta>Imported Fabric</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <Button style={{marginRight:'10px',backgroundColor:'black',color:'white'}} >
                          <center><Icon name="minus" /></center>
                        </Button>
                        <span className="subCategories" style={{fontWeight:'bold',fontSize:"25px"}}>{this.state.counter}</span>
                        <Button style={{marginLeft:'10px',backgroundColor:'black',color:'white'}}>
                          <center><Icon name="plus" /></center>
                        </Button>
                      </Card.Content>
                    </Card>
                  </div>
                  <div>
                  <Card>
                      <Image src='https://xo.lulus.com/images/product/xlarge/2136492_394102.jpg' size="small"/>
                      <Card.Content>
                        <Card.Header><center><span className="subCategories" style={{fontSize:'20px'}}>Women's Fashion Wear</span></center></Card.Header>
                        <Card.Meta>Imported Fabric</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <Button style={{marginRight:'10px',backgroundColor:'black',color:'white'}} >
                          <center><Icon name="minus" /></center>
                        </Button>
                        <span className="subCategories" style={{fontWeight:'bold',fontSize:"25px"}}>{this.state.counter}</span>
                        <Button style={{marginLeft:'10px',backgroundColor:'black',color:'white'}}>
                          <center><Icon name="plus" /></center>
                        </Button>
                      </Card.Content>
                    </Card>
                  </div>
                </Slider>

                  </center>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Segment>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <span className="subCategories" style={{fontSize:"20px"}}> Sub Total</span>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <span className="brandCategories" style={{fontSize:"20px",fontWeight:'bold'}}>$100</span>
                        </Grid.Column>
                        <Grid.Column width={16}>
                          <Divider />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row style={{marginTop:'-19px'}}>
                        <Grid.Column width={8}>
                          <span className="subCategories" style={{fontSize:"20px"}}>Shipping</span>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <span className="brandCategories" style={{fontSize:"20px",fontWeight:'bold'}}>$0</span>
                        </Grid.Column>
                        <Grid.Column width={16}>
                          <Divider />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row style={{marginTop:'-19px'}}>
                        <Grid.Column width={8}>
                          <span className="subCategories" style={{fontSize:"20px"}}> Total</span>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <span className="brandCategories" style={{fontSize:"20px",fontWeight:'bold'}}>$100</span>
                        </Grid.Column>
                      </Grid.Row>

                    </Grid>
                  </Segment>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Link to='/inventory'>
                  <Button fluid primary>Check Availability</Button>
                </Link>
                </Grid.Column>
                <Grid.Column width={2}>
                </Grid.Column>
              </Grid.Row>

            </Grid>

         </div>
      );
   }
}
