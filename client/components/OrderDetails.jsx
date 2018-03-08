import React, { Component } from 'react';
import { Grid, Button, Image, Header, Icon, Segment, Message, Accordion, Step, Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            dateValue:'',
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
                    <Grid.Row only='mobile' style={{marginTop:"15%"}}>
                    <Grid.Column width={1} />
                        <Grid.Column width={14} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight:"bold", textTransform:"capitalise", letterSpacing:"2px"}}>
                                <span style={{fontSize:"150%",fontFamily:'Raleway'}}>Your Orders</span>
                                <span> <Icon name='search' />Search </span>
                        </Grid.Column>
                    <Grid.Column width={1} />
                    </Grid.Row>

                    <Grid.Row only='mobile' style={{ backgroundColor: "#fefefe", marginBottom:"2%"}}>
                        <Grid.Column width={1} />
                        <Grid.Column width={14} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <span style={{ fontSize:'90%', fontFamily:'Raleway'}}>Last 6 months</span>
                            <span style={{ fontSize: '90%', color:"#1A0DBE",fontFamily:'Raleway'}}>Filter<Icon name='angle double right' /></span>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_orderDetails" style={{marginTop: "0%" }}>
                        <Grid.Column width={16}>
                            <h5 style={{ color: "orange", textTransform: 'uppercase' , letterSpacing:"1px",fontFamily:'Raleway'}}>In-Transit</h5>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <p className="lightGreyText" style={{fontSize:"75%",fontFamily:'Raleway'}}>ORDER NO: 01120448</p>
                           <p className="lightGreyText" style={{position:'right', fontSize:"75%",fontFamily:'Raleway'}}>Placed on 23/02/18</p>
                        </Grid.Column>
                        <Divider />
                        <Grid.Column width={16}  style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/622809430ss.jpg' />
                            <p style={{ marginLeft: "3%"}}>
                                <Header className="darkText" > Polka Dot Tie-Up Top</Header>
                                <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header className="darkText">15$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 1 Item</span> </p>
                                
                                <p className="greyText">  <Link to='/modifyDelivery'>Need Help?   </Link>  </p>
                            </p>
                         </Grid.Column>
                         {/* Accordion is needed */}
                         {/* <Grid.Column width={16}>
                            <Accordion >
                                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
                                    <Icon name='dropdown' />INFO
                                </Accordion.Title>
                                <Accordion.Content>
                                    <Divider />
                                </Accordion.Content>
                            </Accordion>
                         </Grid.Column> */}
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_orderDetails" style={{ marginTop: "0%" }}>
                        <Grid.Column width={16}>
                            <h5 style={{ color: "red", textTransform: 'uppercase', letterSpacing:"1px" }}>Cancelled</h5>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <p className="lightGreyText" style={{ fontSize: "75%" }}>ORDER NO: 01120316</p>
                            <p className="lightGreyText" style={{ position: 'right', fontSize: "75%" }}>Placed on 23/02/18</p>
                        </Grid.Column>
                        <Divider />
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/622809430ss.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <Header className="darkText" > Polka Dot Tie-Up Top</Header>
                                <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header className="darkText">35$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 2 Items</span> </p>
                                <p className="greyText">  Need Help?    </p>
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_orderDetails" style={{ marginTop: "0%" }}>
                        <Grid.Column width={16}>
                            <h5 style={{ color: "green", letterSpacing:"1px", textTransform: 'uppercase' }}>Delivered</h5>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <p className="lightGreyText" style={{ fontSize: "75%" }}>ORDER NO: 01102764</p>
                            <p className="lightGreyText" style={{ position: 'right', fontSize: "75%" }}>Placed on 21/02/18</p>
                        </Grid.Column>
                        <Divider />
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/514713868ss.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <Header className="darkText" > Polka Black Dotted Top</Header>
                                <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header className="darkText">55$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 3 Items</span> </p>
                                <Link to='/exchangepage'><p className="greyText">  Need Help?    </p></Link>
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_orderDetails" style={{ marginTop: "0%" }}>
                        <Grid.Column width={16}>
                            <h5 style={{ color: "green", letterSpacing: "1px", textTransform: 'uppercase' }}>Delivered</h5>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <p className="lightGreyText" style={{ fontSize: "75%" }}>ORDER NO: 01163458</p>
                            <p className="lightGreyText" style={{ position: 'right', fontSize: "75%" }}>Placed on 05/11/17</p>
                        </Grid.Column>
                        <Divider />
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/180705919ss.jpg' />
                            <p style={{ marginLeft: "3%" }}>
                                <Header className="darkText" >  Purple Printed Top</Header>
                                <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header className="darkText">12$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 1 Item</span> </p>
                                <p className="greyText">  Need Help?    </p>
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                   <Grid.Row only='mobile' style={{ marginBottom:"4%" }}>
                    <Grid.Column width={1} />
                    <Grid.Column width={12} style={{ textTransform: "capitalise", letterSpacing: "1px" }}>
                            <center><span className="greyText">Showing 1 - 4 of 4</span></center>
                    </Grid.Column>
                    <Grid.Column width={1} />
                    </Grid.Row>

                </Grid>

            </div>
        );
    }
}
