"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p>hello@todmaster.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p>+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p>San Francisco, CA</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;