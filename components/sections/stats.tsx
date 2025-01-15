export function Stats() {
  return (
    <div className="container px-4 mx-auto max-w-6xl -mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <StatCard value="85%" label="Faster Processing" />
        <StatCard value="99.9%" label="Accuracy Rate" />
        <StatCard value="24/7" label="Availability" />
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-background border rounded-lg p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-none">
      <p className="text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-base font-medium text-muted-foreground">{label}</p>
    </div>
  );
}