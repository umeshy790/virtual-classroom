import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Students from "./Students";
import InteractionOverlayFooter from "./InteractionOverlayFooter";
import Notes from "./Notes";
import WhiteBoard from "./WhiteBoard";
import Questions from "./QuestionAnswers";
import { Badge, ButtonBase } from "@material-ui/core";
import PanToolIcon from "@material-ui/icons/PanTool";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  container: { height: "70vh", overflow: "hidden", background: "#ffffff", position: "relative" },
  body: {
    display: "flex",
    height: "calc(70vh - 56px)",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "auto"
  },
  notification: {
    position: "absolute",
    right: "14px",
    bottom: "77px",
    zIndex: "1000",
    height: "40px",
    width: "40px",
    background: "#0086da",
    borderRadius: "50%",
    color: "white"
  },
  footer: {
    position: "absolute",
    bottom: "0px",
    width: "100%"
  }
});

function InteractionOverlay() {
  const classes = useStyles();
  const [showBadge, setShowBadge] = useState(false);
  const currentScreen = useSelector(state => state.screenIndex);
  const dispatch = useDispatch();

  /**
   * change screen to questions sections
   */
  const handleBaseClick = () => {
    setShowBadge(false);
    dispatch({ type: "CHANGE_SCREEN_INDEX", payload: 3 });
  };

  /**
   * just to simulate some asked question
   */
  useEffect(() => {
    setTimeout(() => setShowBadge(true), 5000);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {currentScreen === 0 ? <WhiteBoard></WhiteBoard> : currentScreen === 1 ? <Notes /> : currentScreen === 2 ? <Students /> : <Questions />}
      </div>
      <div className={classes.footer}>
        <InteractionOverlayFooter />
      </div>
      {showBadge ? (
        <ButtonBase className={classes.notification} onClick={handleBaseClick}>
          <Badge badgeContent={1} color="primary">
            <PanToolIcon />
          </Badge>
        </ButtonBase>
      ) : null}
    </div>
  );
}

export default InteractionOverlay;
