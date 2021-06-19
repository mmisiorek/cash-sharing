import React, { useState } from "react";

import { Box } from "@material-ui/core";

import Toggle from "../toggle/toggle.component";

import { useTheme } from "@material-ui/core/styles";
import TransferManual from "./transferManual/transferManual.component";
import TransferAutomatic from "./transferAutomatic/transferAutomatic.component";

const TransferForm: React.FC<any> = () => {
  const { palette } = useTheme();

  const items = [
    {
      id: "1",
      name: "Wprowadź wartości ręcznie",
    },
    {
      id: "2",
      name: "Wylicz wartości automatycznie",
    },
  ];
  const [selectToggle, setSelectedToggle] = useState(items[0].id);

  const onToggleChange = (value: string) => {
    setSelectedToggle(value);
  };

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <Box p={2} bgcolor={palette.secondary.main} width="100%">
        <Toggle toggles={items} onToggleChange={onToggleChange} />

        {selectToggle === items[0].id && <TransferManual />}
        {selectToggle === items[1].id && <TransferAutomatic />}
      </Box>
    </Box>
  );
};

export default TransferForm;
