"use client";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <CheckSquare className="mx-auto h-16 w-16 text-blue-600 mb-6" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Master Your Tasks with TodoMaster
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize your life with our intuitive todo app. Add, edit, complete, and delete tasks effortlessly—all synced locally for privacy and speed.
          </p>
          <div className="space-x-4">
            <Link to="/todos">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Todos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
          <TodoList />
        </div>
      </section>
    </div>
  );
};

export default Home;