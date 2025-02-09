
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-slate">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Finance Management?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of businesses that trust us with their financial operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate hover:bg-white/90 transition-colors"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
