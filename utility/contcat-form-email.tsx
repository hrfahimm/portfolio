import React from "react";
import { Html, Body, Heading, Hr, Section, Head, Preview, Container, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind"
import { sendEmail } from "@/actions/sendEmail";



type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}



export default function ContcatFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Preview> New Message From Your Portfolio site</Preview>

            <Tailwind>
                <Body className="bg-gray-100 h-[500px]" key={senderEmail}>
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-xl ">
                            <Heading className="leading-tight text-cyan-50 "> Sended By Portfolio Contact from </Heading>
                            <Text className="font-semibold ">{message}</Text>
                            <Hr />
                            <Text className="font-bold italic ">
                                The Sender Email is : {senderEmail}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind >
        </Html >)

}


