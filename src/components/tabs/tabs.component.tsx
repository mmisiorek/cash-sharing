import React from "react";

import clsx from "clsx";

import { Tab, Tabs as MUITabs } from "@material-ui/core";

import { useStyles } from "./tabs.styles";
import { ITabsProps } from "./tabs.types";

function Tabs<T>({
  items,
  selectedValue,
  onChange,
}: ITabsProps<T>): React.ReactElement {
  const classes = useStyles();

  return (
    <MUITabs
      style={{
        width: "100%",
      }}
      indicatorColor="primary"
      variant="fullWidth"
      value={selectedValue}
      onChange={(_e, value) => onChange(value)}
      TabIndicatorProps={{ color: "none" }}
    >
      {items.map((item) => (
        <Tab
          className={clsx(classes.tab, {
            [classes.selectedTab]: item.value === selectedValue,
          })}
          key={item.label}
          value={item.value}
          label={item.label}
        />
      ))}
    </MUITabs>
  );
}

export default Tabs;
