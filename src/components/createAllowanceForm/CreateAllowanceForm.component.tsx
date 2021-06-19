import React, { useReducer, useState } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { StoreDispatch } from "../../store/index.types";
import UserSelector from "../userSelector/userSelector.component";

import { UserType } from "../../store/users";
import { usersSelectorBesideActive } from "../../store/selectors";

import { allowanceDefinitionActions } from "../../store/allowance/allowanceDefinition.slice";
import { current } from "@reduxjs/toolkit";
import { Alert } from "@material-ui/lab";
import { selectActiveUser } from "../../store/user/userState.selector";

interface CreateAllowanceFormFields {
  user: UserType | null;
  amount: number;
  days?: number;
  howManyRepeat?: number;
  error?: string;
}

type CreateAllowanceFormActionUser = {
  type: "user";
  payload: UserType;
};

type CreateAllowanceFormActionNumber = {
  type: "amount" | "days" | "howManyRepeat";
  payload: number;
};

type CreateAllowanceFormActionString = {
  type: "error",
  payload: string;
}

type CreateAllowanceFormActionRemoveError = {
  type: "removeError"
}

type CreateAllowanceFormAction =
  | CreateAllowanceFormActionUser
  | CreateAllowanceFormActionNumber
  | CreateAllowanceFormActionString
  | CreateAllowanceFormActionRemoveError;

const initState: CreateAllowanceFormFields = {
  user: null,
  amount: 0,
};

function reducer(
  state: CreateAllowanceFormFields,
  action: CreateAllowanceFormAction
): CreateAllowanceFormFields {
  if (action.type == "removeError") {
    const { error, ...rest } = state
    return rest
  }

  return {
    ...state,
    [action.type]: action.payload,
  };
}

const CreateAllowanceForm = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const users = useSelector(usersSelectorBesideActive);
  const activeUser = useSelector(selectActiveUser);
  const reduxDispatch = useDispatch<StoreDispatch>();

  const currentUser = useSelector(selectActiveUser)
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
      const value = parseInt(ev.target.value)
      if (value > currentUser.balance) {
        dispatch({
          type: "error",
          payload: "Przekracza balans użytkownika"
        })
      } else {
        dispatch({
          type: "amount",
          payload: value,
        });
        dispatch({
          type: "removeError"
        })
      }
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

  const handleClick = () => {
    if (!state.user || !state.days) return;
    reduxDispatch(
      allowanceDefinitionActions.addDefinition({
        ownerId: activeUser.id,
        spenderId: state.user.id,
        amount: state.amount,
        cycle: 1,
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
        {state.error && <Typography color="error">
          {state.error}
        </Typography>}
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
        <Button
          style={{ width: "100%" }}
          disabled={!!state.error}
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Dodaj
        </Button>
      </Box>
      {showAlarm && (
        <Alert severity="success" color="success">
          {`Kwota w wysokości ${state.amount} zł została udostępniona dla użytkownika ${state.user?.name}`}
        </Alert>
      )}
    </Box>
  );
};

export default CreateAllowanceForm;
