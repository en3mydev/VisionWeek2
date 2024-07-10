import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-40 py-2 rounded-md">
      <nav className="rounded-xl flex justify-between text-4xl items-center bg-blue-400 px-10">
        <Link to="/" className="catcafe text-6xl">
          `
        </Link>
        <ul className="flex space-x-10 catcafe">
          <li>
            <Link
              to="/cats"
              className="px-4 border-2 bg-white rounded-xl border-blue-600 hover:bg-blue-200 duration-300"
            >
              All Cats
            </Link>
          </li>
          <li>
            <Link
              to="/cats/new"
              className="px-4 border-2 bg-white rounded-xl border-blue-600 hover:bg-blue-200 duration-300"
            >
              New Cat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
