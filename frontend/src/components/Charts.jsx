import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function BalanceCard() {
  const { transactions } = useContext(AppContext);

  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expenses += t.amount;
    }
  });

  const balance = income - expenses;

  const total = income + expenses || 1;

  const incomePercent = (income / total) * 100;
  const expensePercent = (expenses / total) * 100;

  return (
    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Balance Trend
        </h2>

        <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium">
          Apr 2026
        </span>
      </div>

      {/* Balance */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Current Balance</p>
        <h3
          className={`text-2xl font-bold ${
            balance >= 0 ? "text-emerald-600" : "text-rose-500"
          }`}
        >
          ₹{balance.toFixed(2)}
        </h3>
      </div>

      {/* Income */}
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
          <span>Income</span>
          <span className="text-emerald-600">₹{income.toFixed(2)}</span>
        </div>

        <div className="w-full bg-gray-200/70 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-400 to-green-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${incomePercent}%` }}
          />
        </div>
      </div>

      {/* Expenses */}
      <div>
        <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
          <span>Expenses</span>
          <span className="text-rose-500">₹{expenses.toFixed(2)}</span>
        </div>

        <div className="w-full bg-gray-200/70 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-rose-400 to-red-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${expensePercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}