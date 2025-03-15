import { cn } from "@/utils/cn";
import { Button } from "./Button.component";

type ContactFormProps = {
  className?: string;
  buttonLabel?: string;
  helperText?: string;
};

export default function ContactForm({
  className,
  buttonLabel = "Submit",
  helperText = "Send us a message and we will get back to you as soon as possible",
}: ContactFormProps) {
  return (
    <form
      className={cn("flex flex-col gap-4 max-w-3xl mx-auto w-full", className)}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
        />
      </div>

      <div className="flex flex-col">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 min-w-0"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="rounded-lg">{buttonLabel}</Button>
        {helperText && (
          <span className="text-center text-sm text-gray-500">
            {helperText}
          </span>
        )}
      </div>
    </form>
  );
}
