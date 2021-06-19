import React, { useState } from "react";

import { Box } from "@material-ui/core";


import TransferManual from "./transferManual/transferManual.component";

const TransferForm: React.FC<any> = () => {

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <Box p={2} width="100%">
        <TransferManual />
      </Box>
    </Box>
  );
};

export default TransferForm;
