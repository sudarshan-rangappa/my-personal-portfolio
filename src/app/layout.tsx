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
    metadataBase: new URL('https://www.sudarshanrangappa.in.net'),
    title: "sudo ./portfolio",
    description: "Explore Sudarshan Rangappa’s live portfolio showcasing responsive web design, Red & Blue Team demos, and penetration testing tools. —open to feedback and collaboration.",
    openGraph: {
        title: 'root@sudarshan',
        description: 'Explore Sudarshan Rangappa’s cybersecurity lab with Red Team attacks, Blue Team defense, SIEM dashboards, SOAR workflows, and more. Built for cyber professionals and enthusiasts.',
        url: 'https://www.sudarshanrangappa.in.net/',
        siteName: 'root@sudarshan',
        images: [
            {
                url: '/opengraphss.png',
                width: 1200,
                height: 630,
                alt: 'root@sudarshan – Cybersecurity Portfolio Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'root@sudarshan',
        description: 'Sudarshan Rangappa’s hacker-style portfolio featuring threat emulation, detection engineering, and Blue/Red Team labs.',
        images: ['/opengraphss.png'],
    }
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
