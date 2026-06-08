const FILTERS = [
  { key: "all",       label: "All" },
  { key: "active",    label: "Active" },
  { key: "completed", label: "Completed" },
];

export default function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="flex p-1.5 gap-1.5 mb-6 rounded-2xl border border-zinc-200/60 bg-zinc-100/60">
      {FILTERS.map(({ key, label }) => {
        const isActive = filter === key;

        return (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
              ${isActive 
                ? "bg-violet-600 text-white shadow-sm border border-violet-500/10" 
                : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/20"
              }
            `}
          >
            <span>{label}</span>
            <span
              className={`
                text-xs px-2 py-0.5 rounded-full font-bold transition-all duration-200
                ${isActive 
                  ? "bg-white/20 text-white" 
                  : "bg-zinc-200/40 text-zinc-400 border border-zinc-200/20"
                }
              `}
            >
              {counts[key]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
