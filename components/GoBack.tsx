import Link from "next/link";

const Goback = () => {
  return (
    <div className=" p-6 fixed top-0 left-0 w-full">
      <Link href={"/"}>
        <img src="/icons/left.svg" alt="" />
      </Link>
      {/* <div className="text-center text-[22px] py-2 font-bold  w-full ">
        Auditoriums
      </div> */}
    </div>
  );
};
export default Goback;
