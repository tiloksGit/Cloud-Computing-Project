import React, { useState, useEffect } from "react";
import img from "../assets/icons8-plus-48.png";
import trashIcon from "../assets/bin.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = ({ user, notes }) => {
  const [userNotes, setUserNotes] = useState("");

  useEffect(() => {
    const getNotes = async () => {
      axios
        .post("http://localhost:3000/notes/get", {
          uId: user.username,
        })
        .then((response) => {
          if (response.data.message == "success") {
            setUserNotes(response.data.response.Items);
            console.log(response.data.response.Items);
          }
        });
    };
    getNotes();
  }, []);

  const handleDelete = async (noteId) => {
    console.log(noteId);
    axios
      .post("http://localhost:3000/notes/delete", { noteId: noteId })
      .then((response) => {
        if (response.data.message == "success") {
          alert("deleted");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="text-5xl p-5 text-center font-semibold text-blue-400 bg-gray-100 rounded-2xl m-2">
        Keep Notes
      </div>
      <div className="flex-column p-8 ">
        <div className="flex justify-between p-2 px-3 bg-blue-300 text-white text-lg rounded-lg">
          <section className="underline">Add your notes here</section>
          <NavLink to="/add_notes" className="flex">
            <img src={img} height="20px" width="30px" className="ml-2" />
          </NavLink>
        </div>
      </div>
      {userNotes ? (
        userNotes.map((note) => (
          <div key={note.noteId}>
            <div className="flex justify-between p-2 bg-blue-300 mx-8 my-2 rounded-lg">
              <section className="text-lg ">
                {note.noteTitle}: {note.note.slice(0, 10)}....
              </section>
              <button onClick={() => handleDelete(note.noteId)}>
                <img src={trashIcon} height="10px" width="20px" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <> No note created yet</>
      )}
      <div className="text-center">
        Integrating Amazon AWS for safekeeping of all your notes
      </div>
    </>
  );
};

export default Home;
