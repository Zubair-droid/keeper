import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notesArr, addNotesArr] = useState([])
  function handleClick(notes) {
    addNotesArr(prevValue => {
      return [...prevValue,
        notes
      ]
    })
  }

  // Two Ways of implementing
  // function deleteNotes(id) {
  //   addNotesArr(notesArr.filter((notes, index) => {
  //     return index !== id;
  //   }));
  // }

  function deleteNotes(id) {
    addNotesArr((prevValue)=> prevValue.filter((notes, index) => {
      return index !== id;
    }));
  }




  return (
    <div>
      <Header />
      <CreateArea onClicked={handleClick} />
      {notesArr.map((notes, index) => <Note key={index} id={index} title={notes.title} content={notes.content} onClicked={deleteNotes} />)}

      <Footer />
    </div>
  );
}
export default App;
