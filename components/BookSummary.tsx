import React from "react";

const BookSummary = () => {
  return (
    <div>
      <div className="text-lg font-semibold font-Montserrat">Book Summary</div>
      <div className="bg-white shadow p-4 rounded-xl mt-2 text-sm ">
        <div className="flex justify-between">
          <div className="text-[#666666]">Name</div>
          <div>Al Saj Convention Center</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-[#666666]">Date</div>
          <div>15 June 2024</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-[#666666]">Guests</div>
          <div>200 Guests</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-[#666666]">Function</div>
          <div>Haldi</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-[#666666]">Amount</div>
          <div>$50000</div>
        </div>
        <div className="flex justify-between align-baseline flex-row mt-2">
          <div className="text-[#666666]">
            <div>Discount</div>
            <div className="ml-3">-Flat 20% off</div>
          </div>
          <div>- $500</div>
        </div>
      </div>
    </div>
  );
};

export default BookSummary;
