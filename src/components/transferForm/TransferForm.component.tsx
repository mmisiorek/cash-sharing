import React, { useState } from "react";

import { Box } from "@material-ui/core";


import TransferManual from "./transferManual/transferManual.component";
import TransferCode from "../transferCode/transferCode.component";

const TransferForm: React.FC<any> = () => {
  const [showTransferCode, setShowTransferCode] = useState(false)

  const handleGenerateCode = () => {
      setShowTransferCode(true)
  }

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <Box p={2} width="100%">
          { !showTransferCode ? <TransferManual onGenerateCode={handleGenerateCode} /> : <TransferCode /> }
      </Box>
    </Box>
  );
};

export default TransferForm;
