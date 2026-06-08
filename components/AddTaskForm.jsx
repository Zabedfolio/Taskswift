export default function AddTaskForm({ inputValue, setInput, onAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    onAdd();
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
        maxLength={120}
        className="flex-1 px-4 py-3 rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 border border-zinc-200 bg-zinc-50 hover:border-zinc-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 focus:bg-white"
      />

      <button
        type="submit"
        className="shrink-0 px-5 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 active:scale-[0.97] hover:scale-[1.02] shadow-sm border border-violet-600 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
}
