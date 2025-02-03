import React, { ReactNode } from "react";

type ButtonProps = {
  text?: string | undefined;
  content?: ReactNode | undefined;
  onClick: () => void;
  customStyles?: string;
};

export const AuthButton: React.FC<ButtonProps> = ({ text, onClick, customStyles }) => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm/6 font-semibold text-gray-900">
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
