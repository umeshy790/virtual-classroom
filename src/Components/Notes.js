import React, { useState } from "react";
import pdf from "../assets/pdf.png";
import excel from "../assets/excel.png";
import ppt from "../assets/ppt.png";

import { makeStyles, createStyles } from "@material-ui/styles";
import { ButtonBase, Fab } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import CheckIcon from "@material-ui/icons/Check";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden",
      height: "100%",
      padding: "0px 10px",
      boxSizing: "border-box"
    },
    imageContainer: {
      background: "#9e9e9e30",
      border: "8px solid transparent",
      backgroundClip: "padding-box",
      borderRadius: "15px",
      padding: "15px",
      height: "172px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      "& img": {
        height: "100px"
      },
      "& span": {
        fontSize: "0.8em",
        color: "#202124",
        fontWeight: "600",
        lineHeight: "30px"
      }
    },
    checkIcon: {
      position: "absolute",
      top: "3px",
      right: "6px",
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
      fontSize: "0.9m",
      "&:hover": {
        backgroundColor: theme.palette.primary.main
      }
    },
    shareIcon: {
      marginRight: "10px",
      fontSize: "1.2rem"
    }
  })
);

function Notes() {
  const classes = useStyles();
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);

  const _setValue = value => {
    let index = values.findIndex(v => v === value);
    if (index !== -1) {
      setValues(values.filter(v => v !== value));
      return;
    }
    setValues([...values, value]);
  };

  const handleClick = () => {
    setValues([]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <ButtonBase className={classes.imageContainer} onClick={() => _setValue(1)}>
        <img src={excel} alt="" />
        <span>Previous assign. answers</span>
        {values.includes(1) ? <CheckIcon className={classes.checkIcon}></CheckIcon> : null}
      </ButtonBase>
      <ButtonBase className={classes.imageContainer} onClick={() => _setValue(2)}>
        <img src={pdf} alt="" />
        <span>Assignment</span>
        {values.includes(2) ? <CheckIcon className={classes.checkIcon}></CheckIcon> : null}
      </ButtonBase>
      <ButtonBase className={classes.imageContainer} onClick={() => _setValue(3)}>
        <img src={ppt} alt="" />
        {values.includes(3) ? <CheckIcon className={classes.checkIcon}></CheckIcon> : null}
        <span>Today's ppt</span>
      </ButtonBase>
      <div>
        {values.length > 0 ? (
          <Fab variant="extended" className={classes.fab} onClick={handleClick}>
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
