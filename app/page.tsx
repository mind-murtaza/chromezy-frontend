import { Header } from '@/components/layouts/Header';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black">
            <Header />

            {/* Demo content to test header scroll behavior */}
            <main className="pt-20">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center text-white">
                        <h1 className="mb-4 text-4xl font-bold">
                            Welcome to Chromezy
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            Testing the header component
                        </p>

                        {/* Add some height to test scroll behavior */}
                        <div className="space-y-8">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg bg-gray-800/50 p-8"
                                >
                                    <p className="text-gray-300">
                                        Scroll content section {i + 1} - This
                                        content helps test the header scroll
                                        behavior and responsive design.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
