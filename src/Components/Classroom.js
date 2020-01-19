import React from "react";
import Container from "@material-ui/core/Container";
import InteractionOverlay from "./InteractionOverlay.js";
import { makeStyles } from "@material-ui/styles";
import Vedio from "./Vedio";

const useStyles = makeStyles({
  root: {
    padding: " 0px"
  },
  vedio: {
    height: "30vh",
    background: "#202124",
    position: "relative"
  },

  heading: {
    color: "white",
    fontSize: "0.875em",
    fontWeight: "500",
    position: "absolute",
    top: "3px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px 10px",
    boxSizing: "border-box"
  }
});

function Classroom() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Vedio classes={classes} />
      <InteractionOverlay />
    </Container>
  );
}

export default Classroom;
