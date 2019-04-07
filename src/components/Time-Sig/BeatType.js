import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const BeatType = props => {
  return (
    <div>
      <Button
        aria-owns={props.anchore2 ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={props.handleClick}
      >
        {props.type}
      </Button>
      <Menu
        id="simple-menu"
        anchore2={props.anchore2}
        open={Boolean(props.anchore2)}
        onClose={props.handleClose}
      >
        {props.options.map((option, i) => {
          return (
            <MenuItem onClick={props.handleClose} key={i}>
              {option}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default BeatType;
