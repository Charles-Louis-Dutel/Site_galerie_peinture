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
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    const result = RequestValues.safeParse({ name, email, subject, message });

    if (!result.success || (typeof honeypot === "string" && honeypot.trim() !== ""))
    {
        return Response.json({ error: "Erreur dans les données du formulaire." }, { status: 400 });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['cldutel51@gmail.com'],
            replyTo: [result.data.email],
            subject: result.data.subject === "" ? 
                        "Message de la galerie peinture" :
                        result.data.subject,
            react: EmailTemplate({ 
                    name: result.data.name,
                    body: result.data.message,
                    email: result.data.email
            }),
        });

        if (error)
        {
            console.log(error);
            return Response.json({ error }, { status : 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}