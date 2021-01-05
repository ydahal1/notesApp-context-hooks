import React, { useContext } from "react";
import "./header.css";

//import context
import { notesContext } from "../context";

function Header() {
  const { notes } = useContext(notesContext);

  return (
    <div className="header">
      <h1 className="header__logo">Notes Application</h1>
      <h2 className="header__notesCount">
        <strong>Total Notes: {notes.length}</strong>
      </h2>
    </div>
  );
}

export default Header;
