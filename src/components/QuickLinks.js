import React, { useState } from "react";
import useStore from "../store/store";
import ResponsiveTable from "./ResponsiveTable";

const QuickLinks = () => {
  const { quickLinks, addQuickLink, removeQuickLink } = useStore();
  const [link, setLink] = useState("");
  const headers = ['Action','Link'];

  const handleAddLink = () => {
    if (link) {
      addQuickLink(link);
      setLink("");
    }
  };

  console.log("DATA : ", quickLinks)

  return (
    <>
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Add a quick link"
        className="p-2 border rounded text-gray-800"
      />
      <button
        onClick={handleAddLink}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>
      </div>
      
      {/* Reuseable Table ------ */}
      <div className="flex items-center justify-center p-4">
      <ResponsiveTable
        headers={headers}
        rows={quickLinks}
        onAction={removeQuickLink}
      />
    </div>
    </>
  );
};

export default QuickLinks;
