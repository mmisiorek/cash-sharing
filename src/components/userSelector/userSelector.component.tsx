import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";

import { usersSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const UserSelector: React.FC<any> = ({ onChange }) => {
  const { palette } = useTheme();
  const users = useSelector(usersSelector);
  const [selectedUserName, setSelectedUserName] = useState(users[0].name);

  const handleUserChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    if (ev && ev.target && typeof ev.target.value == "string") {
      setSelectedUserName(ev.target.value);
      onChange?.(ev.target.value);
    }
  };

  return (
    <Box width="100%">
      <Typography variant="h5">Użytkownik</Typography>
      <Select
        style={{ width: "100%", backgroundColor: palette.background.default }}
        variant="filled"
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
