import React from 'react';
import Button from '@material-ui/core/Button'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import {Provider, useStore} from 'react-redux'
import { store } from '../store'


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <ThemeProvider theme={createMuiTheme()}>
                <SuperButton />
            </ThemeProvider>
        </Provider>
    </div>
  );
}

function SuperButton() {
    const store = useStore()

    return <Button color={"primary"}>
        {store.getState().messages.messages[0]}
    </Button>
}

export default App;
