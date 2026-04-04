import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Filters() {
  const { search, setSearch, type, setType, category, setCategory } =
    useContext(AppContext);

  return (
    <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-gray-200 mb-4 flex flex-col md:flex-row gap-4 items-center">

      {/* Search */}
      <div className="relative w-full">
        <input
          value={search}
          placeholder="Search transactions..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white/80 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
          onChange={(e) => setSearch(e.target.value || "")}
        />
        {/* Icon */}
        <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
          🔍
        </span>
      </div>

      {/* Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2.5 rounded-xl border border-gray-300 bg-white/80 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm hover:bg-gray-50 transition-all duration-200"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2.5 rounded-xl border border-gray-300 bg-white/80 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm hover:bg-gray-50 transition-all duration-200"
      >
        <option value="all">All Categories</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="salary">Salary</option>
      </select>

    </div>
  );
}