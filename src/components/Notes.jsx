import React, { useContext, useEffect } from "react";
import "./notes.css";

//component
import Note from "./Note";

//Consume context
import { notesContext } from "../context";

function Notes() {
  const { notes } = useContext(notesContext);

  //Use effect

  return (
    <div className="notes container">
      {notes.length === 0
        ? "No Tasks"
        : notes.map((note, i) => {
            return <Note notes={{ note, i }} key={note.id} />;
          })}
    </div>
  );
}

export default Notes;
