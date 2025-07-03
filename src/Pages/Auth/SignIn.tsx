import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-white-bone animate-fade-in-up">
      <h1 className="mb-10 text-5xl font-bold ">Sign Up</h1>
      <form action="" className="mb-10 bg-white shadow-xl rounded-3xl w-110">
        <div className="flex flex-col p-10 my-10">
          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan email"
          ></InputField>
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
          ></InputField>
          <Link className="my-4 font-medium text-black" to="/home">
            Lupa Password?
          </Link>
          <Button
            className="w-full py-4 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary"
            text="Sign In"
            variant="primary"
            arrow={false}
          ></Button>
        </div>
      </form>
      <p>
        Pengguna baru?{" "}
        <Link to="/signup" className="font-semibold underline text-primary">
          Daftar disini.
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
