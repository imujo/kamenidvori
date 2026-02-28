"use server";

import { env } from "@/config/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp-relay.brevo.com",
	port: 587,
	auth: {
		user: env.BREVO_LOGIN_EMAIL,
		pass: env.BREVO_SMTP_API_KEY,
	},
});

type FormState = {
	message: string;
	success: boolean;
};

export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
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
			from: env.BREVO_MESSAGE_EMAIL,
			to: env.BREVO_MESSAGE_EMAIL,
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
