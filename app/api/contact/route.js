import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export const runtime = 'nodejs';

export async function POST(req) {
    try {
        const { full_name, email, message } = await req.json();

        if (!full_name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newInquiry = await prisma.inquiries.create({
            data: {
                userName: full_name,
                userEmail: email,
                message: message,
            },
        });

        return NextResponse.json(
            {
                message: "Inquiry saved successfully!",
                data: newInquiry,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

