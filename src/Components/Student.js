import React from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardHeader, IconButton, CardContent } from "@material-ui/core";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";

const useStyles = makeStyles({
  card: {
    margin: "12px",
    color: "#202124",
    boxShadow: "none",
    border: "1px solid #0277bd"
  },
  avatar: {
    backgroundColor: "#0277bd"
  },
  questionIcon: {
    fontSize: "2.2rem",
    color: "#ffa500f0"
  },

  performanceIcon: {
    fontSize: "2.4rem",
    color: "#008000c9"
  },
  cardContent: {
    display: "flex",
    background: "#21bbf317"
  },
  section: {
    display: "flex",
    "&:last-child": {
      marginLeft: "auto"
    },
    "& div": {
      flex: 1,
      marginLeft: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    "& span": {
      color: "rgba(0, 0, 0, 0.72)",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em"
    },

    "& span:last-child": {
     
      fontSize: "0.875rem"
    }
  }
});

function Student(props) {
  const classes = useStyles();
  const { student } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {student.name.substring(0, 1)}
          </Avatar>
        }
        title={student.name}
        subheader="September 14, 2016"
        action={
          <IconButton aria-label="settings">
            <ScreenShareIcon />
          </IconButton>
        }
      ></CardHeader>

      <CardContent className={classes.cardContent}>
        <section className={classes.section}>
          <CheckCircleOutlineIcon className={classes.questionIcon} />
          <div>
            <span>Quest. attempted</span>
            <span>{student.qa}</span>
          </div>
        </section>
        <section className={classes.section}>
          <GpsFixedIcon className={classes.performanceIcon} />
          <div>
            <span>Accuracy</span>
            <span>{student.accuracy}</span>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

export default Student;
