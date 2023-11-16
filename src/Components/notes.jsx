import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backIcon from "../assets/arrow-left.png";
import axios from "axios";

const Notes = ({ user }) => {
  const userId = user.username;
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  const save = () => {
    console.log("loading...");
    axios
      .post("http://localhost:3000/notes/add", {
        uId: userId,
        noteTitle,
        note,
      })
      .then((response) => {
        if (response.data.message == "success") {
          alert("saved");
        }
      })
      .catch((err) => {
        console.log("err: " + err);
      })
      .finally(() => console.log(""));
  };
  return (
    <div className="w-full h-full p-3">
      <div className="flex justify-between">
        <NavLink to="/" className="">
          <img
            src={backIcon}
            height="10px"
            width="30px"
            className="hover:bg-slate-400"
          />
        </NavLink>
        <button
          onClick={() => save()}
          className="py-2 px-3 mb-2 float-right bg-blue-300 rounded-xl"
        >
          Save
        </button>
      </div>
      <input
        type="text"
        placeholder="Heading"
        className="w-full rounded text-2xl bg-gray-100 mb-3 p-2"
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Add your notes here"
        className="w-full h-5/6 text-lg rounded bg-gray-100 p-2"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
    </div>
  );
};

export default Notes;
