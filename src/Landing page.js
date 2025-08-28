export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to NL Tax Buddy 🇳🇱
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          The simplest way for expats to understand and prepare their Dutch
          income tax return. Clear English explanations, quick calculators, and
          practical checklists — no jargon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-white rounded-xl shadow text-gray-700">
            <h2 className="font-semibold text-lg mb-2">📖 Step Guide</h2>
            <p>Learn the Dutch tax process step by step in plain English.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-gray-700">
            <h2 className="font-semibold text-lg mb-2">🧮 Calculator</h2>
            <p>Estimate your net income and tax liability in minutes.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-gray-700">
            <h2 className="font-semibold text-lg mb-2">📑 Checklists</h2>
            <p>Know exactly which documents you need before filing.</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition"
        >
          Start Now
        </button>
      </div>
    </div>
  );
}
