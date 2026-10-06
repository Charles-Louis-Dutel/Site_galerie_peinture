import * as React from 'react';


interface EmailTemplateProps {
    name: string;
    email: string;
    body: string;
}


export function EmailTemplate({ name, email, body }: EmailTemplateProps) {
    return (
        <div>
            <h1>Nouveau message depuis le site</h1>
            <p>Nom: {name}</p>
            <p>Email: {email}</p>
            <p style={{ whiteSpace: "pre-wrap" }}>Message: {body}</p>
        </div>
    );
}