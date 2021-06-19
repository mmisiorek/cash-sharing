import React, { useReducer, useState } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { StoreDispatch } from "../../store/index.types";

import UserSelector from "../userSelector/userSelector.component";

import { UserType } from "../../store/users";
import { useSelector } from "react-redux";
import { usersSelectorBesideActive } from "../../store/selectors";

import { allowanceDefinitionActions } from "../../store/allowance/allowanceDefinition.slice";
import { Alert } from "@material-ui/lab";

interface CreateAllowanceFormFields {
  user: UserType | null;
  amount: number;
  days?: number;
  howManyRepeat?: number;
}

type CreateAllowanceFormActionUser = {
  type: "user";
  payload: UserType;
};

type CreateAllowanceFormActionNumber = {
  type: "amount" | "days" | "howManyRepeat";
  payload: number;
};

type CreateAllowanceFormAction =
  | CreateAllowanceFormActionUser
  | CreateAllowanceFormActionNumber;

const initState: CreateAllowanceFormFields = {
  user: null,
  amount: 0,
};

function reducer(
  state: CreateAllowanceFormFields,
  action: CreateAllowanceFormAction
): CreateAllowanceFormFields {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

const CreateAllowanceForm = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const users = useSelector(usersSelectorBesideActive);
  const reduxDispatch = useDispatch<StoreDispatch>();

  const [showAlarm, setShowAlarm] = useState(false);

  const handleUserChange = (user: UserType) => {
    dispatch({
      type: "user",
      payload: user,
    });
  };

  const handleAmountChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (ev && ev.target && typeof ev.target.value === "string") {
      dispatch({
        type: "amount",
        payload: parseInt(ev.target.value),
      });
    }
  };

  const handleDaysChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (ev && ev.target && typeof ev.target.value === "string") {
      dispatch({
        type: "days",
        payload: parseInt(ev.target.value),
      });
    }
  };

  const handleHowManyChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (ev && ev.target && typeof ev.target.value === "string") {
      dispatch({
        type: "howManyRepeat",
        payload: parseInt(ev.target.value),
      });
    }
  };

  const handleClick = () => {
    if (!state.user || !state.howManyRepeat || !state.days) return;
    reduxDispatch(
      allowanceDefinitionActions.addDefinition({
        ownerId: "12",
        spenderId: state.user.id,
        amount: state.amount,
        cycle: state.howManyRepeat,
        durationDays: state.days,
      })
    );
    setShowAlarm(true);
    setTimeout(() => {
      setShowAlarm(false);
    }, 3000);
  };

  return (
    <Box pt={5}>
      <Box p={2} width="100%">
        <UserSelector users={users} onChange={handleUserChange} />
      </Box>
      <Box p={2} width="100%">
        <Typography variant="h5">Kwota</Typography>
        <TextField
          style={{
            width: "100%",
          }}
          type={"number"}
          onChange={handleAmountChange}
          variant="outlined"
        />
      </Box>
      <Box p={2} width="100%">
        <Typography variant="h5">Na ile dni udostępnić środki?</Typography>
        <TextField
          type={"number"}
          style={{
            width: "100%",
          }}
          onChange={handleDaysChange}
          variant="outlined"
        />
      </Box>
      <Box p={2} width="100%">
        <Typography variant="h5">Ile razy powtórzyć udostępnianie?</Typography>
        <TextField
          type={"number"}
          style={{
            width: "100%",
          }}
          onChange={handleHowManyChange}
          variant="outlined"
        />
      </Box>
      <Box p={2} width="100%">
        <Button
          style={{ width: "100%" }}
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Dodaj
        </Button>
      </Box>
      {showAlarm && (
        <Alert severity="success" color="success">
          Kwota w wysokości 100 zł została udostępniona dla użytkownika Marcin
          Misiorek
        </Alert>
      )}
    </Box>
  );
};

export default CreateAllowanceForm;
