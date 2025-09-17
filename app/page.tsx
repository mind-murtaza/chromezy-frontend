import Ads from '@/app/_components/Ads';
import ClientsComments from '@/app/_sections/ClientsComments';
import ContactUs from '@/app/_sections/ContactUs';
import HeroSection from '@/app/_sections/HeroSection';
import ExploreAI from '@/app/_sections/ExploreAI';
import Products from '@/app/_sections/Products';
import Blogs from '@/app/_sections/Blogs';
import Services from '@/app/_sections/Services';

/**
 * Home page combining all sections into a single scrollable layout.
 */
export default function Home() {
    return (
        <main>
            <HeroSection />
            <Ads />
            <Products />
            <ClientsComments />
            <Blogs />
            <Services />
            <ExploreAI />
            <ContactUs />
        </main>
    );
}
