import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body
            className={`${instru_reg.variable} antialiased bg-global-bg w-full flex justify-center dark:bg-global-bg-dark`}>
        <header className={`${instru_i.variable} w-96 sm:w-full`}>
            {children}
        </header>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            theme="colored"
        />
        </body>
        </html>
    );
}