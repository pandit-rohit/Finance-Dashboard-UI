import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Transactions() {
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const [showForm, setShowForm] = useState(false);

  const { transactions, setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    desc: "",
    category: "",
    type: "income",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setShowForm(false);
    setForm({
      desc: "",
      category: "",
      type: "income",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-6 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Transactions
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and track your financial activity
          </p>
        </div>

        <span className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200 font-semibold shadow-sm">
          ● Live
        </span>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-2xl p-6 rounded-3xl shadow-lg border border-gray-200 mb-8 hover:shadow-xl transition-all">
        <Filters />
      </div>

      {/* Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        <div className="flex gap-3 flex-wrap">

          <button
            onClick={() => setSortBy("date")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
              ${
                sortBy === "date"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
          >
            📅 Date
          </button>

          <button
            onClick={() => setSortBy("amount")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
              ${
                sortBy === "amount"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
          >
             Amount
          </button>

          <button
            onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
          >
            {order === "asc" ? "⬆ Ascending" : "⬇ Descending"}
          </button>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
        >
          + Add Transaction
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-gray-200 animate-[fadeIn_0.3s_ease]"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Add Transaction
            </h2>

            <input
              name="desc"
              placeholder="Description"
              value={form.desc}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <input
              name="amount"
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}

      
      <div className="bg-white/80 backdrop-blur-2xl p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
        <TransactionTable sortBy={sortBy} order={order} />
      </div>
    </div>
  );
}