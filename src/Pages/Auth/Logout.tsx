import LoadingOverlay from "@/Components/LoadingOverlay";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <LoadingOverlay />;
};

export default Logout;
