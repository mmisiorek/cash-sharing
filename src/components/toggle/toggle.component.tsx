import React from "react";

import clsx from "clsx";

import { Box, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./toggle.styles";
import { IToggleProps } from "./toggle.types";

const Toggle: React.FC<IToggleProps> = ({ toggles, onToggleChange }) => {
  const classes = useStyles();
  const { palette, spacing } = useTheme();
  const [selected, setSelected] = React.useState(toggles[0].id);

  const handleChange = (value: string) => {
    setSelected(value);
    onToggleChange?.(value);
  };

  return (
    <Box
      display="flex"
      style={{ background: palette.secondary.main }}
      padding={0.25}
    >
      {toggles.map((toggle, index) => (
        <Button
          style={{
            width: "100%",

            border: "none",
            height: 48,
            marginLeft: index !== 0 ? spacing(0.5) : 0,
          }}
          color="primary"
          className={clsx(
            { [classes.selectedToggle]: selected === toggle.id },
            { [classes.notSelectedToggle]: selected !== toggle.id }
          )}
          key={toggle.id}
          variant={selected === toggle.id ? "contained" : "outlined"}
          onClick={() => handleChange(toggle.id)}
        >
          {toggle.name}
        </Button>
      ))}
    </Box>
  );
};

export default Toggle;
