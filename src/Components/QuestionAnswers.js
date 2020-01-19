import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/styles";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelActions, Button, ExpansionPanelDetails, Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100vw",
      padding: "12px",
      boxSizing: "border-box"
    },
    container: {
      background: "#9e9e9e30",
      position: "relative",
      boxShadow: "none",
      "&:not(:last-child)": {
        marginBottom: "12px"
      }
    },
    nameAndQuestion: {
      width: "80vw",
      display: "flex",
      flexDirection: "column"
    },
    questionBy: {
      fontSize: "0.875em",
      color: theme.palette.primary.main
    },
    question: {
      lineHeight: "20px",
      fontSize: "0.75em",
      color: " #202124"
    }
  })
);

function QuestionAnsers() {
  const classes = useStyles();
  const questions = useSelector(state => state.questions);

  return (
    <div className={classes.root}>
      {questions.map((question, index) => (
        <Question key={`${index}`} classes={classes} question={question}></Question>
      ))}
    </div>
  );
}

function Question(props) {
  const { question, classes } = props;

  return (
    <div className={classes.container}>
      <ExpansionPanel className={classes.container}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />} aria-controls="questions-answers" id="questions-answers-header">
          <div className={classes.nameAndQuestion}>
            <span className={classes.questionBy}>{question.askedBy}</span>
            <span className={classes.question}>{question.value}</span>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TextField id="outline-answer" label="Answer" type="text" variant="outlined" />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

export default QuestionAnsers;
