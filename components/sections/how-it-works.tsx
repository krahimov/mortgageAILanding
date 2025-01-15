import { ArrowRight, Bot, FileText, Sparkles, CheckCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-20 bg-background" id="how-it-works">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          How MortgageAI Works
        </h2>
        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            <Step
              icon={<FileText className="h-8 w-8" />}
              title="Document Upload"
              description="Upload mortgage applications and supporting documents through our secure portal"
              step={1}
            />
            <Step
              icon={<Bot className="h-8 w-8" />}
              title="AI Processing"
              description="Our advanced LLMs analyze and process the documents, extracting key information"
              step={2}
            />
            <Step
              icon={<Sparkles className="h-8 w-8" />}
              title="Smart Verification"
              description="Automated verification of income, employment, and other critical data points"
              step={3}
            />
            <Step
              icon={<CheckCircle className="h-8 w-8" />}
              title="Decision Ready"
              description="Receive comprehensive analysis and decision-ready applications"
              step={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, description, step }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  step: number;
}) {
  return (
    <div className="relative flex items-center gap-8">
      <div className="hidden md:flex w-1/2 justify-end pr-8">
        {step % 2 === 1 && (
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        )}
      </div>
      <div className="bg-primary text-primary-foreground p-4 rounded-full z-10">
        {icon}
      </div>
      <div className="md:w-1/2 pl-8">
        {step % 2 === 0 ? (
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ) : (
          <div className="md:hidden">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}