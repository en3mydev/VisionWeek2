import React from "react";

export default function Footer() {
  return (
    <footer className="catcafe bg-blue-500 py-4">
      <div className="flex justify-center">
        <div className="text-7xl">
          <h1>
            ` <span className="text-6xl">Cat Café</span>
          </h1>
          <h2 className="text-4xl">
            The best place to find your new feline friend
          </h2>
          <a
            href="mailto:danielgheorghedev@gmail.com"
            className="text-3xl bg-white border-2 rounded-xl border-blue-600 px-4 py-2 hover:bg-blue-200 duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <p className="text-center">© 2024 Cat Café</p>
    </footer>
  );
}
