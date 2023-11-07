import React from "react";

const Notes = () => {
  return (
    <div className="w-full h-full">
      <input
        type="text"
        placeholder="Heading"
        className="w-full rounded text-2xl bg-gray-100 mb-3 p-2"
      />
      <textarea
        placeholder="Add your notes here"
        className="w-full h-5/6 text-lg rounded bg-gray-100 p-2"
      />
    </div>
  );
};

export default Notes;
