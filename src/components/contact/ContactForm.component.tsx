"use client";

import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/utils/cn";
import { Button } from "../Button.component";
import { submitContactForm } from "./contactServerAction";

type ContactFormProps = {
  className?: string;
  buttonLabel?: string;
  helperText?: string;
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="rounded-lg" disabled={pending}>
      {pending ? "Sending..." : label}
    </Button>
  );
}

const initialState = {
  message: "",
  success: false,
};

export default function ContactForm({
  className,
  buttonLabel = "Submit",
  helperText = "Send us a message and we will get back to you as soon as possible",
}: ContactFormProps) {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form
      action={formAction}
      className={cn("flex flex-col gap-4 max-w-3xl mx-auto w-full", className)}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 flex-1 min-w-0"
        />
      </div>

      <div className="flex flex-col">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          rows={4}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white/50 min-w-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <SubmitButton label={buttonLabel} />

        {state?.message && (
          <p
            className={cn(
              "text-center text-sm p-2 rounded",
              state.success
                ? "text-green-600 bg-green-50"
                : "text-red-600 bg-red-50"
            )}
            aria-live="polite"
          >
            {state.message}
          </p>
        )}

        {helperText && (
          <span className="text-center text-sm text-gray-500">
            {helperText}
          </span>
        )}
      </div>
    </form>
  );
}
