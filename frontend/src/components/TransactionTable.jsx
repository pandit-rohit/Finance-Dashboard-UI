import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionTable() {
  const {
    transactions = [],
    role,
    setTransactions,
    search = "",
    type = "all",
    category = "all",
  } = useContext(AppContext);

  const deleteItem = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  
  const filteredTransactions = transactions.filter((t) => {
    const desc = t.desc ? t.desc.toLowerCase() : "";
    const cat = t.category ? t.category.toLowerCase() : "";

    const matchesSearch = desc.includes(search.toLowerCase());

    const matchesType =
      type === "all" || t.type === type;

    const matchesCategory =
      category === "all" || cat === category;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-md">
      <table className="w-full text-sm text-left text-gray-700">
        
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Description</th>
            <th className="px-5 py-3">Category</th>
            <th className="px-5 py-3">Type</th>
            <th className="px-5 py-3">Amount</th>
            {role === "admin" && <th className="px-5 py-3">Action</th>}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((t, index) => (
              <tr
                key={t.id}
                className={`border-b transition-all duration-200 hover:bg-blue-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-5 py-3 font-medium text-gray-800">
                  {t.date}
                </td>

                <td className="px-5 py-3 text-gray-600">
                  {t.desc}
                </td>

                <td className="px-5 py-3">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600">
                    {t.category}
                  </span>
                </td>

                <td
                  className={`px-5 py-3 font-semibold ${
                    t.type === "income"
                      ? "text-emerald-600"
                      : "text-rose-500"
                  }`}
                >
                  {t.type}
                </td>

                <td className="px-5 py-3 font-semibold text-gray-900">
                  ₹{t.amount}
                </td>

                {role === "admin" && (
                  <td className="px-5 py-3">
                    <button
                      onClick={() => deleteItem(t.id)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={role === "admin" ? 6 : 5}
                className="text-center py-10 text-gray-500"
              >
                🚫 No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}