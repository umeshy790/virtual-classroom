import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    color: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  block: {
    display: "flex",
    flexDirection: "column",
    "& span": {
      fontSize: "1.6rem"
    },
    "& span:last-child": {
      fontSize: "1.2rem"
    },
    "&:nth-child(2)": {
      marginTop: "26px"
    }
  },
  button: {
    marginTop: "26px"
  }
});

function StartClass(props) {
  const { history } = props;
  const classes = useStyles();
  const students = useSelector(state => state.students.length);

  /**
   * routing to classroom component
   */
  const handleClick = () => history.push("/class");

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.block}>
          <span>Duration</span>
          <span>1 hour</span>
        </div>

        <div className={classes.block}>
          <span>Students</span>
          <span>{students}</span>
        </div>

        <Button variant="contained" color="primary" className={classes.button} endIcon={<ArrowForwardIcon />} onClick={handleClick}>
          Start class
        </Button>
      </div>
    </div>
  );
}

export default StartClass;
