import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center relative p-6">
      <div className="cursor-pointer z-10">
        <img src="/icons/hamburger.svg" alt="" />
      </div>
      <div className="text-[22px] font-bold text-black  text-center z-0">
        AudBook
      </div>
      <div className="flex gap-2">
        <img src="/icons/favorite_menu.svg" alt="" />
        <img src="/icons/bell.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
