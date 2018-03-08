import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './client/AppRouter.jsx';
ReactDOM.render(
  <MuiThemeProvider>
  <AppRouter/>
</MuiThemeProvider>
  , document.getElementById('reactApp'));
 
