import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call , API connecting frontend and backend
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNzE4Mjc0Y2IwZWIxNzRmMmFjOThiIn0sImlhdCI6MTY5NjAxMjMyN30.JRUz7c1avJrltXRWZiaZgM4Zqp9GSJ03iuWXq9MokZc"
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNTYxMTdiOTI0N2M0NWEwNjg1NTc5In0sImlhdCI6MTY5NTkwMTA0MH0.63NRfG6v15fnlG-3YQh5Ds6C4dmXLVlJ0B5pwacGYzM"
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
      // converts a value to a json notation to send to backend
    });

    const note = await response.json();
    setNotes(notes.concat(note))
    // add to exiting note list 
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNTYxMTdiOTI0N2M0NWEwNjg1NTc5In0sImlhdCI6MTY5NTkwMTA0MH0.63NRfG6v15fnlG-3YQh5Ds6C4dmXLVlJ0B5pwacGYzM"
        'auth-token': localStorage.getItem('token')
      }
    });
    // const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    // filter out or delete the note 
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNTYxMTdiOTI0N2M0NWEwNjg1NTc5In0sImlhdCI6MTY5NTkwMTA0MH0.63NRfG6v15fnlG-3YQh5Ds6C4dmXLVlJ0B5pwacGYzM"
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;