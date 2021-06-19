import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { mainSaga } from "../saga";
import { sagaMiddleware, store } from "../store";
import { ThemeProvider } from "../styles/theme";

import Tabs from "./tabs/tabs.component";

import TransferForm from "./transferForm/TransferForm.component";
import CreateAllowanceForm from "./createAllowanceForm/CreateAllowanceForm.component";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Users } from "./Users";
import AllowancesView from "./allowancesView/AllowancesView.component";
import { AllowancePopulateAction } from "./AllowancePopulateAction";

const useClasses = makeStyles({
  usersWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

function App() {
  const classes = useClasses();

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

          <Box px={10}>
            {items[0].value === selectedTab && <CreateAllowanceForm />}
            {items[1].value === selectedTab && <AllowancesView />}
            {items[2].value === selectedTab && <TransferForm />}
          </Box>
          <AllowancePopulateAction />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
