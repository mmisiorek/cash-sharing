import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@material-ui/core";

import { getInputValue } from "../TransferForm.utils";
import UserSelector from "../../userSelector/userSelector.component";

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

  const onClick = () => {};

  return (
    <Box pt={2}>
      <Box width="100%" pt={2} pb={2}>
        <UserSelector />
      </Box>

      <Box pt={2}>
        <Box>
          <Typography variant="h5">Całkowita kwota</Typography>

          <TextField
            style={{ width: "100%" }}
            value={value}
            onChange={valueChangeHandler}
            variant="outlined"
          />
        </Box>
      </Box>

      <Box pt={2} width="100%" display="flex" justifyContent="center">
        <Button color="primary" variant="contained" onClick={onClick}>
          Dodaj odbiorce
        </Button>
      </Box>
    </Box>
  );
};

export default TransferManual;
