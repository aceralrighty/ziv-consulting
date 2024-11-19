import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {

    try {

        const body = await req.json();
        const message = `
            Name: ${body.full_name} \r\n
            Email: ${body.email}\r\n
            Message: ${body.message}
        `;


        const dataPayload = {
            to: "adamziv156@gmail.com",
            from: "client@em6999.ziv-consulting.dev",
            subject: "Potential Client Inquiry",
            text: message,
            html: message.replace(/\r\n/g, "<br>"),
        };


        await mail.send(dataPayload)
            return new Response(JSON.stringify({status: "Email sent successfully!"}), {
                status: 200,
                headers: {"Content-Type": "application/json"},
            });


    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({error: "Failed to send email. Please try again later."}),
            {status: 500, headers: {"Content-Type": "application/json"}}
        );
    }
}

