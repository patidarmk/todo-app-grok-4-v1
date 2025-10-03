"use client";
import * as React from "react";
import { CheckSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const { toast } = useToast();

  // Load from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    toast({
      title: "Todo Updated",
      description: "Your todo has been edited.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast({
      title: "Todo Toggled",
      description: "Task completion status updated.",
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast({
      title: "Todo Deleted",
      description: "The todo has been removed.",
    });
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">My Todos</h2>
        <p className="text-sm text-gray-600">
          {completedCount}/{totalCount} completed
        </p>
      </div>
      <AddTodo onAdd={addTodo} />
      {todos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <CheckSquare className="mx-auto h-12 w-12 mb-4 opacity-50" />
          <p>No todos yet. Add one above!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={updateTodo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;