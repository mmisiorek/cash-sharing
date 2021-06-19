import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@material-ui/core";

import { Users } from "../../Users";
import { getInputValue } from "../TransferForm.utils";

const TransferManual: React.FC<any> = () => {
  const [value, setValue] = useState("");

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const value = getInputValue(event?.currentTarget?.value, 2);

    if (value === "" || value) {
      setValue(value);
    }
  };

  return (
    <Box>
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
    </Box>
  );
};

export default TransferManual;
