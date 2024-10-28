import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Login() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col font-Montserrat">
      <div className="w-[390px] sm-w-full px-8">
        <div className="font-bold text-[22px]">AudBook</div>
        <div className="text-sm text-[#757873] my-1 mb-4">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the{" "}
        </div>
        <Input placeHolder="Email" iconPath="/icons/mail.svg" type="email" />
        <Input
          placeHolder="Password"
          iconPath="/icons/security.svg"
          type="password"
        />
        <div className="pt-6">
          <Button
            label="Login"
            onClick={() => {
              router.push("/home");
            }}
          />
        </div>
        <div className="text-center pt-2">
          <Link
            href="/register"
            className="text-sm  my-1 text-center font-normal"
          >
            New User ? Register now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
