import {createTransport} from 'nodemailer'
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
})