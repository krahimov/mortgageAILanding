"use client";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { DemoDialog } from "./demo-dialog";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MortgageAI</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-primary">How it Works</a>
          <a href="#pricing" className="text-sm hover:text-primary">Pricing</a>
          <DemoDialog>
            <Button variant="default">Request Demo</Button>
          </DemoDialog>
        </div>
      </div>
    </nav>
  );
}