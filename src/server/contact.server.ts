import nodemailer from "nodemailer";

export type ContactPayload = {
    fullName: string;
    companyName?: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

export async function sendContactEmail(data: ContactPayload) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 465),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
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
}