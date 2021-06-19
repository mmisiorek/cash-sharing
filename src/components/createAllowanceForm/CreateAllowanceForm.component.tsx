import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Typography } from "@material-ui/core";

import UserSelector from "../userSelector/userSelector.component";
import { useTheme } from "@material-ui/core/styles";
import Input from "../input/Input.component";

const useClasses = makeStyles(() => ({
  textField: {
    width: "100%",
  },
}));

const CreateAllowanceForm = () => {
  const { palette } = useTheme();
  const classes = useClasses();
  const [value, setValue] = useState("");

  return (
    <Box pt={5}>
      <Box p={2} bgcolor={palette.secondary.main} width="100%">
        <UserSelector />
      </Box>
      <Box p={2} bgcolor={palette.secondary.main} width="100%">
        <Input value={value} onChange={(val) => setValue(val)} label="Kwota" />
      </Box>
    </Box>
  );
};

export default CreateAllowanceForm;
