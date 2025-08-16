import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      toast.success("Logged in!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form className="card bg-base-100 p-8 max-w-md w-full" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/register" className="link link-primary">Register</Link>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
