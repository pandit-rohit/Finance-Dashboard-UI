import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Transactions
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage and track your financial activity
        </p>
      </div>

      {/* Filters Section */}
      <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md border border-gray-200 mb-6 hover:shadow-lg transition-all duration-300">
        <Filters />
      </div>

      {/* Table Section */}
      <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
        <TransactionTable />
      </div>

    </div>
  );
}