import React, {Component} from 'react';
import { Grid, Segment, Image ,Input,Dropdown,Header,Icon,Button,Divider,Menu,Label} from 'semantic-ui-react';
import Drawer from 'material-ui/Drawer';
import AppBar from './AppBar.jsx';
import {Link} from 'react-router-dom';
import '../styles/style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddtoCart from './../../redux/actions/addItem.js'

const data=[{
  imageurl:'top5.jpg',
  name:'black tops',
  cost:40
},{
  imageurl:'top1.jpg',
  name:'black tops',
  cost:40
},{
  imageurl:'top2.jpg',
  name:'black tops',
  cost:40
},{
  imageurl:'top3.jpg',
  name:'black tops',
  cost:40
},{
  imageurl:'top4.jpg',
  name:'black tops',
  cost:40
},{
  imageurl:'top5.jpg',
  name:'black tops',
  cost:40
}]


class WomenCategory extends Component{
  constructor(props){
    super(props);
    this.state={
      text:"what's New",
      open: false,
      open1:false,
      secondaryText1:'All',
      secondaryText2:'All',
      secondaryText3:['All'],
      secondaryText4:'All',
      secondaryText5:'All',
      secondaryText6:'All',
      brandValue:[]
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }
  handleClose() {
    this.setState({open: false});
  }
  handleBrand() {
    this.setState({
      open1: !this.state.open1
    });
  }
  handleChange(e,value){
    this.setState({secondaryText3:value.value})
  }
render(){
  console.log("data",this.props)
  console.log(this.props.cartDetails);
  const brandOptions = [
  { key: 'adidas', text: 'Adidas', value: 'adidas' },
  { key: 'nike', text: 'Nike', value: 'nike' }
]
var productData = (this.props.cartDetails.recommend.map((item,key) => {
  var iconComponent = (item.checked ? <Icon name='heart' style={{position: 'absolute',top: '8px',right: '16px'}} size='large' color="red" onClick={()=> this.props.AddtoCart(item)}/> : <Icon name='empty heart' style={{position: 'absolute',top: '8px',right: '16px', color:"red"}} size='large' onClick={()=> this.props.AddtoCart(item)}/>)

  return(
      <Grid.Column key={key} width={7}>

        <Image as={Link} to='/productDetails/top5' src={item.imgurl} alt="" />

        {/* <Link to="/signin"> */}
          {iconComponent}
      {/* </Link> */}
        <div style={{fontFamily: 'Raleway'}} >
          <p className="WomenCategoryWebViewTitle" style={{fontWeight:"600", fontSize:"80%"}}>{item.name}</p>
          <p className="WomenCategoryWebViewPrice" style={{marginTop:"-5%", fontSize:"80%", marginBottom:"5%"}}>{item.price}</p>
        </div>
      </Grid.Column>
  )
  // console.log('item',item.imgurl);
}))
  return(
    <div style={{overflow:'hidden'}}>
      <Grid>
      <Grid.Row only='mobile'>
      <Grid.Column width={16}>
       <Menu secondary style={{position:'fixed',zIndex:'100',width:'102%',backgroundColor:'#DF4B37',height:'8vh'}}>
         <Link to='/mHome'>
         <Menu.Item>
           <Icon name="chevron left" size="large"  style={{color:'white'}}/>
         </Menu.Item>
         </Link>
         <Menu.Item>
           <span id='titleText' style={{fontWeight:'normal', letterSpacing:'3px', textTransform:'capitalize', color:"#eee", float:"left", fontSize:'140%'}}>Women's Tops</span>
         </Menu.Item>
         <Menu.Menu position='right'>
           <Link to='/wishList'>
                    <Menu.Item style={{marginTop:'3%',marginLeft:'-9%'}}>
                      <Icon name='empty heart' size='large' style={{color:'white',marginTop:'2%'}}/>
               <Label color='red' style={{marginTop:'-37%',marginLeft:'-29%'}} circular>{this.props.cartDetails.count}</Label>
                    </Menu.Item>
</Link>
                    {/* <Link to='/cart'> */}

                    <Menu.Item style={{marginTop:'-3%',marginLeft:'-21%'}}>
                      <Icon name='shopping cart' size='large' style={{color:'white',marginTop:'25%'}}/>
               <Label color='red' style={{marginTop:'-10%',marginLeft:'-21%'}} circular>0</Label>
                    </Menu.Item>
         {/* </Link> */}
         </Menu.Menu>
       </Menu>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <Divider/>
    <Grid style={{fontWeight:'bold',fontSize:'15px'}}>
      <Grid.Row/><Grid.Row/><Grid.Row/>
      <Grid.Row style={{backgroundColor:'#ccced1',color:'black',position:'fixed',zIndex:'100',marginTop:'9%',width:'110%',marginLeft:'3.5%',height:'6vh'}}>
        <Grid.Column width={1} />
        <Grid.Column width={7}>
          <Dropdown style={{fontFamily: 'Raleway'}} text='SORT'>
           <Dropdown.Menu>
             <Dropdown.Item text={this.state.text} />
             <Dropdown.Item text='Price - Low to High' />
             <Dropdown.Item text='Price - High to Low' />
           </Dropdown.Menu>
         </Dropdown>
        </Grid.Column>
          {/* <a><Image src='./client/assets/Images/flaticon/augmented-realityr.svg' size="mini" style={{ height: '50px', top: '13%', position: 'fixed', zIndex: '100', left: '85%' }} /></a> */}

          {/* <a><Image src='./client/assets/Images/istock/icon.png' size="tiny" style={{ top: '12%', position: 'fixed', zIndex: '100', left: '76%' }} /></a> */}

{/* <a><Image src='./client/assets/Images/flaticon/augmented-realityr.svg' size="mini" style={{ height: '50px', top: '12%', position: 'fixed', zIndex: '100', left: '86%' }} /></a> */}

        <Grid.Column width={7}>
          <h4 style={{textAlign:'right', fontFamily: 'Raleway'}} onClick={this.handleToggle.bind(this)}>REFINE</h4>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
      <Divider style={{marginTop:'-2.5%'}}/>
      <Grid.Row style={{marginTop:'0%',color:'gray'}}>
        <Grid.Column width={1}/>
        <Grid.Column width={14}>
          <p style={{textAlign:'center',fontFamily: 'Raleway'}}>250 items found</p>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
    <Grid centered columns={2}>
      <Grid.Row style={{marginTop:'-4%', marginBottom:'15%'}} >

        {productData}

      </Grid.Row>


    </Grid>
    <Grid>
      <Link to='/personalstylist/false/false/false/false/false/false'>
      <Grid.Row style={{width:'100%'}}>
        {/* <Grid.Column width={1}/> */}
        <Grid.Column width={16} style={{position:'fixed',zIndex:'100',bottom:0,width:'100%'}}>
          <Segment style={{backgroundColor:'#ed6a07',color:'white'}}>
            <center>Meet your VIRTUAL Stylist EMMY here!!</center>
          </Segment>
        </Grid.Column>
        {/* <Grid.Column width={1}/> */}
      </Grid.Row>
      </Link>
    </Grid>
    <Drawer docked={false} width={350} openSecondary={true} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
      <Grid>
        <Grid.Row style={{fontFamily: 'Raleway'}}>
          <Grid.Column width={1} />
          <Grid.Column width={13}>
            <h3 style={{marginTop:'12%',fontWeight:'bold'}}>FILTER</h3>
            <Menu vertical size='large'>
              <Menu.Item name='Product Type' >
                <Label as='a' basic color='blue'>{this.state.secondaryText1}</Label>
                  Product Type
                </Menu.Item>
                <Menu.Item name='Style'>
                  <Label as='a' basic color='blue'>{this.state.secondaryText2}</Label>
                    Style
                  </Menu.Item>
                 <Menu.Item name='Brand' onClick={this.handleBrand.bind(this)}>
                   {this.state.secondaryText3.map((item,key)=>{
                     return(<Label as='a' basic color='blue' key={key}>{item}</Label>)
                   })
                 }
                     Brand
                   </Menu.Item>
                 <Menu.Item name='Range'>
                   <Label as='a' basic color='blue'>{this.state.secondaryText4}</Label>
                     Range
                   </Menu.Item>
                 <Menu.Item name='Color'>
                   <Label as='a' basic color='blue'>{this.state.secondaryText5}</Label>
                     Color
                   </Menu.Item>
                 <Menu.Item name='Size'>
                   <Label as='a' basic color='blue'>{this.state.secondaryText6}</Label>
                     Size
                   </Menu.Item>
           </Menu>
             <br/>
             <Button fluid secondary onClick={this.handleClose.bind(this)}> Done </Button>
     </Grid.Column>
     <Grid.Column width={2} />
     </Grid.Row>
     </Grid>
    </Drawer>
    <Drawer docked={false} width={350} openSecondary={true} open={this.state.open1} onRequestChange={(open1) => this.setState({open1})}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={11}>
            <h3 style={{marginTop:'12%',fontWeight:'bold'}}>Brand</h3>
            <Dropdown placeholder='Select Brands' fluid multiple selection options={brandOptions} onChange={this.handleChange.bind(this)} />
         </Grid.Column>
         <Grid.Column width={2} />
         </Grid.Row>
         </Grid>
        </Drawer>

  </div>
  );
}
}

function mapStateToProps(state){
  return {
    Recommended:state.Recommended,
    cartDetails:state.cartReducer
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    AddtoCart:AddtoCart
  },dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(WomenCategory);
