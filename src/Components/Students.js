import React from "react";
import { useSelector } from "react-redux";
import Student from "./Student";

function Students() {
  const students = useSelector(state => state.students);

  return (
    <div style={{ width: "100vw" }}>
      {students.map(student => (
        <Student key={student.id} student={student}></Student>
      ))}
    </div>
  );
}

export default Students;
