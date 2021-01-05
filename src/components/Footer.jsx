import React, { useState, useContext, useEffect } from "react";
import "./footer.css";

//Context
import { notesContext } from "../context";

function Footer() {
  const {
    notes,
    setNotes,
    itemToEdit,
    saveEditedNote,
    setItemToEdit
  } = useContext(notesContext);

  //Local states and functions
  const [note, setNote] = useState("");

  //Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (itemToEdit === null) {
      const newId = notes.length === 0 ? 0 : notes[notes.length - 1].id + 1;
      setNotes(prevNotes => [...prevNotes, { id: newId, text: note }]);
      setNote("");
    } else {
      console.log(note, itemToEdit.id);
      saveEditedNote(itemToEdit.id, note);
      setItemToEdit(null);
    }
  };

  //Handle change
  const handleNewNoteChange = e => {
    setNote(e.target.value);
  };

  //Use effect
  useEffect(() => {
    if (itemToEdit !== null) {
      setNote(itemToEdit.text);
    } else {
      setNote("");
    }
  }, [itemToEdit]);

  return (
    <div className={itemToEdit ? "footer__editMode " : "footer container"}>
      <form onSubmit={handleSubmit} className="footer__form form-inline">
        <input
          type=""
          name="note"
          value={note}
          onChange={handleNewNoteChange}
          required
          className="form-control "
        />
        <button className="btn" type="submit">
          {itemToEdit ? " save" : "Add notes"}
        </button>
      </form>
    </div>
  );
}

export default Footer;
