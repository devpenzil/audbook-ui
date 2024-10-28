import Button from "@/components/Button";
import Goback from "@/components/GoBack";
import Input from "@/components/Input";

const Register = () => {
  return (
    <>
      <Goback />
      <div className="min-h-screen w-full flex justify-center items-center flex-col font-Montserrat">
        <div className="w-[390px] sm-w-full px-8">
          <div className="font-bold text-[22px]">Welcome</div>
          <div className="text-sm text-[#757873] my-1">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the{" "}
          </div>
          <Input placeHolder="Email" iconPath="/icons/mail.svg" type="email" />
          <Input
            placeHolder="Password"
            iconPath="/icons/security.svg"
            type="password"
          />
          <Input
            placeHolder="Confirm Password"
            iconPath="/icons/security.svg"
            type="password"
          />
          <Input
            placeHolder="Full Name"
            iconPath="/icons/person_outline.svg"
            type="text"
          />
          <Input
            placeHolder="Phone Number"
            iconPath="/icons/person_outline.svg"
            type="tel"
          />

          <div className="pt-6">
            <Button label="Register" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
