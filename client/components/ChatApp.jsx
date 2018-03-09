import React from 'react';
import request from 'superagent';
import { Grid, Segment, Icon, Image,Card,Input, Modal, Button,Header} from 'semantic-ui-react';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import AvMic from 'material-ui/svg-icons/av/mic';
import Avatar from 'material-ui/Avatar';
import { red500, yellow500, blue500, orange200, pink400 } from 'material-ui/styles/colors';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var synth = window.speechSynthesis;

var counter = 0;
var questionCounter = 0;

const iconStyles = {
    marginRight: 24,
};

const userCardStyle = {
    height: 40,
    textAlign: 'right'
};

const botCardStyle = {
    height: 40,
    textAlign: 'left'
};

const userPaperStyle = {
    height: 40,
    textAlign: 'right',
    margin: 20,
    padding: 13
};

const botPaperStyle = {
    height: 40,
    textAlign: 'left',
    margin: 20,
    padding: 13
};

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            dateModal:false,
            open:false,
            autoHideDuration: 6000,
            open:false,
            eventmessage: 'Delivery date changed successfully',
            messages: new Array()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.speechToText = this.speechToText.bind(this);
        this.textToSpeech = this.textToSpeech.bind(this);
        this.dataVAr = this.dataVAr.bind(this);
    }
    handleClick = () => {
      this.setState({
        dateModal: true,
      });
    };

    handleRequestClose = () => {
      this.setState({
        dateModal: false,
        redirect: true
      });
    };

    handleChange(event) {
        this.setState({ userInput: event.target.value }, function () {
        });
    }


    handleSendClick() {
        var tempMessages = this.state.messages;
        var tempUserMessage = {
            sender: 'User',
            text: this.state.userInput
        }
        counter++                 // Incrementing Counter
        console.log('Counter -- ', counter);
        tempMessages.push(tempUserMessage)
        this.setState({
            messages: tempMessages
        })
        // var requestString = 'http://127.0.0.1:8080/callDialogflow/' + this.state.userInput + '/' + counter;
        var reply;
        if (counter == 1) {
            reply = 'Hi, how can I help you?'
            this.textToSpeech(reply);
            var tempMessages = this.state.messages;
            var tempBotMessage = {
                sender: 'Bot',
                text: reply
            }
            tempMessages.push(tempBotMessage)
            this.setState({
                messages: tempMessages
            })
        }
        else if (counter == 2) {
          reply = 'Sure, I can do now. Can you confirm the order number?'
          this.textToSpeech(reply);
          var tempMessages = this.state.messages;
          var tempBotMessage = {
              sender: 'Bot',
              text: reply
          }
          tempMessages.push(tempBotMessage)
          this.setState({
              messages: tempMessages
          })
        }
        else if (counter == 3) {
          reply = 'Please confirm the new date and time.'
          this.textToSpeech(reply);
          var tempMessages = this.state.messages;
          var tempBotMessage = {
              sender: 'Bot',
              text: reply
          }
          tempMessages.push(tempBotMessage)
          this.setState({
              messages: tempMessages
          })
        }
        else if (counter == 4) {
          reply = 'Sure, done.'
          this.textToSpeech(reply);
          var tempMessages = this.state.messages;
          var tempBotMessage = {
              sender: 'Bot',
              text: reply
          }
          tempMessages.push(tempBotMessage)
          this.setState({
              messages: tempMessages
          })
        }
        else if (counter == 5) {
          reply = 'Always a pleasure.'
          this.textToSpeech(reply);
          var tempMessages = this.state.messages;
          var tempBotMessage = {
              sender: 'Bot',
              text: reply
          }
          tempMessages.push(tempBotMessage)
          this.setState({
              messages: tempMessages,
              dateModal:true, open:true
          })
        }
        else {
          reply = 'This query is not in my database but I am always learning.'
          this.textToSpeech(reply);
          var tempMessages = this.state.messages;
          var tempBotMessage = {
              sender: 'Bot',
              text: reply
          }
          tempMessages.push(tempBotMessage)
          this.setState({
              messages: tempMessages
          })
        }
        this.setState({ userInput: '' });
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleSendClick()
        }
    }

    printMessages(item) {
        if (item.sender === 'User') {
            // return (<Card zDepth={3} style={userCardStyle}>
            //           <CardHeader
            //             title="User"
            //             avatarRight="images/bot.png"
            //           />
            //           <CardText>
            //             {item.text}
            //           </CardText>
            //         </Card>)
            return (
                <Grid fluid>
                  <Grid.Column width = {16} >
                    <div style={{
                    display: 'block'
                  }}>
                  <Image avatar src='./client/assets/Images/istock/profile.png' floated='right' size="massive" alt="" style={{
                      marginLeft: '2%'
                    }}/>
                  <Card style={{
                      borderRadius: '30px',
                      padding: '0 1%',
                      margin: '1% -2.5% 6% 33.5%',
                      color: 'black',
                      width: '50%'
                    }}>
                    <Card.Content>
                      <Card.Description style={{
                          color: '#212121'
                        }}>{item.text}</Card.Description>
                    </Card.Content>
                  </Card>
                    </div>
                    </Grid.Column>
                </Grid>
            )
        }
        else {
            // return (<Card zDepth={3} style={botCardStyle}>
            //           <CardText>
            //             {item.text}
            //           </CardText>>
            //         </Card>)
            return (
                <Grid fluid>
                  <Grid.Column width = {16} >
                    <div style={{
                    display: 'block'
                  }}>
                  <Image src='./client/assets/Images/istock/bot.png' size='tiny' style={{
                      marginLeft: '-7%',marginTop:'-16%'
                    }}/>
                  {/* <Icon name='android' size="large" alt="" style={{
                      marginLeft: '0%',marginTop:'-16%'
                    }}/> */}
                  <Card style={{
                    borderRadius: '30px',
                    padding: '0 1%',
                    margin: '-20% -2.5% 2% 13.5%',
                    color: 'black',
                    width: '50%'
                    }}>
                    <Card.Content>
                      <Card.Description style={{
                          color: '#212121'
                        }}>{item.text}</Card.Description>
                    </Card.Content>
                  </Card>
                    </div>
                    </Grid.Column>
                </Grid>
            )
        }
    }

    speechToText(e) {
        var context = this;
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = function (event) {
            // var speechResult = event.results[0][0].transcript;
            // console.log('Speech Result: ', speechResult);
            var speechResult;
            questionCounter++;

            if(questionCounter == 1){
              speechResult = 'Hi'
            }
            else if(questionCounter == 2){
              speechResult = 'Can you reschedule the delivery of my order?'
            }
            else if(questionCounter == 3){
              speechResult = 'Thanks, the order number is 0101234.'
            }
            else if(questionCounter == 4){
              speechResult = 'Reshedule it to Friday, 9th March, 2018 at noon.'
            }
            else if(questionCounter == 5){
              speechResult = 'Thanks!'
            }


            context.setState({ userInput: speechResult }, () => {
                context.handleSendClick();
            });
        }

        recognition.onspeechend = function () {
            recognition.stop();
        }

        recognition.onerror = function (event) {
            diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
        }
    }

    textToSpeech(botReply) {
        // var inputTxt = 'This is the text to speech test.';
        var voices = synth.getVoices();
        var utterThis = new SpeechSynthesisUtterance(botReply);
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        utterThis.onend = function (event) {
        }
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
        }
        utterThis.voice = voices[3];
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }
    dataVAr(){
      var data = this.state.messages.map((item) => {
          return (this.printMessages(item))
      });
      return data;
    }
    render() {

        return (
          <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={14}>
                <Card style={{width:'100%'}}>
                  {/* <Card.Header>
                    Dialogflow Bot<br/>
                    Voice Conversation
                  </Card.Header> */}
                  <Card.Content>
                    {this.dataVAr()}
                  </Card.Content>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={13}>
                          <TextField hintText="User Says..."
                                                   value={this.state.userInput}
                                                   fullWidth={true}
                                                  onChange={this.handleChange}
                                                   onKeyDown={this.handleKeyDown}
                                              />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <IconButton tooltip="Speak">
                                                   <AvMic color={blue500}
                                                       onClick={this.speechToText}/>
                                                       </IconButton>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={1}/>
            </Grid.Row>

          </Grid>
          {
            this.state.dateModal == true ? <Modal open={this.state.open} basic size='small'>
              <Modal.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={14}>
                      <Header style={{color:'white',fontFamily:'Raleway'}}><center>Thanks Your Updated Delivery Date is 23rd march between 13:00 to 15:00 hours</center></Header>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
              <Modal.Actions>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={10}/>
                    <Grid.Column width={3}>
                      <Button color='green' inverted onClick={() => {this.setState({open:false})}}>
                         OK
                      </Button>
                      </Grid.Column>
                    <Grid.Column width={3}/>
                  </Grid.Row>
                </Grid>
              </Modal.Actions>
            </Modal> : null }
        </div>
        );
    }
}
export default ChatApp;
