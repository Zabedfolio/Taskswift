import { Check, Clock, TrashBin } from "@gravity-ui/icons";

export default function TaskItem({ task, onToggle, onDelete, isRemoving }) {
  return (
    <li
      className={`
        group flex items-center gap-4 px-4 py-3.5 rounded-2xl border mb-3
        transition-all duration-300 transform bg-white border-zinc-200/80
        hover:shadow-sm hover:bg-zinc-50/30 hover:border-zinc-300
        ${isRemoving ? "animate-fadeOut overflow-hidden" : "animate-slideIn"}
      `}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`
          w-5.5 h-5.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer
          ${task.completed 
            ? "border-transparent bg-gradient-to-r from-violet-500 to-indigo-500 shadow-sm animate-slideIn" 
            : "border-zinc-300 hover:border-violet-400 hover:bg-violet-50"
          }
        `}
        aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
      >
        {task.completed && (
          <Check className="w-3.5 h-3.5 text-white" />
        )}
      </button>

      <span
        className={`
          flex-1 text-sm leading-snug transition-all duration-300
          ${task.completed 
            ? "line-through text-zinc-400 opacity-65" 
            : "text-zinc-800"
          }
        `}
      >
        {task.text}
      </span>

      <span className="text-xs hidden sm:flex items-center gap-1.5 text-zinc-400">
        <Clock className="w-3.5 h-3.5 opacity-60" />
        {new Date(task.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 opacity-100 sm:opacity-0 group-hover:opacity-100 focus-within:opacity-100 text-zinc-400 hover:text-red-500 hover:bg-red-50 cursor-pointer"
        aria-label="Delete task"
      >
        <TrashBin className="w-4 h-4" />
      </button>
    </li>
  );
}
