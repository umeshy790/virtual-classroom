import pdf from "../assets/pdf.png";
import excel from "../assets/excel.png";
import ppt from "../assets/ppt.png";

let initialDefualtState = {
  notes: [
    { icon: pdf, title: "Assignment", id: "notes_1" },
    { icon: excel, title: "Answers", id: "notes_2" },
    { icon: ppt, title: "Today's notes", id: "notes_3" }
  ],
  students: [
    { name: "Rohan", qa: 20, id: "001", accuracy: "90%", attendence: 6, rank: 1 },
    { name: "Aryan", qa: 17, id: "002", accuracy: "75%", attendence: 5, rank: 5 },
    { name: "Swati", qa: 19, id: "003", accuracy: "60%", attendence: 9, rank: 3 }
  ],
  questions: [
    { askedBy: "Rohan", value: "Is javascript statically typed language ?" },
    { askedBy: "Swati", value: "Why python is slow ?" },
    { askedBy: "Aryan", value: "Is working with graphql easy ?" }
  ],
  screenIndex: 0
};

const appReducer = (state = initialDefualtState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };

    case "CHANGE_SCREEN_INDEX":
      return {
        ...state,
        screenIndex: action.payload
      };

    default:
      return state;
  }
};

export default appReducer;
