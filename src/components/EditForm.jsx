import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const [cat, setCat] = useState({
    name: "",
    color: "",
    description: "",
  });
  const [isCat, setIsCat] = useState(false);

  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (cat.name.length > 16 || cat.name.length < 1) {
      newErrors.name = "Name must be between 1 and 16 characters";
    }
    if (cat.color.length > 16 || cat.color.length < 1) {
      newErrors.color = "Color must be between 1 and 16 characters";
    }
    if (cat.description.length > 16 || cat.description.length < 1) {
      newErrors.description = "Description must be between 1 and 16 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    axios
      .get(`https://localhost:7265/Cat/${id}`)
      .then((response) => {
        setCat(response.data);
        setIsCat(true);
      })
      .catch((error) => {
        console.log(error);
        setIsCat(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    axios
      .put(`https://localhost:7265/Cat/UpdateCat?id=${id}`, cat)
      .then((response) => {
        console.log(response);
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
      {isCat ? (
        <form
          className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Edit Cat</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={cat.name}
              onChange={(e) => setCat({ ...cat, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 font-bold">
              Color
            </label>
            <input
              type="text"
              id="color"
              value={cat.color}
              onChange={(e) => setCat({ ...cat, color: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold"
            >
              Description
            </label>
            <textarea
              id="description"
              value={cat.description}
              onChange={(e) => setCat({ ...cat, description: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Update Cat
          </button>
        </form>
      ) : (
        <div className="text-center mt-10 text-2xl font-bold">
          Cat not found
        </div>
      )}
    </>
  );
}
