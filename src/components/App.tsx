import React, { useEffect } from "react";

import { Provider } from "react-redux";
import { mainSaga } from "../saga";
import { sagaMiddleware, store } from "../store";
import { ThemeProvider } from "../styles/theme";

import { Users } from "./Users";
import { AllowancePopulateAction } from "./AllowancePopulateAction";

function App() {
  useEffect(()=> {
    sagaMiddleware.run(mainSaga)
  }, [])
  
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Users />
          <AllowancePopulateAction />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
