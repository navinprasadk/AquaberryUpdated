import React, { Component } from 'react';
import { Grid, Button, Image, Header, Icon, Segment, Message, Accordion, Step, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class ComboCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            dateValue: '',
        }
    }

    componentWillMount() {
        var d = new Date();
        d.setDate(d.getDate() + 10);
        var x = d.toString().slice(4, 16);
        this.setState({
            dateValue: x
        });
    }

    handleClick(e, titleProps) {
        var index = titleProps;
        var activeIndex = this.state;
        var newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex }, function () {
            console.log('state', this.state.activeIndex);
        })
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <div className="bgImage_orderDetails">
                <AppBar />

                <Grid>
                    <Grid.Row only='mobile' style={{ marginTop: "15%" }}>
                        <Grid.Column width={1} />
                        <Grid.Column width={14} style={{ display: "flex", flexDirection: "row", justifyContent: "center", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <center><span style={{ fontSize: "150%" }}>Your Bag</span></center>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>

                    <Grid.Row only='mobile' style={{ backgroundColor: "#fefefe", marginBottom: "2%" }}>
                        <Grid.Column width={1} />
                        <Grid.Column width={14} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <span style={{ fontFamily: 'Raleway' }}>ITEMS(3)</span>
                            <span style={{  fontFamily: 'Raleway' }}>TOTAL <span style={{fontWeight:'bolder'}}> 85$</span></span>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_ComboCart" style={{ marginTop: "0%" }}>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "50%", height: '100%' }} src='/client/assets/Images/istock/686261786top.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <Header style={{fontFamily:'Raleway'}}> Blue women's suit dress</Header>
                                <p style={{ color: '', display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", }}><span ><Header style={{ color: 'green', }}>40$</Header></span>   <span><span style={{ fontWeight: "bold", color: '', }}>Quantity</span> 1 </span> <span><b>Size</b>  S</span></p>
                            </p>
                        </Grid.Column>
                        
                        <Divider />
                        
                        <Grid.Column width={16} style={{marginTop:'2%', display:'flex', flexDirection:'row', justifyContent:'space-around'}} >
                            <span className='lightGreyText' style={{ letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise" }}><Icon name='trash outline' />Remove</span>
                            <span style={{ color:'#4A148C', letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise" }}><Icon name='empty heart' />Move to Wishlist</span>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_ComboCart" style={{ marginTop: "0%" }}>
        
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "50%", height: '100%' }} src='/client/assets/Images/istock/686261786handbag.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <Header style={{ fontFamily: 'Raleway' }} > Black Long Handbag</Header>
                                <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%" }}><span><Header style={{ color: 'green', }}>25$</Header></span>   <span style={{ color: '' }}><span style={{ fontWeight: "bold", }}>Quantity</span> 1 </span> <span></span></p>
                            </p>
                        </Grid.Column>
                        
                        <Divider />

                        <Grid.Column width={16} style={{ marginTop: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                            <span className='lightGreyText' style={{ letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise" }}><Icon name='trash outline' />Remove</span>
                            <span style={{ color: '#4A148C', letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise" }}><Icon name='empty heart' />Move to Wishlist</span>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_ComboCart" style={{ marginTop: "0%" }}>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "50%", height: '100%' }} src='/client/assets/Images/istock/686261786slipper.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <h3 style={{fontFamily:'Raleway' }} > Black Slipper with heel</h3>
                                <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%",  }}><span><Header style={{ color: 'green' }}>20$</Header></span>   <span style={{ color: '' }}><span style={{ fontWeight: "bold", }}>Quantity</span> 1</span> <span><b>Size</b> 9 </span></p>
                            </p>
                        </Grid.Column>
                        
                        <Divider />

                        <Grid.Column width={16} style={{ marginTop: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                            <span className='lightGreyText' style={{ letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise" }}><Icon name='trash outline' />Remove</span>
                            <span style={{ color: '#4A148C', letterSpacing: "2px", fontWeight: "bold", textTransform: "Capitalise"}}><Icon name='empty heart' />Move to Wishlist</span>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile'>
                        <Grid.Column width={1} />
                        <Grid.Column width={14} >
                            <p style={{letterSpacing:'1px', textTransform:'uppercase', fontWeight:'bold'}}>Price Details</p>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>          
                    
                    <Grid.Row only='mobile' style={{marginTop:'-3%', marginBottom:'0%'}} className="card_ComboCart_Price">
                        <Grid.Column width={16} style={{display:'flex', flexDirection:'column'}}>
                            <span style={{ marginTop: '4%', display:'flex', justifyContent:'space-between'}}>
                                <span style={{letterSpacing:'1px'}}>Bag Total</span><span>85 $</span>
                            </span> 

                            <span style={{ marginTop:'4%', display: 'flex', justifyContent: 'space-between' }}>                      
                                <span style={{ letterSpacing: '1px' }}>Bag Discount</span><span><b>- 15 $</b></span>
                            </span>

                            <span style={{ marginTop: '4%', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ letterSpacing: '1px' }}>Sub Total</span><span>70 $</span>
                            </span>
                            
                            <span style={{ marginTop: '4%', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ letterSpacing: '1px' }}>Estimated Tax</span><span>0 $</span>
                            </span>

                            <span style={{ marginTop: '4%', display: 'flex', justifyContent: 'space-between' }}>  
                                <span style={{ letterSpacing: '1px' }}>Delivery</span><span><b>FREE</b></span>
                            </span>
                            
                            <span style={{ marginTop: '4%', display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '120%' }}>
                                <span style={{  letterSpacing: '1px', }}>Total Payable</span><span>85 $</span>
                            </span>    
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile' style={{marginBottom:'5%'}}>
                        <Grid.Column width={6}>
                        </Grid.Column>
                        {/* <Grid.Column width={1} /> */}
                        <Grid.Column width={10} >
                                <center>
                                    <Link to='/promoCheckout'>
                                        <Button size='large' className='card_ComboCart_PlaceOrder' style={{ letterSpacing: '2px', boxShadow: "7px 14px 24px #eee", textTransform: 'uppercase', fontSize:'98%', color:'white', fontWeight: 'bold' }}>Place Order</Button>
                                    </Link>        
                                 </center>
                        </Grid.Column>
                        {/* <Grid.Column width={1} /> */}
                    </Grid.Row>   
               
                </Grid>

            </div>
        );
    }
}
