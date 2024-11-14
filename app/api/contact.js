import nodemailer from "nodemailer";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default async function contact(req, res) {
    if (req.method === "GET") {
        const {fullName, email, message} = req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            }
        })
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New message from ${fullName}`,
            text: `Name: ${fullName}\n Email: ${email}\n Message: ${message}`,
        }
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).toJSON({message: "Message sent"});
        } catch (error) {
            console.error("Error sending message: ", error);
            res.status(500).json({error: error.message});
        }
    } else{
        res.status(405).toJSON({message: "Method not allowed"});
    }
}