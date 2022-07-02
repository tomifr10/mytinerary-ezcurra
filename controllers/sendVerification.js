const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const sendVerification = async (email, string) => { //depende del mail que ingresa el usuario y el uniqueString que se crea con crypto

    const myOAuth2Client = new OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_SECRETCLIENT,
        "https://developers.google.com/oauthplayground"
    )

    myOAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    const accessToken = myOAuth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            type: "OAuth2",
            // user: process.env.USER,
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRETCLIENT,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false //para evitar que bloquee el antivirus
        }
    })

    let mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'Verify your Mytinerary account',
        html: `
            <a href=http://localhost:4000/api/verify/${string}>CLICK!</a>
            <h3>to confirm!</h3>`
    }

    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log(`check ${email} to confirm your account`)
        }
    })
}

module.exports = sendVerification