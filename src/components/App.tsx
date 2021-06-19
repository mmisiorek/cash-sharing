import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { mainSaga } from "../saga";
import { sagaMiddleware, store } from "../store";
import { ThemeProvider } from "../styles/theme";

import Tabs from "./tabs/tabs.component";

import AllowanceForm from "./allowanceForm/AllowanceForm.component";
import TransferForm from "./transferForm/TransferForm.component";
import { Box } from "@material-ui/core";

function App() {
  useEffect(() => {
    sagaMiddleware.run(mainSaga);
  }, []);

  const items = [
    { label: "Udostępnij środki", value: "add allowance" },
    { label: "Przeglądaj udostępnione środki", value: "view Allowance" },
    { label: "Wykonaj transfer", value: "transfer" },
  ];

  const [selectedTab, setSelectedTab] = useState(items[0].value);
  const onTabChange = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Box>
            <Tabs
              items={items}
              selectedValue={selectedTab}
              onChange={onTabChange}
            />
          </Box>

          <Box>
            {items[0].value === selectedTab && <AllowanceForm />}
            {items[1].value === selectedTab && <div>Tabelka</div>}
            {items[2].value === selectedTab && <TransferForm />}
          </Box>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
