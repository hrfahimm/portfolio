import React from "react";
import { Html, Body, Heading, Hr, Section, Head, Preview, Container, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind"
import { sendEmail } from "@/actions/sendEmail";



type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}



export default function ContcatFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return <Html>
        <Html />
        <Preview> New Message From Your Portfolio site</Preview>

        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>you reacived the flowing message from contact form </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>
                            the sender is email is : {senderEmail}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind >
    </Html >

}


