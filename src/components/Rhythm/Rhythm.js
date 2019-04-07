import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Rhythm = props => {
  return (
    <div>
      <Button
        aria-owns={props.anchore3 ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={props.handleClick}
      >
        {props.rhythm}
      </Button>
      <Menu
        id="simple-menu"
        anchore3={props.anchore3}
        open={Boolean(props.anchore3)}
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

export default Rhythm;
