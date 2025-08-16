import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/login");
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold">
            WebTask
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/about" className="text-sm">
              About
            </Link>
            <Link to="/contact" className="text-sm">
              Contact
            </Link>
            {username ? (
              <>
                <Link to="/dashboard" className="text-sm">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded bg-red-500 px-3 py-1 text-sm text-white transition-all hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="rounded bg-blue-500 px-3 py-1 text-sm text-white transition-all hover:bg-blue-600"
              >
                Login
              </Link>
            )}
            <Link
              to="/create"
              className="flex items-center gap-1 rounded bg-green-500 px-3 py-1 text-sm text-white transition-all hover:bg-green-600"
            >
              <PlusIcon className="h-4 w-4" />
              New Post
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;