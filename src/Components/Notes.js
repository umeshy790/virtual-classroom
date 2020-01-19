import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import { makeStyles, createStyles } from "@material-ui/styles";
import { ButtonBase, Fab, Button } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import CheckIcon from "@material-ui/icons/Check";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: "100vw",
      position: "relative",
      overflow: "hidden",
      height: "100%",
      padding: "0px 10px",
      boxSizing: "border-box"
    },
    canvas: {
      position: "absolute",
      zIndex: "1000",
      height: "100%",
      width: "100%",
      background: "black",
      left: "0px",
      right: "0px",
      color: "white",
      opacity: 0.8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& div": {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.8em"
      },

      "& Button": {
        color: "white",
        background: "#80808073",
        marginTop: "10px"
      }
    },
    notes: {
      display: "flex",
      flexWrap: "wrap"
    },
    imageContainer: {
      background: "#9e9e9e30",
      border: "8px solid transparent",
      backgroundClip: "padding-box",
      borderRadius: "10px",
      padding: "10px",
      height: "129px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      "& img": {
        height: "60px"
      },
      "& span": {
        fontSize: "0.8em",
        color: "#202124",
        fontWeight: "500",
        lineHeight: "30px"
      }
    },
    checkIcon: {
      position: "absolute",
      top: "3px",
      right: "6px",
      fontSize: "1rem",
      color: theme.palette.primary.main
    },
    fab: {
      position: "absolute",
      bottom: "8px",
      right: "14px",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      zIndex: "100",
      fontWeight: "600",
      fontSize: "0.7em",
      "&:hover": {
        backgroundColor: theme.palette.primary.main
      }
    },
    shareIcon: {
      marginRight: "10px",
      fontSize: "1.0rem"
    }
  })
);

function Notes() {
  const classes = useStyles();
  const notes = useSelector(state => state.notes);
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);
  const [showHint, setHint] = useState(localStorage.getItem("hint") !== 'false');

  /**
   * 
   * @param {noteId} value 
   * select and unselect notes .
   */
  const _setValue = value => {
    let index = values.findIndex(v => v === value);
    if (index !== -1) {
      setValues(values.filter(v => v !== value));
      return;
    }
    setValues([...values, value]);
  };

  /**
   * just to simulate that notes being shared with students and open snackbar for ui interaction
   */
  const handleShare = () => {
    setValues([]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * save settings for hint in local storage .
   */
  const handleHintClick = () => {
    setHint(false);
    localStorage.setItem("hint", false);
  };

  return (
    <div className={classes.container}>
      {showHint ? (
        <div className={classes.canvas}>
          <div>
            <span>Tab on item to select</span>
            <Button onClick={handleHintClick}>Got it</Button>
          </div>
        </div>
      ) : null}

      {
        <div className={classes.notes}>
          <Fragment>
            {notes.map(note => (
              <ButtonBase key={note.id} className={classes.imageContainer} onClick={() => _setValue(note.id)}>
                <img src={note.icon} alt="" />
                <span>{note.title}</span>
                {values.includes(note.id) ? <CheckIcon className={classes.checkIcon}></CheckIcon> : null}
              </ButtonBase>
            ))}
          </Fragment>
        </div>
      }
      <div>
        {values.length > 0 ? (
          <Fab variant="extended" className={classes.fab} onClick={handleShare}>
            <ShareIcon className={classes.shareIcon} />
            Add To class
          </Fab>
        ) : null}
      </div>
      <Snackbar open={open} autoHideDuration={3000} message="Shared with class !" onClose={handleClose}></Snackbar>
    </div>
  );
}

export default Notes;
