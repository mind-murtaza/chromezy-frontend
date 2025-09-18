import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { SiAngular, SiVuedotjs, SiExpress, SiAdobe, SiFigma, SiFlutter, SiKotlin, SiSwift, SiReact, SiPython, SiTableau, SiApachespark, SiDocker, SiKubernetes, SiGooglecloud, SiAmazon } from 'react-icons/si';
import { CONTACT_INFO_DATA } from './constants';

const AzureIcon = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden focusable="false">
        <path fill="currentColor" d="M3 20l9-18l5 9l-6 9H3z" />
        <path fill="currentColor" d="M13 20l8-6l-5-9l-3 15z" opacity=".8" />
    </svg>
);

const PowerBiIcon = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden focusable="false">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="10" width="2" height="6" rx="1" fill="currentColor" />
        <rect x="11" y="9" width="2" height="7" rx="1" fill="currentColor" />
        <rect x="15" y="11" width="2" height="5" rx="1" fill="currentColor" />
    </svg>
);

export const ProductsData = [
    {
        title: 'MVP',
        description:
            'We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.',
        backgroundColor: '#2F41A3',
        image: (
            <Image
                src={'/images/services/products-card-vector-1.webp'}
                width={149.28}
                height={177}
                alt="Image Card"
                className="absolute right-5 top-8"
            />
        ),
    },
    {
        title: 'SaaS',
        description:
            "Take your business to new heights with our all-inclusive SaaS development , delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
        backgroundColor: '#7E2148',
        image: (
            <Image
                src={'/images/services/products-card-vector-2.webp'}
                width={149.28}
                height={177}
                alt="Image Card"
                className="absolute right-5 top-8"
            />
        ),
    },
    {
        title: 'AI',
        description:
            'We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes',
        backgroundColor: '#AA7333',
        image: (
            <Image
                src={'/images/services/products-card-vector-3.webp'}
                width={149.28}
                height={177}
                alt="Image Card"
                className="absolute right-5 top-8"
            />
        ),
    },
    {
        title: 'B2B & B2C Commerce Transformation',
        description:
            'We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.',
        backgroundColor: '#224A38',
        image: (
            <Image
                src={'/images/services/products-card-vector-4.webp'}
                width={149.28}
                height={177}
                alt="Image Card"
                className="absolute right-5 top-8"
            />
        ),
    },
];

export const ClientsData = [
    {
        description:
            "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
        name: 'JEET OBERAI',
        jobTitle: '(Entrepreneur), PayLoan',
        rate: '4.8 / 5',
        project: 'Product Development',
        country: 'Singapore',
        image: (
            <Image
                src={'/images/portfolio/clients/client-logo-2.webp'}
                height={24}
                width={63}
                priority
                alt="PayLoan logo"
                className="h-12 w-auto object-contain"
            />
        ),
    },

    {
        description:
            'They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.',
        name: 'MARC DOLLON',
        jobTitle: 'CTO, MasterStudy',
        rate: '5 / 5',
        project: 'SaaS-Based Cloud ERP',
        country: 'United States',
        image: (
            <Image
                src={'/images/portfolio/clients/client-logo-1.webp'}
                height={40}
                width={140}
                priority
                alt="MasterStudy logo"
                className="h-12 w-auto object-contain"
            />
        ),
    },

    {
        description:
            'Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.',
        name: 'BRANDON LAU',
        jobTitle: '(CEO), KIRI Journey',
        rate: '5 / 5',
        project: 'E-commerce Development',
        country: 'HongKong',
        image: (
            <Image
                src={'/images/portfolio/clients/client-logo-4.webp'}
                height={25}
                width={48}
                priority
                alt="KIRI Journey logo"
                className="h-12 w-auto object-contain"
            />
        ),
    },

    {
        description:
            'We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.',
        name: 'JEFTA MUGWENI',
        jobTitle: '(CEO), Campion Savings Club',
        rate: '5 / 5',
        project: 'Custom CRM MVP Development',
        country: 'Zimbabwe',

        image: (
            <Image
                src={'/images/portfolio/clients/client-logo-3.webp'}
                height={42}
                width={75}
                priority
                alt="Campion Savings Club logo"
                className="h-12 w-auto object-contain"
            />
        ),
    },
];

