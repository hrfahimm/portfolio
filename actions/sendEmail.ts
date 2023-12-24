'use server'
import { validateString } from "@/utils";
import {Resend} from "resend";
const resend = new Resend(process.env.RESET_API_KEY);
 

export const sendEmail = async (formData: FormData) => {
    
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')


    //simple server side validation
    if (!validateString(senderEmail,500)) {
        return {
            error:'Invalid sender email'
        }
    }
    if (!validateString(message,5000)) {
        return {
            error:'Invalid message'
        }
    }
    
     

    try {
        await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'fahimtaj10@gmail.com',
        subject: 'Message form Contact form',
        reply_to:senderEmail as string,
        text:message as string
    })
    } catch (error : unknown) {
        console.log(error);
        
    }

    }