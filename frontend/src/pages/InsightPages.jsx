import Insights from "../components/Insights";

export default function InsightsPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-100 px-6 py-8">

      
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Insights
        </h1>

        <span className="text-sm px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 font-semibold shadow-sm">
          Analytics
        </span>
      </div>

     
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
        <Insights />
      </div>

    </div>
  );
}