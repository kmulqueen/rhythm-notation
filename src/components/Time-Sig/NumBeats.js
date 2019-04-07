import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const NumBeats = props => {
  return (
    <div>
      <Button
        aria-owns={props.anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={props.handleClick}
      >
        {props.num}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        open={Boolean(props.anchorEl)}
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

export default NumBeats;
