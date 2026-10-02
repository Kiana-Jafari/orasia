import { createServerFn } from "@tanstack/react-start";
import {
    sendContactEmail,
    type ContactPayload,
} from "@/server/contact.server";

export const submitContactForm = createServerFn({ method: "POST" })
    .validator((data: unknown) => data as ContactPayload)
    .handler(async ({ data }) => {
        return sendContactEmail(data);
    });