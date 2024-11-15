// import {Form} from "/app/components/form"
// import {Resend} from "resend"
//
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
//
// const resend = new Resend(process.env.API_KEY);
//
// export async function POST(request, res){
//     const {email, userName} = await request.json()
//
//         const {data, error} = await resend.emails.send({
//             from: "Adam <onboarding@resend.dev>",
//             to: [email],
//             subject: "inquiry",
//             react: Form({first_name: userName}),
//         })
//         if (error){
//             return Response.json({error}, {status: 500})
//         }
//         return Response.json({data})
// }