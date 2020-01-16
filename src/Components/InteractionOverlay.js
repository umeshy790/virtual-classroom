import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Students from "./Students";
import InteractionOverlayFooter from "./InteractionOverlayFooter";
import Notes from "./Notes";

const useStyles = makeStyles({
  container: { height: "70vh", overflow: "hidden", background: "#ffffff", position: "relative" },
  body: {
    display: "flex",
    height: "calc(70vh - 56px)",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "auto"
  },
  inFocusBlock: {
    width: "100vw",
    transition: "margin-left 250ms ease-in,transform 250ms ease-in,-webkit-transform 250ms ease-in"
  },
  outOfFocusBlock: {
    width: "100vw",
    marginLeft: "-100vw",
    transition: "margin-left 250ms ease-out,transform 250ms ease-out,-webkit-transform 250ms ease-out"
  },
  footer: {
    position: "absolute",
    bottom: "0px",
    width: "100%"
  }
});

function InteractionOverlay() {
  const classes = useStyles();

  const currentScreen = useSelector(state => state.screenIndex);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={currentScreen === 0 ? classes.inFocusBlock : classes.outOfFocusBlock}>
          <Notes />
        </div>
        <div className={currentScreen === 0 || currentScreen === 1 ? classes.inFocusBlock : classes.outOfFocusBlock}>
          <Students />
        </div>
      </div>
      <div className={classes.footer}>
        <InteractionOverlayFooter />
      </div>
    </div>
  );
}

export default InteractionOverlay;
