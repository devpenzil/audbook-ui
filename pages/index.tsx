import Button from "@/components/Button";
import React from "react";

function Login() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col font-Montserrat">
      <div className="w-[390px] sm-w-full px-8">
        <div className="font-bold text-[22px]">AudBook</div>
        <div className="text-sm text-[#757873] my-1">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the{" "}
        </div>
        <Button label="Login" onClick={() => {}} />
        <div className="text-center pt-2">
          <a href="#" className="text-sm  my-1 text-center font-normal">
            New User ? Register now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
