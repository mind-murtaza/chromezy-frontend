import type { Metadata } from 'next';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import ScrollBallImage from '@/app/_components/ScrollBallImage';
import ScrollTriangleImage from '@/app/_components/ScrollTriangleImage';
import ScrollWhiteBall from '@/app/_components/ScrollWhiteBall';
import '@/app/_styles/globals.css';
import { Sora, Inter } from 'next/font/google';

const SoraFont = Sora({
    subsets: ['latin'],
    display: 'swap',
    variable: '--SoraFont',
});

const InterFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--InterFont',
});

/** Metadata for SEO and social sharing */
export const metadata: Metadata = {
    title: 'Chromezy',
};

/**
 * RootLayout: wraps all pages with header, global animations, content, and footer.
 * @param children React nodes for each page's content.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="overflow-x-hidden scroll-smooth"
            suppressHydrationWarning
        >
            <body
                className={`font-sora h-full overflow-x-hidden bg-[#151A2C] bg-contain text-white ${SoraFont.variable} ${InterFont.variable} antialiased`}
                id="Home"
            >
                <Header />
                <ScrollBallImage />
                <ScrollTriangleImage />
                <ScrollWhiteBall />
                {children}
                <Footer />
            </body>
        </html>
    );
}
