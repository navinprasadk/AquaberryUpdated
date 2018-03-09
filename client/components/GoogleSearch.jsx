import React, { Component } from "react";
import {
  Grid,
  Input,
  Card,
  Image,
  Divider,
  Header,
  Icon,
  Dimmer,
  Loader,
  Segment
} from "semantic-ui-react";
import TrackVisibility from "react-on-screen";
import { VoicePlayer, VoiceRecognition } from "react-voice-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BeatLoader } from "halogenium";

export default class GoogleSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeCardStatus: false,
      userInputCardStatus: false,
      adminInputCardStatus: false,
      textToDisplay: "I",
      cardResults: "",
      cardResultStatus: false,
      googleImage: true,
      loaderStatus: false,
      adminInputData: "",
      adminInputDataArray: [
        "Here you go",
        "Here's what I found",
        "Here you go!top 3 recommendations"
      ],
      labelResultStatus: false,
      labelResults: "",
      audioStatus: false
    };
    this.handleCardResults = this.handleCardResults.bind(this);
    this.handleLabelResults = this.handleLabelResults.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  componentDidMount() {
    {
      /*Timeout for welcomecard*/
    }
    setTimeout(() => {
      this.setState({
        welcomeCardStatus: true,
        welcomeImageStatus: true
      });
    }, 500);
    {
      /*Timeout for userInputCard*/
    }
    // setTimeout(() =>
    // {
    //
    // }, 1000);
  }

  handleUserInput() {
    console.log("inside user input");
    let input = " want to buy formal evening dresses";
    let data = input.split(" ");
    let i = 0;
    let timerId = setInterval(() => {
      this.setState({
        userInputCardStatus: true,
        welcomeImageStatus: false,
        userImageStatus: true
      });
      if (i < data.length) {
        this.setState({
          textToDisplay: this.state.textToDisplay + " " + data[i]
        });
      }
      i++;
      if (i === data.length + 1) {
        clearInterval(timerId);
      }
    }, 500);

    {
      /*Timeout for adminInputCard*/
    }
    setTimeout(() => {
      this.setState({
        adminInputData: this.state.adminInputDataArray[
          Math.floor(Math.random() * this.state.adminInputDataArray.length)
        ],
        adminInputCardStatus: true,
        audioStatus: true,
        loaderStatus: true,
        userImageStatus: true
      });
    }, 5100);

    setTimeout(() => {
      this.handleCardResults();
    }, 6000);

    setTimeout(() => {
      this.handleLabelResults();
    }, 7000);
  }

  handleCardResults() {
    var temp,
      settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      };
    temp = (
      <Grid.Column width={16}>
        <Slider
          {...settings}
          className="cardResult"
          style={{
            bottom: "3%"
          }}
        >
          <div
            style={{
              padding: "1rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Card.Group>
              <Card
                style={{
                  marginBottom: "5%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Card.Content>
                  <Link to="/womenCategory">
                    <Card.Header
                      id="googleSearchHeader"
                      style={{
                        color: "#1967D2",
                        display: "block",
                        marginBottom: "-1px",
                        paddingTop: "1px",
                        lineHeight: "20px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "16px",
                        fontWeight: "normal"
                      }}
                    >
                      Workwear | work clothes for women | Aquaberry
                      {/* Women's Top: Buy Jeans Top Online at best prices in London - Aquaberry, one of the best online fashionable store in the world */}
                    </Card.Header>
                    <Card.Meta
                      id="googleSearchLink"
                      style={{
                        color: "#006621",
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        lineHeight: "20px"
                      }}
                    >
                      https://m.aquaberry.com>Womens-dresses>results
                    </Card.Meta>
                  </Link>
                  {/* </Card.Content> */}
                  <Divider />
                  <p
                    id="googleSearchDescription"
                    style={{
                      paddingTop: "1px",
                      marginBottom: "0%",
                      fontSize: "14px",
                      lineHeight: "20px",
                      wordWrap: "break-word",
                      textOverflow: "ellipsis"
                    }}
                  >
                    Look the biz in this season's slickest workwear at
                    aquaberry, from ladylike shift dresses to super-mart
                    tailoring.
                  </p>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
          <div
            style={{
              padding: "1rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Card.Group>
              <Card
                style={{
                  marginBottom: "5%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Card.Content>
                  <Link to="/womenCategory">
                    <Card.Header
                      id="googleSearchHeader"
                      style={{
                        color: "#1967D2",
                        display: "block",
                        marginBottom: "-1px",
                        paddingTop: "1px",
                        lineHeight: "20px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "16px",
                        fontWeight: "normal"
                      }}
                    >
                      Officewear for women | BOBO
                      {/* Women's Tops | Women's Shirts, Blouses, and T-Shirts | BOBO */}
                    </Card.Header>
                    <Card.Meta
                      id="googleSearchLink"
                      style={{
                        color: "#006621",
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        lineHeight: "20px"
                      }}
                    >
                      https://m.bobo.com>Womens-topmaterials>womenstop
                    </Card.Meta>
                  </Link>
                  {/* </Card.Content> */}
                  <Divider />
                  <p
                    id="googleSearchDescription"
                    style={{
                      paddingTop: "1px",
                      marginBottom: "-1%",
                      fontSize: "14px",
                      lineHeight: "20px",
                      wordWrap: "break-word",
                      textOverflow: "ellipsis"
                    }}
                  >
                    Free priority shipping · New arrivals daily · Customer
                    Service Focused · Quick & Secure Checkout , you can order
                    office wear online
                  </p>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
          <div
            style={{
              padding: "1rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Card.Group>
              <Card
                style={{
                  marginBottom: "5%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Card.Content>
                  <Link to="/womenCategory">
                    <Card.Header
                      id="googleSearchHeader"
                      style={{
                        color: "#1967D2",
                        display: "block",
                        marginBottom: "-1px",
                        paddingTop: "1px",
                        lineHeight: "20px",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "16px",
                        fontWeight: "normal"
                      }}
                    >
                      women's workwear | ladies smart clothing & workwear |
                      Terra
                      {/* Women's Shirts & Blouses | New Collection Online | Terra United States */}
                    </Card.Header>
                    <Card.Meta
                      id="googleSearchLink"
                      style={{
                        color: "#006621",
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        lineHeight: "20px"
                      }}
                    >
                      https://m.terra.com>dressforwomens-womens/women
                    </Card.Meta>
                  </Link>
                  {/* </Card.Content> */}
                  <Divider />
                  <p
                    id="googleSearchDescription"
                    style={{
                      paddingTop: "1px",
                      marginBottom: "-1%",
                      fontSize: "14px",
                      lineHeight: "20px",
                      wordWrap: "break-word",
                      textOverflow: "ellipsis"
                    }}
                  >
                    Explore women's workwear at Terra. Look stylish in the
                    office with sharply cut suits, smart work dresses and
                    tailored jackets & blazers. Shop now
                    {/* Check out our gorgeous range of women's tops from Bobo at an affordable price. Happy Shopping */}
                  </p>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Slider>
      </Grid.Column>
    );
    this.setState({
      cardResultStatus: true,
      cardResults: temp,
      googleImage: false,
      loaderStatus: false,
      userImageStatus: false,
      cardImageStatus: true
    });
  }

  handleLabelResults() {
    var temp1,
      settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      };
    temp1 = (
      <Grid.Column width={16}>
        <Slider
          {...settings1}
          className="labelResult"
          style={{
            bottom: "0%",
            marginTop: "-3%"
          }}
        >
          <div
            style={{
              padding: "0.5rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Segment
              style={{
                marginBottom: "5%",
                borderRadius: "30px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <p
                style={{
                  display: "inline-block"
                }}
              >
                Women's shirt
              </p>
            </Segment>
          </div>
          <div
            style={{
              padding: "0.5rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Segment
              style={{
                marginBottom: "5%",
                borderRadius: "30px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <p
                style={{
                  display: "inline-block"
                }}
              >
                Dress for girls
              </p>
            </Segment>
          </div>
          <div
            style={{
              padding: "0.5rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Segment
              style={{
                marginBottom: "5%",
                borderRadius: "30px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <p
                style={{
                  display: "inline-block"
                }}
              >
                Shop nearby
              </p>
            </Segment>
          </div>
          <div
            style={{
              padding: "0.5rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Segment
              style={{
                marginBottom: "5%",
                borderRadius: "30px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <p
                style={{
                  display: "inline-block"
                }}
              >
                Top and jeans
              </p>
            </Segment>
          </div>
          <div
            style={{
              padding: "0.5rem",
              maxWidth: "960px",
              margin: "0 auto"
            }}
          >
            <Segment
              style={{
                marginBottom: "5%",
                borderRadius: "30px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <p
                style={{
                  display: "inline-block"
                }}
              >
                women's wearable
              </p>
            </Segment>
          </div>
        </Slider>
      </Grid.Column>
    );
    this.setState({
      labelResultStatus: true,
      labelResults: temp1,
      cardImageStatus: true
    });
  }

  render() {
    let welcomeCard = (
      <Grid.Column width={16}>
        <div
          style={{
            display: "block"
          }}
        >
          <Image
            src="http://www.iconninja.com/files/881/286/362/assistant-app-application-google-icon.svg"
            size="mini"
            alt=""
            style={{
              marginLeft: "2%"
            }}
          />{" "}
          {/* <Image src="http://evananthony.com/myFiles/googleAssistant/opa_voice.gif" size="small" style={{ marginLeft:'2%' }}/> */}
          <Card
            style={{
              borderRadius: "30px",
              padding: "0 1%",
              margin: "-12% -2.5% 21% 12.5%",
              color: "black",
              width: "50%"
            }}
          >
            <Card.Content>
              <Card.Description
                style={{
                  color: "#212121"
                }}
              >
                Hi, how can I help you?
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
    );
    let userInputCard = (
      <Grid.Column width={16}>
        <Card
          style={{
            borderRadius: "30px",
            float: "right",
            padding: "0 1%",
            margin: "-12% -2.5% 12% 15.5%",
            backgroundColor: "#e0e0e0",
            color: "black"
          }}
        >
          <Card.Content>
            <Card.Description style={{ color: "#212121" }}>
              {this.state.textToDisplay}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
    let adminInputCard = (
      <Grid.Column width={16}>
        <div style={{ display: "block" }}>
          <Image
            src="http://www.iconninja.com/files/881/286/362/assistant-app-application-google-icon.svg"
            alt=""
            size="mini"
            style={{ marginLeft: "2%" }}
          />
          <Card
            style={{
              borderRadius: "30px",
              padding: "0 1%",
              margin: "-12% -2.5% 12% 12.5%",
              color: "black",
              width: "50%"
            }}
          >
            <Card.Content>
              <Card.Description style={{ color: "#212121" }}>
                {this.state.adminInputData}
                {this.state.audioStatus && (
                  <VoicePlayer
                    play
                    text={this.state.adminInputData}
                    onEnd={() => {
                      this.setState({
                        audioStatus: false
                      });
                    }}
                  />
                )}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
    );
    return (
      <div style={{ overflow: "hidden" }}>
        {" "}
        <Grid>
          {this.state.googleImage ? (
            <Grid.Row
              style={{
                marginTop: "35%"
              }}
            >
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png"
                  alt=""
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          ) : null}

          <Grid.Row
            only="mobile"
            style={{
              position: "absolute",
              bottom: "0%"
            }}
          >
            {this.state.welcomeCardStatus ? welcomeCard : null}
            {this.state.userInputCardStatus ? userInputCard : null}
            {this.state.adminInputCardStatus ? adminInputCard : null}
            {this.state.cardResultStatus ? this.state.cardResults : null}
            {this.state.labelResultStatus ? this.state.labelResults : null}
          </Grid.Row>
          <Grid.Row
            only="mobile"
            style={{
              position: "fixed",
              bottom: "0%",
              marginTop: "5%",
              borderTop: "1px grey solid",
              padding: "0% 0% 0% 2%"
            }}
          >
            <Grid.Column width={1} style={{ padding: "0 6%", marginTop: "3%" }}>
              <Icon name="keyboard" size="big" style={{ color: "grey" }} />
            </Grid.Column>
            <Grid.Column width={14} style={{ textAlign: "center" }}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/2000px-Google_mic.svg.png"
                size="tiny"
                onClick={() => {
                  this.setState({
                    userInputCardStatus: false,
                    welcomeImageStatus: false,
                    userImageStatus: false,
                    textToDisplay: 'I',
                    adminInputData: '',
                    adminInputCardStatus: false,
                    audioStatus: false,
                    loaderStatus: false,
                    userImageStatus: false,
                    cardResultStatus: false,
                    cardResults: '',
                    googleImage: true,
                    loaderStatus: false,
                    userImageStatus: false,
                    cardImageStatus: false,
                    labelResultStatus: false,
                    labelResults: '',
                    cardImageStatus: false
                  },this.handleUserInput)
                }}
                style={{
                  height: "76%",
                  marginLeft: "36%",
                  width: "10%",
                  marginTop: "2%"
                }}
              />
              {/* {
            gif url:https://3.bp.blogspot.com/-uuy4oHM8YNU/VelHUJMDJMI/AAAAAAACEzc/A0zvTppv8uE/s320/g-dots.gif
            this.state.welcomeImageStatus ? <Image src="https://3.bp.blogspot.com/-uuy4oHM8YNU/VelHUJMDJMI/AAAAAAACEzc/A0zvTppv8uE/s320/g-dots.gif" size="tiny"
             style={{
               marginLeft: '36%'
             }}
           /> : null
         }
         {
           this.state.userImageStatus ?
             <Image src="" size="tiny"
             style={{
               marginLeft: '36%'
             }}
           /> : null
         }
         {
           this.cardImageStatus ?
             <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/2000px-Google_mic.svg.png" size="large"
             style={{
               marginLeft: '36%'
             }}
           /> : null
         } */}
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
        <Dimmer active={this.state.loaderStatus}>
          <BeatLoader />
          <p>Loading</p>
        </Dimmer>
        <TrackVisibility offset={1000} />
      </div>
    );
  }
}
