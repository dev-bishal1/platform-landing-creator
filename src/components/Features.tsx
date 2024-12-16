import { Server, Cloud, Lock, Zap } from "lucide-react";

const features = [
  {
    name: "Infrastructure as Code",
    description: "Version-controlled infrastructure with modern IaC tools and practices.",
    icon: Server,
  },
  {
    name: "Cloud Native",
    description: "Built for modern cloud environments with scalability in mind.",
    icon: Cloud,
  },
  {
    name: "Security First",
    description: "Enterprise-grade security with compliance and governance built-in.",
    icon: Lock,
  },
  {
    name: "Developer Experience",
    description: "Streamlined workflows that developers love to use.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Platform Engineering, Simplified
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build and maintain modern cloud infrastructure.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;