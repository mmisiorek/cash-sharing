import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import {Provider} from 'react-redux'
import { store } from '../store'
import {Users} from "./Users";


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <ThemeProvider theme={createMuiTheme()}>
                <Users />
            </ThemeProvider>
        </Provider>
    </div>
  );
}

export default App;
