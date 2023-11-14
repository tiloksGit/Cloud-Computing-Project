import React from "react";
import img from "../assets/icons8-plus-48.png";
import { NavLink } from "react-router-dom";

const Home = () => {
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
      <div className="text-center">
        Integrating Amazon AWS for safekeeping of all your notes
      </div>
      <div className="flex justify-center p-"></div>
    </>
  );
};

export default Home;
