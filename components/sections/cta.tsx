"use client";

import { DemoDialog } from "@/components/demo-dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Mortgage Processing?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join leading mortgage providers who have already automated their workflow
        </p>
        <DemoDialog>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Schedule Your Demo <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </DemoDialog>
      </div>
    </section>
  );
}