export const BlogsData = [
    {
        title: 'FinConnect',
        description: 'Customer Relationship Management (CRM)',
        image: (
            <Image
                src={'/images/testimonial/testimonials-card-image-1.webp'}
                fill
                alt="succes story"
                className="object-cover"
            />
        ),
    },
    {
        title: 'HealthSync',
        description: 'Health Tracking App for Patients and Doctors',
        image: (
            <Image
                src={'/images/testimonial/testimonials-card-image-2.webp'}
                fill
                alt="succes story"
                className="object-cover"
            />
        ),
    },
    {
        title: 'Commerce360',
        description: 'Online Store, Multivendor Marketplace & E-commerce Apps',
        image: (
            <Image
                src={'/images/testimonial/testimonials-card-image-3.webp'}
                fill
                alt="succes story"
                className="object-cover"
            />
        ),
    },
    {
        title: 'PrintwithAI',
        description:
            'Web-to-Print Software / Online Design Tool / Product Designer Tool',
        image: (
            <Image
                src={'/images/testimonial/testimonials-card-image-4.webp'}
                fill
                alt="succes story"
                className="object-cover"
            />
        ),
    },
    {
        title: 'PM Insights',
        description: 'Project Management Tool (SaaS & Hosted)',
        image: (
            <Image
                src={'/images/testimonial/testimonials-card-image-5.webp'}
                fill
                alt="succes story"
                className="object-cover"
            />
        ),
    },
];

export const ServicesData = [
    {
        title: 'Web App Development',
        Services: [
            { text: 'React', icon: <SiReact />, iconColor: '#61DAFB' },
            { text: 'Node', icon: <FaNodeJs />, iconColor: '#539E43' },
            { text: 'Angular', icon: <SiAngular />, iconColor: '#DD0031' },
            { text: 'Vue', icon: <SiVuedotjs />, iconColor: '#41B883' },
            { text: 'ExpressJs', icon: <SiExpress />, iconColor: '#888888' },
            { text: 'AdobeXD', icon: <SiAdobe />, iconColor: '#FF2BC2' },
            { text: 'Figma', icon: <SiFigma />, iconColor: '#F24E1E' },
            { text: 'Whimsical' },
        ],
    },
    {
        title: 'Mobile App Development',
        Services: [
            { text: 'Flutter', icon: <SiFlutter />, iconColor: '#02569B' },
            { text: 'Kotlin', icon: <SiKotlin />, iconColor: '#A97BFF' },
            { text: 'Swift', icon: <SiSwift />, iconColor: '#FA7343' },
            { text: 'React Native', icon: <SiReact />, iconColor: '#61DAFB' },
            { text: 'AdobeXD', icon: <SiAdobe />, iconColor: '#FF2BC2' },
            { text: 'Figma', icon: <SiFigma />, iconColor: '#F24E1E' },
        ],
    },
    {
        title: 'E-commerce',
        Services: [
            {
                text: 'Shopify',
            },
            {
                text: 'WooCommerce',
            },
            {
                text: 'Prestashop',
            },
        ],
    },
    {
        title: 'Analytics',
        Services: [
            { text: 'Python', icon: <SiPython />, iconColor: '#3776AB' },
            { text: 'Power BI', icon: <PowerBiIcon />, iconColor: '#F2C811' },
            { text: 'Tableau', icon: <SiTableau />, iconColor: '#E97627' },
            { text: 'Amazon QuickSight' },
            { text: 'Apache Spark', icon: <SiApachespark />, iconColor: '#E25A1C' },
        ],
    },
    {
        title: 'Data & Cloud',
        Services: [
            { text: 'Azure', icon: <AzureIcon />, iconColor: '#0078D4' },
            { text: 'AWS', icon: <SiAmazon />, iconColor: '#FF9900' },
            { text: 'Docker', icon: <SiDocker />, iconColor: '#2496ED' },
            { text: 'Kubernetes', icon: <SiKubernetes />, iconColor: '#326CE5' },
            { text: 'Google Cloud', icon: <SiGooglecloud />, iconColor: '#4285F4' },
            { text: 'Ola Krutrim' },
        ],
    },
];

export const ExploreAIData = [
    {
        title: 'Successful MVP Launches That Changed the Game.',
        description: `Discover the secrets behind game-changing MVP launches! From lean
          startups to industry giants, explore how these innovative launches
          disrupted markets and paved the way for success. Click to uncover the
          strategies that revolutionized product development.`,
        image: 'images/insights/insights-card-image-1.webp',
    },
    {
        title: 'How Our AI Product Development Company is Pioneering Innovation?',
        description: `Discover how our product development company pioneers innovation. From groundbreaking Services to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.`,
        image: 'images/insights/insights-card-image-2.webp',
    },

    {
        title: 'Optimizing E-commerce Sales with AI-Driven Product Recommendations.',
        description: `Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!`,
        image: 'images/insights/insights-card-image-3.webp',
    },
];

/** Social media links with icons - centralized for reuse */
export const socialItems = [
    {
        href: CONTACT_INFO_DATA.SOCIAL_URLS.FACEBOOK,
        label: 'Facebook',
        icon: <FaFacebook />,
    },
    {
        href: CONTACT_INFO_DATA.SOCIAL_URLS.INSTAGRAM,
        label: 'Instagram',
        icon: <FaInstagram />,
    },
    {
        href: CONTACT_INFO_DATA.SOCIAL_URLS.LINKEDIN,
        label: 'LinkedIn',
        icon: <FaLinkedin />,
    },
];
