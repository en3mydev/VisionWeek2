import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewCatForm() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.length > 16 || name.length < 1) {
      newErrors.name = "Name must be between 1 and 16 characters";
    }
    if (color.length > 16 || color.length < 1) {
      newErrors.color = "Color must be between 1 and 16 characters";
    }
    if (description.length > 16 || description.length < 1) {
      newErrors.description = "Description must be between 1 and 16 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const newCat = { name, color, description };

    axios
      .post("https://localhost:7163/Cat/AddCat", newCat)
      .then((response) => {
        console.log(response);
        setName("");
        setColor("");
        setDescription("");
        setErrors({});
        navigate("/cats");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md bg-red-100 text-red-700">
          <h2 className="text-xl font-bold mb-4">Errors</h2>
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">Add New Cat</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Cat
        </button>
      </form>
    </>
  );
}
