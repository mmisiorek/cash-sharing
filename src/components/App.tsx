import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { mainSaga } from "../saga";
import { sagaMiddleware, store } from "../store";
import { ThemeProvider } from "../styles/theme";

import Tabs from "./tabs/tabs.component";

import TransferForm from "./transferForm/TransferForm.component";
import CreateAllowanceForm from "./createAllowanceForm/CreateAllowanceForm.component";
import { Box } from "@material-ui/core";

import AllowancesView from "./allowancesView/AllowancesView.component";

import LayoutComponent from "./layout/layout.component";

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
<<<<<<< HEAD
          <div className={classes.usersWrapper}>
            <Users />
          </div>
          <Box>
            <Tabs
              items={items}
              selectedValue={selectedTab}
              onChange={onTabChange}
            />
          </Box>

          <Box>
            {items[0].value === selectedTab && <CreateAllowanceForm />}
            {/* {items[1].value === selectedTab && <AllowancesView />} */}
            {items[2].value === selectedTab && <TransferForm />}
          </Box>
          {/* <AllowancePopulateAction /> */}
=======
          <LayoutComponent>
            <Box>
              <Tabs
                items={items}
                selectedValue={selectedTab}
                onChange={onTabChange}
              />
            </Box>

            <Box>
              {items[0].value === selectedTab && <CreateAllowanceForm />}
              {items[1].value === selectedTab && <AllowancesView />}
              {items[2].value === selectedTab && <TransferForm />}
            </Box>
          </LayoutComponent>
>>>>>>> c2d283fa00b50725fa623ef0b6a461c9402369ab
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
