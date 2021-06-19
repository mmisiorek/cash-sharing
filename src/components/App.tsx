import React from "react";

import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "../styles/theme";

import { Users } from "./Users";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Users />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
