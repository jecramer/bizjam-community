import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JoinForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
    interests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual email submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      background: "",
      interests: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div id="join" className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Apply to join the bizjam Slack. Share ideas, get advice, and connect with others to build.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-2"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="background" className="block text-sm font-medium text-gray-700">
              Background
            </label>
            <Textarea
              id="background"
              value={formData.background}
              onChange={(e) => setFormData({ ...formData, background: e.target.value })}
              required
              className="mt-2"
              placeholder="Tell us about your background and experience"
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
              What interests you about AI-powered business creation?
            </label>
            <Textarea
              id="interests"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              required
              className="mt-2"
              placeholder="Share your thoughts and goals"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-bg hover:opacity-90"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;