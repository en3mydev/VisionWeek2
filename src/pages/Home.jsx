import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col catcafe items-center justify-center text-5xl bg-white min-h-screen">
      <h1 className="">
        Welcome to our <span className="text-yellow-500">cats</span> page{" "}
        <span className="text-yellow-500">^</span>
      </h1>
      <p>
        See our cats -&gt;{" "}
        <Link
          className="text-blue-500 hover:text-blue-800 transition duration-300"
          to="/cats"
        >
          `
        </Link>{" "}
        &lt;-
      </p>
    </main>
  );
}
