import React, { FC } from "react";

interface Props {
  label: string;
  onClick: () => void;
}
const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#D1A164] w-full h-14 cursor-pointer flex justify-center items-center rounded-xl text-sm font-bold text-black"
    >
      {label}
    </button>
  );
};

export default Button;
