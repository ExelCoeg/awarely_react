import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import LoadingOverlay from "@/Components/LoadingOverlay";
import AuthContext from "@/Context/AuthContext";
export const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (email !== confirmEmail) {
      alert("Email and Confirm Email do not match!");
      navigate("/signup");
      return;
    }
    try {
      console.log("Sign Up attempt with email:", email);
      const res = await api.post("/auth/register", {
        username,
        email,
        confirmEmail,
        password,
      });
      setUser(res.data.user);
      navigate("/home");
    } catch (err) {
      console.error("Sign Up failed: ", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-white-bone animate-fade-in-up">
      {loading && <LoadingOverlay />}
      <h1 className="mb-10 text-5xl font-bold ">Sign Up</h1>
      <form action="" className="mb-10 bg-white shadow-xl rounded-3xl w-110">
        <div className="flex flex-col p-15">
          <InputField
            label="Username"
            type="username"
            placeholder="Masukkan username"
            onChange={(e) => setUsername(e.target.value)}
          ></InputField>
          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan email"
            onChange={(e) => setEmail(e.target.value)}
            // className="mb-2"
          ></InputField>
          {/* <p className="mb-5 text-red-500">test</p> */}
          <InputField
            label="Confirm Email"
            type="email"
            placeholder="Konfirmasi email"
            onChange={(e) => setConfirmEmail(e.target.value)}
          ></InputField>
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputField>
          <p className="my-4 text-sm font-medium text-black">
            Sudah punya akun?{" "}
            <Link to="/signin" className="font-semibold underline text-primary">
              Masuk disini.
            </Link>
          </p>
          <Button
            className="w-full py-4 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary"
            text="Sign Up "
            variant="primary"
            arrow={false}
            onClick={handleSignUp}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
