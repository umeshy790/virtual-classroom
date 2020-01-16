let initialDefualtState = {
  questions: [],
  students: [
    { name: "Rohan", qa: 20, id: "001", accuracy: "90%" },
    { name: "Aryan", qa: 17, id: "002", accuracy: "75%" },
    { name: "Swati", qa: 19, id: "003", accuracy: "60%" }
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
