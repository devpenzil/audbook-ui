import React, { FC } from "react";

interface Props {
  placeHolder: string;
  iconPath?: string;
  type: string;
}

const Input: FC<Props> = ({ placeHolder, iconPath, type }) => {
  return (
    <div className="bg-white w-full h-14 rounded-xl flex justify-start items-center p-4 my-2 ">
      <img src={iconPath} />
      <input
        placeholder={placeHolder}
        className="outline-none ml-2"
        type={type}
      />
    </div>
  );
};

export default Input;
