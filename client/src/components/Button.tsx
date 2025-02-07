import React, { ReactNode } from "react";

type ButtonProps = {
  text?: string | undefined;
  content?: ReactNode | undefined;
  onClick: () => void;
  customStyles?: string;
};

export const Button: React.FC<ButtonProps> = ({ content, onClick, customStyles }) => {
  return (
    <div className="flex items-center justify-center gap-x-6 rounded-xl">
      <a href="" className="rounded-3xl w-28 bg-sky-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
        <button
          onClick={onClick}
          className={`flex items-center justify-center p-0.5 text-lg w-full ${customStyles}`}>
          {content && React.isValidElement(content) ? content : content?.toString() || null}
        </button>
      </a>
    </div>
  );
};


export const AuthButton: React.FC<ButtonProps> = ({ text, onClick, customStyles }) => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/" className="text-sm/6 font-semibold text-gray-900">
        <button
          onClick={onClick}
          className={`p-2 gap-5 ${customStyles}`}>
          {text}
          <span className="ml-2" aria-hidden="true">&rarr;</span>
        </button>
      </a>
    </div>
  );
};
