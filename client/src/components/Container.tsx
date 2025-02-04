import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  customStyles?: string | "";
};

export const ContainerLayout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[90rem] h-[58rem] bg-white rounded-3xl shadow-lg mx-auto
        xl:max-w-[80rem] xl:h-[50rem]
        lg:max-w-[60rem] lg:h-[45rem]
        md:max-w-[50rem] md:h-[40rem]
        sm:max-w-[40rem] sm:h-[35rem]
        transition-all duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export const Container: React.FC<ContainerProps> = ({ children, customStyles }) => {
  return (
    <div className={`flex justify-center items-center p-5 ${customStyles}`}>
      {children}
    </div>
  );
};
