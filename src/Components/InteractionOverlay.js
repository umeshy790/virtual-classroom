import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Students from "./Students";
import InteractionOverlayFooter from "./InteractionOverlayFooter";
import Notes from "./Notes";
import WhiteBoard from "./WhiteBoard";
import Questions from "./QuestionAnswers";

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
    transition: "margin-left 250ms ease-in,transform 250ms ease-in,-webkit-transform 250ms ease-in"
  },
  outOfFocusBlock: {
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
        {currentScreen === 0 ? <WhiteBoard></WhiteBoard> : currentScreen === 1 ? <Notes /> : currentScreen === 2 ? <Students /> : <Questions />}
      </div>
      <div className={classes.footer}>
        <InteractionOverlayFooter />
      </div>
    </div>
  );
}

export default InteractionOverlay;
