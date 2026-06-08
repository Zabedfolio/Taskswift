import { FolderOpen, CircleCheck, ListCheck } from "@gravity-ui/icons";

const MESSAGES = {
  all:       { icon: FolderOpen,  title: "No tasks yet", sub: "Add your first task above!" },
  active:    { icon: CircleCheck, title: "All done!",    sub: "No active tasks remaining." },
  completed: { icon: ListCheck,   title: "Nothing here", sub: "Complete a task to see it here." },
};

export default function EmptyState({ filter }) {
  const msg = MESSAGES[filter] ?? MESSAGES.all;
  const IconComponent = msg.icon;

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-slideIn">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200 bg-zinc-50 shadow-sm text-zinc-400">
        <IconComponent className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold tracking-wide text-zinc-700">
        {msg.title}
      </p>
      <p className="text-xs text-zinc-400 mt-1">
        {msg.sub}
      </p>
    </div>
  );
}
