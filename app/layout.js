import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

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
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="bg-global-bg text-body-t dark:bg-global-bg-dark dark:text-body-t-dark"
            suppressHydrationWarning
        >
        <head>
            <link rel="icon" href="/favicon.ico" />
            <title>Ziv-Consulting</title>
        </head>
        <body className={`${instru_reg.variable} antialiased w-full flex justify-center`}>
        {/* Theme initialization script for Tailwind v4 */}
        <Script id="theme-init" strategy="beforeInteractive">
            {`
            (function () {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
              
              // Set data-theme for Tailwind v4
              document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
              
              // Set class for backward compatibility
              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `}
        </Script>

        <header className={`${instru_i.variable} w-96 sm:w-full`}>{children}</header>

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