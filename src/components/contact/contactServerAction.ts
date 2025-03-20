"use server";

import { env } from "@/config/env";
import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: env.SENDGRID_API_KEY,
  })
);

type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return {
        message: "All fields are required",
        success: false,
      };
    }

    await transporter.sendMail({
      from: env.SENDGRID_EMAIL,
      to: env.SENDGRID_EMAIL,
      subject: `New contact form from the website: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Contact form email sent successfully");

    return {
      message: "Thank you for your message. We'll get back to you soon!",
      success: true,
    };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
