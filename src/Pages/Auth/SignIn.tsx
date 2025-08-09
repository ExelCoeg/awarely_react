import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../../api/axios";
import LoadingOverlay from "@/Components/LoadingOverlay";
import AuthContext from "@/Context/AuthContext";
import ErrorMessage from "@/Components/ErrorMessage";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, refreshUser } = useContext(AuthContext);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Login attempt with email:", email);
      const res = await api.post("/auth/login", { email, password });
      setUser(res.data.user);
      refreshUser();
      navigate("/home", {
        state: {
          showPopUp: true,
        },
      });
    } catch (err) {
      setError("Login Failed!");
      console.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-white-bone animate-fade-in-up">
      {loading && <LoadingOverlay />}
      <h1 className="mb-10 text-5xl font-bold ">Sign In</h1>
      <form action="" className="mb-10 bg-white shadow-xl rounded-3xl w-110">
        <div className="flex flex-col p-10 my-10">
          {error && <ErrorMessage error={error} />}
          <InputField
            label="Email"
            type="email"
            placeholder="Masukkan email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          ></InputField>
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            labelColor={""}
          ></InputField>
          <Link className="my-4 font-medium text-black" to="/home">
            Lupa Password?
          </Link>
          <Button
            className="w-full py-4 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary"
            text="Sign In"
            variant="primary"
            arrow={false}
            onClick={handleLogin}
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
