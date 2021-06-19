import React, { useState } from "react";

import clsx from "clsx";

import { Box, Button, TextField, Typography } from "@material-ui/core";

import { getInputValue } from "../transferForm/TransferForm.utils";
import { useEffect } from "react";
import { IInputProps } from "./input.types";

const Input: React.FC<IInputProps> = ({ label, value, onChange }) => {
  const [stateValue, setValue] = useState("");

  useEffect(() => {
    if (stateValue !== value) {
      setValue(value);
    }
  }, [value]);

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const value = getInputValue(event?.currentTarget?.value, 2);

    if (value === "" || value) {
      setValue(value);
      onChange?.(value);
    }
  };

  return (
    <Box>
      <Typography variant="h5">{label}</Typography>

      <TextField
        style={{ width: "100%" }}
        value={stateValue}
        onChange={valueChangeHandler}
        variant="outlined"
      />
    </Box>
  );
};

export default Input;
