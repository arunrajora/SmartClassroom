import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div className = "app" >
                Hello World
            </div>
            </MuiThemeProvider>
    );
  }
}

export default App;
