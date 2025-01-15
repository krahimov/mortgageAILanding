import { Bot, Building2, Clock, FileCheck2, Code, Lock, Brain, Workflow, Database } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 bg-secondary/30" id="features">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          AI-Powered Mortgage Processing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="Advanced LLM Processing"
            description="State-of-the-art language models analyze and process mortgage applications with human-like understanding"
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8" />}
            title="24/7 Processing"
            description="Continuous processing and instant updates on application status"
          />
          <FeatureCard
            icon={<FileCheck2 className="h-8 w-8" />}
            title="Smart Document Verification"
            description="Automated verification of income, employment, and assets"
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8" />}
            title="Enterprise Security"
            description="Bank-grade encryption and security protocols for sensitive data"
          />
          <FeatureCard
            icon={<Workflow className="h-8 w-8" />}
            title="Custom Workflows"
            description="Tailored processing workflows that match your existing procedures"
          />
          <FeatureCard
            icon={<Database className="h-8 w-8" />}
            title="Data Extraction"
            description="Intelligent extraction of key data points from mortgage documents with high accuracy"
          />
          <FeatureCard
            icon={<Code className="h-8 w-8" />}
            title="API SDK"
            description="Comprehensive SDK for seamless integration with your existing systems"
          />
          <FeatureCard
            icon={<Building2 className="h-8 w-8" />}
            title="Multi-lender Platform"
            description="Connect with multiple lenders through a single unified platform"
          />
          <FeatureCard
            icon={<Bot className="h-8 w-8" />}
            title="AI Assistant"
            description="24/7 AI support for both processors and applicants"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}