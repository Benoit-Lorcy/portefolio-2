/*import {createTransport} from 'nodemailer'
export default defineEventHandler (async (event) => {
    const { name, email, message } = await readBody(event);
    const runtimeConfig = useRuntimeConfig()
    console.log(`${name} ${email} ${message}`)
    console.log(runtimeConfig.mail)

    // Create a transport object
    let transporter = createTransport({
        host: "mail.gandi.net",
        port: 465,
        secure: true,
        auth: {
            user: runtimeConfig.mail,
            pass: runtimeConfig.password
        }
    })

    // Email options
    let mailOptions = {
        from: runtimeConfig.mail,
        to: runtimeConfig.myMail,
        subject: `New message from ${name}`,
        text: message
    }

    // Send email
    const error = await new Promise((resolve) => {
        transporter.sendMail(mailOptions, resolve);
    })

    console.log(error)

    if (error) {
        throw createError({
            statusCode: 400
        })
    } else {
        return 'Email sent successfully!';
    }
})*/

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {

    const { name, email, message } = await readBody(event);
    const runtimeConfig = useRuntimeConfig()
    console.log(`${name} ${email} ${message}`)

    try {
        const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['benoit.lorcy@gmail.com'],
        subject: name + "sent you a message!",
        html: message,
        });

        return data;
    } catch (error) {
        return { error };
    }
});
