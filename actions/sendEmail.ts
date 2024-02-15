"use server";

import React from "react";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    
    const senderEmail = formData.get("email")
    const message = formData.get("message");

    // if(!validateString(senderEmail, 500)){
    //     return {
    //         error: "Invalid sender email"
    //     }
    // }

    // if(!validateString(message, 5000)){
    //     return {
    //         error: "Invalid message"
    //     }
    // }

    
    await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "ezequiel.ruedasanchez@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string
        }) 
        // <ContactFormEmail message={message} senderEmail={senderEmail}/>
    });
};


// // text: message as string,

