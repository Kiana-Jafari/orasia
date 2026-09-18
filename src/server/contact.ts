import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

type ContactPayload = {
    fullName: string;
    companyName?: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

export const submitContactForm = createServerFn({ method: "POST" })
    .validator((data: unknown) => data as ContactPayload)
    .handler(async ({ data }) => {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // مثلا mail.orasiatrade.com
            port: Number(process.env.SMTP_PORT ?? 465),
            secure: true, // برای پورت 465؛ اگه از 587 استفاده کردی بذار false
            auth: {
                user: process.env.SMTP_USER, // آدرس ایمیل کامل، مثلا info@orasiatrade.com
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_RECEIVER_EMAIL ?? process.env.SMTP_USER,
            replyTo: data.email,
            subject: `New inquiry: ${data.subject}`,
            text: `
Name: ${data.fullName}
Company: ${data.companyName ?? "-"}
Email: ${data.email}
Phone: ${data.phone ?? "-"}

Message:
${data.message}
      `.trim(),
        });

        return { success: true };
    });