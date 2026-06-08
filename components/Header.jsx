import { ThunderboltFill } from "@gravity-ui/icons";

export default function Header({ totalTasks, completedTasks }) {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <header className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-violet-600 text-white shadow-sm border border-violet-500/10">
            <ThunderboltFill className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            TaskSwift
          </h1>
        </div>
        
        {totalTasks > 0 && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100 shadow-sm animate-slideIn">
            {percentage}% Done
          </span>
        )}
      </div>

      {totalTasks === 0 ? (
        <p className="text-sm text-zinc-500">
          No tasks yet — add one below!
        </p>
      ) : (
        <div className="space-y-2 animate-slideIn">
          <div className="flex justify-between items-center text-xs text-zinc-500">
            <span>Progress Tracker</span>
            <span className="font-semibold text-zinc-700">{completedTasks} of {totalTasks} completed</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200/60">
            <div 
              className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_0_4px_rgba(124,58,237,0.2)]"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
