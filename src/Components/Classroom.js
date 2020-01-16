import React from "react";
import "./Classroom.css";
import TeacherVedio from "./TeacherVedio/TeacherVedio";
import InteractionOverlay from "./InteractionOverlay.js";

function Classroom() {
  return (
    <div className="container">
      <TeacherVedio />
      <InteractionOverlay />
    </div>
  );
}

export default Classroom;
