"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/demo-dialog";

export function Pricing() {
  return (
    <section className="py-20 bg-secondary/30" id="pricing">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="999"
            description="Perfect for small mortgage companies"
            features={[
              "Up to 50 applications/month",
              "Basic AI processing",
              "Email support",
              "Standard API access",
              "Basic analytics"
            ]}
          />
          <PricingCard
            title="Professional"
            price="2,499"
            description="Ideal for growing mortgage providers"
            features={[
              "Up to 200 applications/month",
              "Advanced AI processing",
              "Priority support",
              "Full API access",
              "Advanced analytics",
              "Custom integrations"
            ]}
            highlighted
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large-scale operations"
            features={[
              "Unlimited applications",
              "Custom AI models",
              "24/7 dedicated support",
              "Enterprise API access",
              "Custom analytics",
              "White-label solution",
              "Custom workflow"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features,
  highlighted = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`
      rounded-lg p-8
      ${highlighted 
        ? "bg-primary text-primary-foreground ring-2 ring-primary" 
        : "bg-card"}
    `}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-sm mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <DemoDialog>
        <Button 
          className={`w-full ${highlighted ? "bg-background text-primary hover:bg-background/90" : ""}`}
        >
          Get Started
        </Button>
      </DemoDialog>
    </div>
  );
}