import { Route } from "react-router-dom";
import Home from "./Components/homepage";
import Notes from "./Components/notes";
import { Routes } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import axios from "axios";

const App = ({ signOut }) => {
  const [user, setUser] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const getUserDetails = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  };

  useEffect(() => {
    getUserDetails();
  }, []);


  return (
    <div className="bg-blue-300 h-screen flex justify-center text-gray-700">
      <div className=" bg-gray-300 flex-column align-middle sm:w-7/12 ">
        <Routes>
          <Route path="/" element={<Home user={user} notes={userNotes} />} />
          <Route path="/add_notes" element={<Notes user={user} />} />
        </Routes>
        <button
          onClick={signOut}
          className="h-10 w-18 p-2 rounded border-solid border-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default withAuthenticator(App);
