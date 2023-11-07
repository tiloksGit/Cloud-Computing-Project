import { Route } from "react-router-dom";
import Home from "./Components/homepage";
import Notes from "./Components/notes";
import { Routes } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="bg-blue-300 h-screen flex justify-center text-gray-700">
      <div className="bg-gray-300 w-7/12 flex-column align-middle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
