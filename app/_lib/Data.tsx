import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
        jopTitle: '(Entrepreneur), PayLoan',
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
        jopTitle: 'CTO, MasterStudy',
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
        jopTitle: '(CEO), KIRI Journey',
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
        jopTitle: '(CEO), Campion Savings Club',
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
            {
                text: 'React',
                image: 'React.png',
            },
            {
                text: 'Node',
                image: 'Js.png',
            },
            {
                text: 'Angular',
                image: 'Angular.png',
            },
            {
                text: 'Vue',
                image: 'Vue.png',
            },
            {
                text: 'ExpressJs',
                image: 'Express.png',
            },
            {
                text: 'AdobeXD',
                image: 'Xd.png',
            },
            {
                text: 'Figma',
                image: 'Figma.png',
            },
            {
                text: 'Whimsical',
            },
        ],
    },
    {
        title: 'Mobile App Development',
        Services: [
            {
                text: 'Flutter',
                image: 'Flutter.png',
            },
            {
                text: 'Kotlin',
                image: 'Kotlin.png',
            },
            {
                text: 'swift',
                image: 'Swifth.png',
            },
            {
                text: 'React Native',
                image: 'React.png',
            },
            {
                text: 'AdobeXD',
                image: 'Xd.png',
            },
            {
                text: 'Figma',
                image: 'Figma.png',
            },
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
            {
                text: 'Python',
                image: 'Python.png',
            },
            {
                text: 'PowerBI',
                image: 'PowerBI.png',
            },
            {
                text: 'Tableau',
                image: 'Tableau.png',
            },
            {
                text: 'Amazon QuickSight',
            },
            {
                text: 'Apache Spark',
                image: 'Tableau.png',
            },
        ],
    },
    {
        title: 'Data & Cloud',
        Services: [
            {
                text: 'Azure',
                image: 'Azure.png',
            },
            {
                text: 'AWS',
                image: 'AWS.png',
            },
            {
                text: 'Docker',
                image: 'Docker.png',
            },
            {
                text: 'Kubernetes',
                image: 'Kubernetes.png',
            },
            {
                text: 'Google Cloud',
                image: 'Google Cloud.png',
            },
            {
                text: 'Ola Krutrim',
            },
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

export const socialItems = [
    {
        href: 'https://www.facebook.com/MindfireSolutions',
        label: 'Facebook',
        icon: <FaFacebook />,
    },
    {
        href: 'https://www.instagram.com/mindfiresolutions/',
        label: 'Instagram',
        icon: <FaInstagram />,
    },
    {
        href: 'https://www.linkedin.com/company/mindfire-solutions/',
        label: 'LinkedIn',
        icon: <FaLinkedin />,
    },
];
