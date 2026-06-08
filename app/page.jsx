"use client";

import { useState } from "react";
import Header from "../components/Header";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import TaskItem from "../components/TaskItem";
import EmptyState from "../components/EmptyState";

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export default function HomePage() {
  const [tasks,    setTasks]    = useState([]);
  const [input,    setInput]    = useState("");
  const [filter,   setFilter]   = useState("all");
  const [removing, setRemoving] = useState(new Set());

  function addTask() {
    const trimmed = input.trim(); 
    if (!trimmed) return;

    const newTask = {
      id:        makeId(),
      text:      trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setRemoving((prev) => new Set([...prev, id]));
    setTimeout(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
      setRemoving((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 250);
  }

  const counts = {
    all:       tasks.length,
    active:    tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) =>  t.completed).length,
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active")    return !task.completed;
    if (filter === "completed") return  task.completed;
    return true;
  });

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
        <Header
          totalTasks={counts.all}
          completedTasks={counts.completed}
        />

        <AddTaskForm
          inputValue={input}
          setInput={setInput}
          onAdd={addTask}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          counts={counts}
        />

        {visibleTasks.length === 0 ? (
          <EmptyState filter={filter} />
        ) : (
          <ul className="list-none p-0 max-h-[400px] overflow-y-auto pr-1">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                isRemoving={removing.has(task.id)}
              />
            ))}
          </ul>
        )}

        {counts.completed > 0 && (
          <div className="mt-6 pt-5 border-t border-zinc-200/80 flex justify-between items-center animate-slideIn">
            <span className="text-xs text-zinc-400 font-medium">
              {counts.completed} completed task{counts.completed !== 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setTasks((prev) => prev.filter((t) => !t.completed))}
              className="text-xs px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.97] border border-red-200/60 text-red-500 bg-red-50 hover:bg-red-100/80 hover:border-red-300/60 cursor-pointer font-medium shadow-sm"
            >
              Clear completed
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
