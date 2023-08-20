import {createTransport} from 'nodemailer'
export default defineEventHandler (async (event) => {

    const { name, email, message } = await readBody(event);

    console.log(`${name} ${email} ${message}`)

    // Create a transport object
    let transporter = createTransport({
        host: "mail.gandi.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    // Email options
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.MYMAIL,
        subject: `New message from ${name}`,
        text: message
    }

    // Send email
    const error = await new Promise((resolve) => {
        transporter.sendMail(mailOptions, resolve);
    })

    if (error) {
        throw createError({
            statusCode: 400,
            statusMessage: <string>error
        })
    } else {
        return 'Email sent successfully!';
    }
})