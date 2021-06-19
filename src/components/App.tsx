import React, { useState } from "react";

import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "../styles/theme";
import ShareForm from "./shareForm/ShareForm.component";
import Tabs from "./tabs/tabs.component";

function App() {
  const items = [
    { label: "Wprowadź wartości ręcznie", value: "1" },
    { label: "Wylicz wartości automatycznie", value: "2" },
  ];

  const [selectedTab, setSelectedTab] = useState(items[0].value);
  const onTabChange = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Tabs
            items={items}
            selectedValue={selectedTab}
            onChange={onTabChange}
          />

          {items[0].value === selectedTab && <ShareForm />}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
