import {NextResponse} from "next/server";
import {connect} from "@planetscale/database";

export const runtime = "edge";

// Set up database connection
const dbConfig = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
};
const db = connect(dbConfig);

export async function POST(req) {
    try {
        const {full_name, email, message} = await req.json();

        if (!full_name || !email || !message) {
            return NextResponse.json(
                {error: "Missing required fields"},
                {status: 400}
            );
        }

        // Save inquiry to the database
        const query = `
            INSERT INTO inquiries (userName, userEmail, message)
            VALUES (?, ?, ?)
        `;
        await db.execute(query, [full_name, email, message]);

        return NextResponse.json(
            {message: "Inquiry saved successfully!"},
            {status: 201}
        );
    } catch (error) {
        console.error("Error saving inquiry:", error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        );
    }
}
