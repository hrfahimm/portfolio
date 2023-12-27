'use server'
import ContcatFormEmail from "@/utility/contcat-form-email";
import { validateString, getErrorMessage } from "@/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESET_API_KEY);


export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    //simple server side validation
    if (!validateString(senderEmail, 500)) {
        return { error: 'Invalid sender email' }
    }
    if (!validateString(message, 5000)) {
        return { error: 'Invalid message' }
    }
    let data;
    try {
            data = await resend.emails.send({
            from: 'hrfahimm Portfolio <onboarding@resend.dev>',
            to: 'fahimtaj10@gmail.com',
            subject: 'Message form Portfolio',
            reply_to: senderEmail as string,
            react: React.createElement(ContcatFormEmail,{message: message as string,senderEmail:senderEmail as string})
             
        })
    } catch (error: unknown) {

        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    }

}

"invelid email"