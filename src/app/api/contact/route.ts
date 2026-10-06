import { EmailTemplate } from "@/src/components/contact/emailTemplate";
import { Resend } from "resend";
import * as z from "zod";


const resend = new Resend(process.env.RESEND_API_KEY);


const RequestValues = z.object({
    name: z.string()
            .trim()
            .min(2)
            .max(50),

    email: z.email(),
    
    subject: z.string()
                .trim()
                .min(2)
                .max(50),

    message: z.string()
                .trim()
                .min(10)
                .max(2000),
})


export async function POST(request: Request) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Erreur dans les données du formulaire." }, { status: 400 });
    }

    if (!body || typeof body !== "object")
    {
        return Response.json({ error: "Erreur dans les données du formulaire." }, { status: 400 });
    }

    const { name, email, subject, message, honeypot } = body as Record<string, unknown>;

    const result = RequestValues.safeParse({ name, email, subject, message });

    if (!result.success || (typeof honeypot === "string" && honeypot.trim() !== ""))
    {
        return Response.json({ error: "Erreur dans les données du formulaire." }, { status: 400 });
    }

    // Supprime les retours à la ligne et tabulations de l'objet de l'email.
    const cleanSubject = result.data.subject.replace(/[\r\n\t]+/g, " ").trim();

    try {
        const { error } = await resend.emails.send({
            from: 'Sophie Dutel Art <contact@sophiedutel-art.fr>',
            to: ['sophiedutel@gmail.com'],
            replyTo: [result.data.email],
            subject: cleanSubject === "" ? 
                        "Message de la galerie peinture" :
                        cleanSubject,
            react: EmailTemplate({ 
                    name: result.data.name,
                    body: result.data.message,
                    email: result.data.email
            }),
        });

        if (error)
        {
            console.error("Resend error:", error.name, error.statusCode, error.message);
            return Response.json({ error: "Erreur lors de l'envoi du message." }, { status: 500 });
        }

        return Response.json({ ok: true });
    } catch (error) {
        console.error("Contact route error:", error);
        return Response.json({ error: "Erreur lors de l'envoi du message." }, { status: 500 });
    }
}
