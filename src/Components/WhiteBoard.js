import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color : "#201224"
  }
});

function WhiteBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>This is a white board</span>
    </div>
  );
}

export default WhiteBoard;
