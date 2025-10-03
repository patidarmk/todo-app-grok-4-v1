"use client";
import { Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About TodoMaster</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          TodoMaster is your ultimate productivity companion, designed to help you stay organized and focused in a fast-paced world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Founded in 2024, TodoMaster was born from the need for a simple yet powerful task management tool. Our team of developers and designers crafted an app that combines modern UI with seamless functionality, ensuring your todos are always at your fingertips.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Target className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We believe productivity should be effortless. TodoMaster empowers users to achieve more by providing intuitive tools for task management, all while prioritizing privacy with local storage—no accounts required.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">A passionate group of 5 developers and designers dedicated to building tools that matter.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">To redefine task management with elegance and efficiency.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">Add, edit, delete, and mark complete—everything you need in one clean interface.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;