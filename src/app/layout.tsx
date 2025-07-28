import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "sudo ./portfolio",
    description: "Explore Sudarshan Rangappa’s live portfolio showcasing responsive web design, Red & Blue Team demos, and penetration testing tools. —open to feedback and collaboration.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <Navbar />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
