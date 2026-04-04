import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-100 px-6 py-8">
      
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <span className="text-sm px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 font-medium">
          Overview
        </span>
      </div>

      {/* Cards */}
      <div className="bg-white/80 p-5 rounded-2xl shadow-md border mb-8">
        <SummaryCards />
      </div>

      
      <div className="bg-white/80 p-6 rounded-2xl shadow-md border">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
         Income vs Expense (Date Wise)
        </h2>
        <Charts />
      </div>
    </div>
  );
}