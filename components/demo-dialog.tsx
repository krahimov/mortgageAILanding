"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function DemoDialog({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle demo request submission
    console.log("Demo requested:", formData);
    setFormData({ name: "", email: "", company: "", role: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            See how MortgageAI can transform your mortgage processing workflow
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDemoRequest} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Job Role</Label>
            <Input
              id="role"
              name="role"
              placeholder="e.g. Mortgage Officer"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Schedule Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}