import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { role, setRole } = useContext(AppContext);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
      pathname === path
        ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
    }`;

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">

      {/* Logo / Title */}
      <h1 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
        💳 Finance Dashboard
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>
        <Link to="/transactions" className={linkClass("/transactions")}>
          Transactions
        </Link>
        <Link to="/insights" className={linkClass("/insights")}>
          Insights
        </Link>
      </div>

      {/* Role Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 font-medium hidden sm:block">
          Role:
        </span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

    </div>
  );
}