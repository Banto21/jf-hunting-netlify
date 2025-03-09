import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_KEY
        }
    });

    try {
        await transporter.sendMail({
            from: `kontakt@jfhunting.pl`,
            to: 'jfhuntingtours@gmail.com',
            subject: 'New Contact Form Message',
            text: `From: ${name} (${email})\n\n${message}`
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Email failed to send', error });
    }
}
