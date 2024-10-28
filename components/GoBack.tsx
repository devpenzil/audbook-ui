import Link from "next/link";

const Goback = () => {
  return (
    <div className="py-2 px-6 fixed top-0 left-0">
      <Link href={"/"}>
        <img src="/icons/left.svg" alt="" />
      </Link>
    </div>
  );
};
export default Goback;
