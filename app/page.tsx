import Client from '@/app/components/Client';
import ClientsComments from '@/app/sections/ClientsComments';
import ContactUs from '@/app/sections/ContactUs';
import HeroSection from '@/app/sections/HeroSection';
import ExploreAI from '@/app/sections/ExploreAI';
import Products from '@/app/sections/Products';
import Blogs from '@/app/sections/Blogs';
import Services from '@/app/sections/Services';

/**
 * Home page combining all sections into a single scrollable layout.
 */
export default function Home() {
    return (
        <main>
            <HeroSection />
            <Client />
            <Products />
            <ClientsComments />
            <Blogs />
            <Services />
            <ExploreAI />
            <ContactUs />
        </main>
    );
}
