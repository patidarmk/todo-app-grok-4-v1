"use client";
import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
      toast({
        title: "Todo Added",
        description: "Your new todo has been created.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit">
        <Plus className="h-4 w-4 mr-2" />
        Add
      </Button>
    </form>
  );
};

export default AddTodo;