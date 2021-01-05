import React, { useContext, useEffect } from "react";
import "./note.css";

//import context
import { notesContext } from "../context";

function Note({ notes, i }) {
  //context
  let { deleteNote, findNote } = useContext(notesContext);

  //Handle note delete
  const handleDelete = id => {
    deleteNote(id);
  };

  return (
    <div className="note container">
      <div>
        {notes.i + 1} . {notes.note.text}
      </div>
      <div className="note__actionIcons">
        <i
          className="fa fa-pencil-square-o"
          aria-hidden="true"
          onClick={() => findNote(notes.note.id)}
        ></i>
        <i
          className="fa fa-trash"
          aria-hidden="true"
          onClick={() => handleDelete(notes.note.id)}
        ></i>
      </div>
    </div>
  );
}

export default Note;
