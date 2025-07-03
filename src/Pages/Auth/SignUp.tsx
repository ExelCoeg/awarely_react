import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-white-bone animate-fade-in-up">
      <h1 className="mb-10 text-5xl font-bold ">Sign Up</h1>
      <form action="" className="mb-10 bg-white shadow-xl rounded-3xl w-110">
        <div className="flex flex-col p-15">
          <InputField
            label="Username"
            type="username"
            placeholder="Masukkan username"
          ></InputField>
          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan email"
          ></InputField>
          <InputField
            label="Confirm Email"
            type="email"
            placeholder="Konfirmasi email"
          ></InputField>
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
          ></InputField>
          <p className="my-4 text-sm font-medium text-black">
            Sudah punya akun?{" "}
            <Link to="/signin" className="font-semibold underline text-primary">
              Masuk disini.
            </Link>
          </p>
          <Button
            className="w-full py-4 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary"
            text="Sign In"
            variant="primary"
            arrow={false}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
