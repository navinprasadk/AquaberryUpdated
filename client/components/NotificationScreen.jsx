import React, { Component } from 'react';
import { Grid, Button, Image, Header, Icon, Segment, Message, Accordion, Step, Divider,Feed} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar.jsx';

export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
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
                                <span style={{fontSize:"150%"}}>Notification</span>
                        </Grid.Column>
                    <Grid.Column width={1} />
                    </Grid.Row>

                    <Grid.Row only='mobile' className="card_orderDetails" style={{marginTop: "0%" }}>
                        <Grid.Column width={16}>
                            <h5 style={{ color: "orange", textTransform: 'uppercase' , letterSpacing:"1px"}}>Shipped</h5>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                            <p className="lightGreyText" style={{fontSize:"75%"}}>ORDER NO: 01120448</p>
                           <p className="lightGreyText" style={{position:'right', fontSize:"75%"}}>Placed on 23/02/18</p>
                        </Grid.Column>
                        <Divider />
                        <Grid.Column width={16}  style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='/client/assets/Images/istock/622809430ss.jpg' />
                            <p style={{ marginLeft: "3%"}}>
                                <Header className="darkText" > Polka Dot Tie-Up Top</Header>
                                <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header>15$</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 1 Item</span> </p>
                            </p>
                         </Grid.Column>
                    </Grid.Row>
            
                    <Grid.Row>
                      <Grid.Column width={1}/>
                      <Grid.Column width={14} style={{fontFamily:'Raleway',fontWeight:'bold'}}>

                          Our delivery person is out for delivery.<br/>Your order is expected to be delivered today at 14:00 hours

                      </Grid.Column>
                      <Grid.Column width={1}/>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}
