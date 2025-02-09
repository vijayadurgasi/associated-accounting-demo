
import { CircleDollarSign, PieChart, Shield } from "lucide-react";

const features = [
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: "Smart Bookkeeping",
    description:
      "Automate your financial processes with AI-powered bookkeeping that saves time and reduces errors.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your business performance with detailed financial analytics and reporting.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Compliant",
    description:
      "Bank-level security ensures your financial data is protected while maintaining compliance.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate mb-4">
            Features that Transform Finance
          </h2>
          <p className="text-lg text-slate/70 max-w-2xl mx-auto">
            Discover how our platform revolutionizes financial management for businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-slate/10 rounded-lg flex items-center justify-center text-slate mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate mb-2">
                {feature.title}
              </h3>
              <p className="text-slate/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
