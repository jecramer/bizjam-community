import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      </div>
      <div className="container relative z-10 px-4 py-16 mx-auto text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="animate-float">
          <Zap className="w-16 h-16 mx-auto mb-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Build Your Business at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Lightning Speed
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
          bizjam is a community of innovators leveraging AI to create small businesses faster than ever.
          Join us in the hypercasual revolution of business creation.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <a
            href="#join"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg gradient-bg hover:opacity-90"
          >
            Join the Community
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;