"use client";
import TodoList from "@/components/TodoList";

const Todos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Todo Dashboard</h1>
      <TodoList />
    </div>
  );
};

export default Todos;