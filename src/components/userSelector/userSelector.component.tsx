import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";

import { Typography } from "@material-ui/core";

import { UserType } from "../../store/users";
import { useStyles } from "./userSelector.styles";

type UserSelectorProps = {
  users: UserType[];
  onChange?: (user: UserType) => void;
};

const UserSelector: React.FC<UserSelectorProps> = ({ users, onChange }) => {
  const classes = useStyles();

  const [selectedUserName, setSelectedUserName] = useState(
    users.length > 0 ? users[0].name : null
  );

  const handleUserChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (ev && ev.target && typeof ev.target.value == "string") {
      setSelectedUserName(ev.target.value);

      const user = users.find((u) => u.id === ev.target.value);
      if (user) {
        onChange?.(user);
      }
    }
  };

  return (
    <Box width="100%">
      <Typography variant="h5">Użytkownik</Typography>
      <Select
        className={classes.test}
        variant="outlined"
        value={selectedUserName}
        onChange={handleUserChange}
      >
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </Select>
    </Box>
  );
};

export default UserSelector;
