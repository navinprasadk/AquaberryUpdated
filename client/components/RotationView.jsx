import React from 'react'
import {render} from 'react-dom';
import Rotation from 'react-rotation';
import { Grid } from 'semantic-ui-react';

const RotationView = () => {
  
  var rotationSettings = {
    scroll:true,
    cycle:true,
  }

  return(
    <Grid>
      <Grid.Row only='mobile'>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Rotation {...rotationSettings}>
            <img src='./client/assets/Images/360/00.jpg' />
            <img src='./client/assets/Images/360/01.jpg' />
            <img src='./client/assets/Images/360/02.jpg' />
            <img src='./client/assets/Images/360/03.jpg' />
            <img src='./client/assets/Images/360/04.jpg' />
            <img src='./client/assets/Images/360/05.jpg' />
            <img src='./client/assets/Images/360/06.jpg' />
            <img src='./client/assets/Images/360/07.jpg' />
            <img src='./client/assets/Images/360/08.jpg' />
            <img src='./client/assets/Images/360/09.jpg' />
            <img src='./client/assets/Images/360/10.jpg' />
            <img src='./client/assets/Images/360/11.jpg' />
            <img src='./client/assets/Images/360/12.jpg' />
            <img src='./client/assets/Images/360/13.jpg' />
            <img src='./client/assets/Images/360/14.jpg' />
            <img src='./client/assets/Images/360/15.jpg' />
          </Rotation>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default RotationView;