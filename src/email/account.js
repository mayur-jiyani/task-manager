const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'smartduniya27@gmail.com',
        subject: 'Thanks for joining us',
        text: `Welcome to the app, ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'smartduniya27@gmail.com',
        subject: 'Your account is removed',
        text: `Goodbye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
