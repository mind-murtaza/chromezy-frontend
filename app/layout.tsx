import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Chromezy - Premium Software Agency',
    description:
        'Pixel-perfect, animated frontend built with Next.js 14, TypeScript, and advanced motion libraries.',
    keywords: 'software agency, web development, React, Next.js, TypeScript',
    authors: [{ name: 'Murtaza Lightwala' }],
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
