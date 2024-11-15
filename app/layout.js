import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const instru_reg = localFont({
    src: "./fonts/InstrumentSerif-Regular.ttf",
    variable: "--font-instru-regular",
    weight: "100 900",
});
const instru_i = localFont({
    src: "./fonts/InstrumentSerif-Italic.ttf",
    variable: "--font-instru-italic",
    weight: "100 900",
});

export const metadata = {
    title: "Ziv Consulting",
    description: "Created by Adam Ziv",
    icons: {
        icon: "/favicon.ico",
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body
            className={`${instru_reg.variable} antialiased bg-global_bg w-full flex justify-center`}>
        <header className={`${instru_i.variable} w-96 sm:w-full`}>
            {children}
        </header>
        </body>
        </html>
    );
}
