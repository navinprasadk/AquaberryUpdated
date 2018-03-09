import React, {Component} from 'react';
import { Grid, Image, Button,Card } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import CartDetails from './CartDetails.jsx';
import AppBar from './AppBar.jsx';
import AddToCartHandler from './../../redux/actions/addToCart.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var count1 = 0;
var cartArray = [];
class ArView extends Component{
  constructor(props){
    super(props);
    this.state = {
      image:'',
      count:0,
      productAdd:''
    }
  }
  clickimage1(img){
    this.setState({image:(<Image style={{width:'100%'}} src={img}/>)})
  }
addProduct(item){
  console.log('inside arview');
  //count1 = count1 + 1;

  console.log(this.state.count,'value of count');
  cartArray.push(item);
  cartArray = cartArray.filter(function(item, index, inputArray) {
          return inputArray.indexOf(item) == index;
        });
        this.setState({count:cartArray.length})
        this.setState({productAdd:cartArray})
  console.log('cary array',cartArray);
}
  uploadphoto(){
    console.log('hiiiiiii');
    this.setState({image:<Image style={{width:'100%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0SNr1mLinuqAXMz2U_9Cs7TjxggPIacU-YRH_YGw3wMKrxyg' />})
  }
render(){
  <CartDetails img={this.state.productAdd}/>
  console.log('details to cart',this.state.productAdd);
  var settings={
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  console.log(this.props.cartDetails.cartItems);
  var wishcard = (this.props.cartDetails.cartItems.map((item,key)=>{
    return(
      <div >
                <center><Card style={{width:'75%'}}>
            <Image src={item.imgurl} size='small' onClick={this.clickimage1.bind(this,item.imgurl)}/>
            <center><Card.Header style={{marginTop:'7%'}}><Button positive onClick={()=>this.props.AddToCartHandler(item)}>Add To Cart</Button></Card.Header></center>
          </Card></center></div>
    )
  }))
  return(
    <div style={{overflow:'hidden'}}>
       <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
<AppBar/>
          </Grid.Column>

        </Grid.Row>

      </Grid>



      <Grid>
        <Grid.Row style={{marginTop:'20%'}}>

          <Grid.Column width={3}/>
          <Grid.Column width={10} style={{width:'100%'}}>
            {this.state.image}
          </Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}/>
          <Grid.Column width={10} style={{marginTop:'-4%'}}>
<Button fluid positive onClick={this.uploadphoto.bind(this)}>Upload your photo</Button>
          </Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row>
</Grid>
            <Slider {...settings}>

              {wishcard}
                {/* <Card style={{width:'75%'}}>
            <center><Image src='https://d1vs5fqeka2glf.cloudfront.net/95/4c/95110cee20838f31e4a0cd12982a364c_200x200.jpg' size='small' onClick={this.clickimage4.bind(this)}/></center>
            <center><Card.Header style={{marginTop:'2%'}}><Button>Add To Cart</Button></Card.Header></center>
          </Card> */}

              </Slider>
    </div>
  );
}
}

function mapStateToProps(state){
  return {
    cartDetails:state.cartReducer
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    AddToCartHandler:AddToCartHandler
  },dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(ArView);
