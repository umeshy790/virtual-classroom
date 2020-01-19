import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";
import TvIcon from "@material-ui/icons/Tv";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  body: {
    borderTop: "1px solid #8080806b"
  }
});

function InteractionOverlayFooter() {
  const classes = useStyles();
  const value = useSelector(state => state.screenIndex);
  const dispatch = useDispatch();

  /**
   * 
   * @param {clickEvent} event 
   * @param {index value} newValue 
   * 
   * change screen index in state
   */
  const handleClick = (event, newValue) => {
    dispatch({ type: "CHANGE_SCREEN_INDEX", payload: newValue });
  };

  return (
    <div className={classes.body}>
      <BottomNavigation value={value} onChange={handleClick}>
        <BottomNavigationAction icon={<TvIcon />} />
        <BottomNavigationAction icon={<LibraryBooksIcon />} />
        <BottomNavigationAction icon={<PeopleIcon />} />
        <BottomNavigationAction icon={<QuestionAnswerIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default InteractionOverlayFooter;
