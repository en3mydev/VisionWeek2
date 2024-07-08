import React from "react";
import axios from "axios";

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`https://localhost:7265/Cat/DeleteCat?id=${id}`)
      .then((response) => {
        console.log(response);
        onDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
