import { Request, Response } from "express";
import { sendEmail } from "../utils/email";

export const contactMe = async(req, res) => {
    try {
        const date = new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString();
        const { email, username, message } = req.body;
        
        const mailOptions = {
            from: process.env.email,
            to: "dufitumukizaemmanuel77@gmail.com",
            subject: 'Your portfolio contact message',
               html: `
               <div style="margin-bottom: 10px;"><h1 style="color:#0e54dc">My Portfolio</h1></div>
               <p>Hello Emmanuel DUFITUMUKIZA</p>
               <p>You have received contact message from your portfolio.</p>
            <p>Sender info:</p>
            <p>Names: ${username}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Date: ${date}</p>
            `
        };
        
        await sendEmail(mailOptions);

        const mailOptions2 = {
            from: process.env.email,
            to: email,
            subject: 'Emmanuel DUFITUMUKIZA',
               html: `
               <div style="margin-bottom: 10px;"><h1 style="color:#0e54dc">Emmanuel's Portfolio</h1></div>
               <p>Hello ${username}</p>
               <p>Thank you for contacting us. We are happy to receive your message.</p>
            <p>Your contact info:</p>
            <p>Your Name: ${username}</p>
            <p>Your Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Date: ${date}</p>
            <p>Portfolio: https://dufitumukizaemmanuel.vercel.app</p>
            `
        };
        
        sendEmail(mailOptions2);

        return res.status(200).json({message: "Thank you!!!, your message was sent successfully!",status: true});
    }
    catch (error) {
        res.status(400).json(error);
    }
}