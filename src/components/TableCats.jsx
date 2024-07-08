import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const TableCats = () => {
  const [cats, setCats] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:7265/Cat/GetCatNames")
      .then((response) => {
        setCats(response.data);
        setShouldUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [shouldUpdate]);

  const handleDelete = () => {
    setShouldUpdate(true);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4 mb-5">Cat List</h1>
      <div className="mb-6">
        <Link
          to="/cats/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Cat
        </Link>
      </div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/12 py-2">ID</th>
            <th className="w-3/12 py-2">Name</th>
            <th className="w-3/12 py-2">Color</th>
            <th className="w-3/12 py-2">Description</th>
            <th className="w-2/12">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {cats.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="py-2 px-4 text-center">{cat.id}</td>
              <td className="py-2 px-4 text-center">{cat.name}</td>
              <td className="py-2 px-4 text-center">{cat.color}</td>
              <td className="py-2 px-4 text-center">{cat.description}</td>
              <td className="py-2 px-4 text-center">
                <DeleteButton id={cat.id} onDelete={handleDelete} />

                <Link
                  to={`/cats/${cat.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCats;
