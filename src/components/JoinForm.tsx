import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const JoinForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/bizjamco@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          linkedin: formData.linkedin,
          _subject: "New Bizjam Community Join Request",
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your application has been submitted successfully.",
        });

        setFormData({
          name: "",
          email: "",
          linkedin: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div id="join" className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg leading-8 text-gray-600 font-bold">
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
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile URL
            </label>
            <Input
              type="url"
              id="linkedin"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              required
              className="mt-2"
              placeholder="https://linkedin.com/in/your-profile"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-bg hover:opacity-90"
          >
            Join the Community
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;