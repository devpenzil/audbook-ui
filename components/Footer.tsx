import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D1A164] p-6 w-full">
      <div className="text-[22px] font-semibold mb-4">Contact us</div>
      <div>
        <div className="flex flex-row items-start gap-2">
          <img src="/icons/location.svg" alt="" />
          Address kfndkjn <br /> nkdjfkjfkhfkjhfkd
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center gap-2">
          <img src="/icons/phone.svg" alt="" />
          +91 1234554667
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center gap-2 mt-2">
          <img src="/icons/mail.svg" alt="" />
          dummymail@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
