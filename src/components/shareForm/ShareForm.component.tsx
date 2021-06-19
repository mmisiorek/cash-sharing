import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { getInputValue } from "./ShareForm.utils";
import { Users } from "../Users";

import Toggle from "../toggle/toggle.component";

import { useTheme } from "@material-ui/core/styles";

const ShareForm: React.FC<any> = () => {
  const [value, setValue] = useState("");
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

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const value = getInputValue(event?.currentTarget?.value, 2);

    if (value === "" || value) {
      setValue(value);
    }
  };

  const onToggleChange = (value: string) => {
    setSelectedToggle(value);
  };

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <Box p={2} bgcolor={palette.secondary.main} width="100%">
        <Toggle toggles={items} onToggleChange={onToggleChange} />

        {selectToggle === items[0].id && (
          <>
            <Box width="100%" pt={2} pb={2}>
              <Users />
            </Box>

            <Box pt={2} display="flex" width="100%" justifyContent="center">
              <Box>
                <Typography variant="h4">Całkowita kwota</Typography>
                <Typography color="textSecondary">Podaj kwotę</Typography>
                <TextField
                  value={value}
                  onChange={valueChangeHandler}
                  variant="outlined"
                />
              </Box>
            </Box>

            <Box pt={2} width="100%" display="flex" justifyContent="center">
              <Button color="primary" variant="contained">
                Dodaj odbiorce
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ShareForm;
