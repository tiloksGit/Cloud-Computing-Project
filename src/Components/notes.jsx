import React from "react";

const Notes = () => {
  const save = () => {};
  return (
    <div className="w-full h-full p-3">
      <button onClick={() => save()} className="py-2 px-3 mb-2 float-right bg-blue-300 rounded-xl">Save</button>
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
