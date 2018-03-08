import React, { Component } from 'react';
import { Segment, Grid, Image, Button, Icon, Form, Radio, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class SmartStoreCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            deliveryDate:false,
            dateValue:'',
            currentDateYear:'',
        }
    }

    componentWillMount() {
        var d = new Date();
        var currentDate = d.getDate();
        var currentDateYear = currentDate.toString().slice(4, 16);

        d.setDate(d.getDate() + 7);
        var x = d.toString().slice(4, 16);
        this.setState({
            currentDateYear,
            dateValue: x
        });
    }
    
    handleChange = (e, { value }) => this.setState({ value, deliveryDate:true})

    render() {
        return (
            <div style={{}}>
            {/* <div className="bgImageSignin" style={{ overflow: "hidden",  backgroundImage: 'url(./client/assets/Images/signin4.jpeg)' }} > */}
                <AppBar />

                <Grid>
                    
                    <Grid.Row only='mobile' className="card_smartStoreCheckout" style={{ marginTop: "15%" }}> 
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <span >
                               <center> <h2> Thank you </h2></center>
                            </span>
                            <center><h3> for shopping in Smart Store</h3></center>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_smartStoreCheckout" style={{ marginTop: "0%" }}>
                        <Grid.Column width={1} />
                        <Grid.Column width={14}>
                            <Header> Select a preferred delivery method </Header>
                        </Grid.Column>
                        <Grid.Column width={1} />

                    </Grid.Row>

                    <Grid.Row only='mobile' style={{marginTop:"0%"}}>
                        <Grid.Column width={1} />
                        <Grid.Column width={7}  >
                            <Segment>
                                <Form>
                                    <Form.Field style={{fontWeight:"bold", textTransform:"uppercase"}}>
                                        <Radio label='Deliver' name='radioGroup' value='Deliver' checked={this.state.value === 'Deliver'} onChange={this.handleChange}/>
                                    </Form.Field>
                                </Form>
                            {/* You have selected <b>{this.state.value}</b> */}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={7}  >
                            <Segment>
                                <Form>
                                    <Form.Field style={{ fontWeight: "bold", textTransform: "uppercase"}}>
                                        <Radio label='Collect' name='radioGroup' value='Collect' checked={this.state.value === 'Collect'} onChange={this.handleChange} />
                                    </Form.Field>
                                </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>
                    {
                        this.state.deliveryDate?
                        (
                        <Grid>
                            <Grid.Row only='mobile' >
                                <Grid.Column width={1} />
                                <Grid.Column width={14} >
                                    <center><h4> Your product will be delivered by {this.state.dateValue} between 12:00 to 15:00 hours</h4></center>
                                </Grid.Column>
                                <Grid.Column width={1} />
                            </Grid.Row>

                            <Grid.Row only='mobile' className="card_orderDetails" style={{ marginTop: "0%" }}>
                                <Grid.Column width={16} style={{ fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                                    <p className="lightGreyText" style={{ fontSize: "85%" }}>ORDER NO: 01120448</p>
                                    {/* <p className="lightGreyText" style={{ position: 'right', fontSize: "75%" }}>Placed on {this.state.currentDateYear}</p> */}
                                    <Divider />
                                </Grid.Column>
                                {/* <Divider /> */}
                                <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                    <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/622809430ss.jpg' />
                                    <p style={{ marginLeft: "3%" }}>
                                        <Header className="darkText" > Polka Dot Tie-Up Top</Header>
                                        <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header>15$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 1 Item</span> </p>
                                        <p style={{leeterSpacing:"1px"}}><Icon color="green" name="dot circle outline" />Processing</p>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                           
                            <Grid.Row only='mobile' >
                                <Grid.Column width={1} />
                                <Grid.Column width={14}>
                                    <center><p style={{fontWeight:"bold"}}> Balance amount in your digi wallet is <h3>122$</h3> </p></center>
                                </Grid.Column>
                                <Grid.Column width={1} />
                            </Grid.Row>
                        </Grid>
                        )
                        :null
                    }
                    
                </Grid>
            </div>
            
        );
    }
}
