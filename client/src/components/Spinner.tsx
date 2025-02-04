import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center mt-20">
     <div
        className="inline-block h-8 w-8 border-sky-300 animate-spin rounded-full border-4 border-solid border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
