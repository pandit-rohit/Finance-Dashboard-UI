import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  const topCategory = Object.values(
    expenses.reduce((acc, t) => {
      acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
      acc[t.category].value += t.amount;
      return acc;
    }, {})
  ).sort((a,b)=>b.value-a.value)[0];

  return (
    <div className="grid md:grid-cols-2 gap-4 p-6">
      <div className="bg-white p-4 rounded shadow">
        <h2>Highest Spending</h2>
        <h1 className="text-xl font-bold">{topCategory?.name}</h1>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2>Savings Rate</h2>
        <h1 className="text-xl font-bold">100%</h1>
      </div>
    </div>
  );
}