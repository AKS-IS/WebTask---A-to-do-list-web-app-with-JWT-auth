import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/register", { username, password });
      toast.success("Registered! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form className="card bg-base-100 p-8 max-w-md w-full" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          className="input input-bordered mb-4 w-full"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="input input-bordered mb-4 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="link link-primary">Login</Link>
        </div>
      </form>
    </div>
  );
};
export default RegisterPage;
