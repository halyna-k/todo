import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-4 mt-8 bottom-0 left-0 w-full">
      <div className="max-w-4xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
