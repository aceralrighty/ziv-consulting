export const runtime = 'edge';

export async function POST(req) {
    try {
        const body = await req.json();

        // Forward the request to the Node.js Prisma route
        const response = await fetch(`${process.env.BASE_URL || ""}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status: response.status,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
