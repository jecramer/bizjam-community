import { Rocket, Users, Lightbulb, Zap } from "lucide-react";

const features = [
  {
    name: "Lightning Fast Creation",
    description: "Launch your business ideas in days, not months, using AI-powered tools and workflows.",
    icon: Zap,
  },
  {
    name: "Community Support",
    description: "Connect with like-minded entrepreneurs who are building in public and sharing insights.",
    icon: Users,
  },
  {
    name: "Innovation First",
    description: "Stay ahead of the curve with the latest AI tools and business creation strategies.",
    icon: Lightbulb,
  },
  {
    name: "Launch Together",
    description: "Join forces with other members to validate ideas and get instant feedback.",
    icon: Rocket,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Join bizjam?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build faster
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col transition-all duration-300 rounded-lg hover:shadow-lg card-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg gradient-bg">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold leading-7 text-center text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-center text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;