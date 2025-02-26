"use client";

import { DemoDialog } from "@/components/demo-dialog";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background pt-20 pb-32">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Process mortgages 10x faster with MortgageAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your mortgage application process with our AI-powered platform. 
            Faster approvals, fewer errors, happier customers.
          </p>
          <div className="flex items-center justify-center mb-8">
            <span className="text-sm text-muted-foreground border border-border rounded-full px-4 py-1 flex items-center">
              <span className="mr-2">Backed by</span>
              <Image src="/antler-logo.png" alt="Antler Logo" width={20} height={5} />
            </span>
          </div>
          <DemoDialog>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Demo <Send className="ml-2 h-4 w-4" />
            </Button>
          </DemoDialog>
        </div>
      </div>
    </section>
  );
}