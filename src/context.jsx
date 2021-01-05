import React, { useState, createContext } from "react";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  //Initial state and functionto update the state
  const [notes, setNotes] = useState([
    { id: 0, text: "Wash Car" },
    { id: 1, text: "Do groceries" },
    { id: 3, text: "Learn react" }
  ]);
  const [itemToEdit, setItemToEdit] = useState(null);

  //Delete Note
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  //Find data about item to edit
  const findNote = id => {
    const item = notes.find(note => (note.id === id ? note.text : null));
    setItemToEdit(item);
  };

  //Save the edited note
  const saveEditedNote = (id, text) => {
    const editedTask = notes.map(note =>
      note.id === id ? { text, id } : note
    );
    setNotes(editedTask);
  };

  return (
    <notesContext.Provider
      value={{
        notes,
        setNotes,
        deleteNote,
        findNote,
        itemToEdit,
        saveEditedNote,
        setItemToEdit,
        setItemToEdit
      }}
    >
      {children}
    </notesContext.Provider>
  );
};
