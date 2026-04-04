import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      <Card title="Total Balance" value={balance} type="balance" />
      <Card title="Total Income" value={income} type="income" />
      <Card title="Total Expenses" value={expense} type="expense" />
    </div>
  );
}

function Card({ title, value, type }) {
  const styles = {
    balance: {
      bg: "bg-gradient-to-br from-indigo-50 to-blue-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
      
    },
    income: {
      bg: "bg-gradient-to-br from-emerald-50 to-green-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
      
    },
    expense: {
      bg: "bg-gradient-to-br from-rose-50 to-red-100",
      text: "text-rose-500",
      border: "border-rose-200",
      
    },
  };

  return (
    <div
      className={`p-5 rounded-2xl border ${styles[type].border} ${styles[type].bg}
      shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Header with Icon */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-700">
          {title}
        </p>
        <span className="text-xl">{styles[type].icon}</span>
      </div>

      {/* Value */}
      <h2
        className={`text-3xl font-extrabold tracking-tight ${styles[type].text}`}
      >
        ₹{value}
      </h2>

      {/* Footer */}
      <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
        Updated just now
      </div>
    </div>
  );
}