
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <span className="px-3 py-1 text-sm text-slate bg-slate/10 rounded-full mb-6">
            Revolutionizing Finance Management
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate max-w-4xl mb-6 leading-tight">
            Smart Finance Management for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate/70 max-w-2xl mb-8">
            Streamline your financial operations with AI-powered insights and automated bookkeeping
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-slate text-white hover:bg-slate/90 transition-colors"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate text-slate hover:bg-slate/10"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {[
              ["2000+", "Active Users"],
              ["$500M+", "Processed Monthly"],
              ["99.9%", "Accuracy Rate"],
            ].map(([number, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate mb-2">
                  {number}
                </div>
                <div className="text-sm text-slate/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
