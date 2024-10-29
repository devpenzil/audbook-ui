import BookSummary from "@/components/BookSummary";
import Button from "@/components/Button";
import Goback from "@/components/GoBack";
import React from "react";

const Checkout = () => {
  return (
    <div className="font-Montserrat">
      <Goback />
      <div className="p-6 mt-10">
        <BookSummary />
        <div className="text-xs text-center text-[#666666] mt-3 mb-6">
          Coupons for non discount offers will be <br /> available in booking
          history page after booking{" "}
        </div>
        <Button label="Book Now $45000" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Checkout;
