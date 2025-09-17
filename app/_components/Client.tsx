"use client";
import Image from 'next/image';

/**
 * ClientsSection: displays a list of client logos with separators.
 */
export default function ClientsSection() {
  const logos = Array.from({ length: 7 }, (_, i) =>
    `/images/portfolio/clients/client-logo-${i + 1}.webp`
  );

  return (
    <section
      id="Clients"
      aria-label="Our Clients"
      className="flex flex-col items-center gap-20 p-20 max-lg:gap-12 max-md:gap-10 max-md:px-6 max-md:py-10"
    >
      <hr className="w-full border-t border-gray-200 opacity-5" />
      <ul role="list" className="flex flex-wrap items-center justify-center gap-[13px] min-h-[72px] w-full">
        {logos.map((src, idx) => (
          <li key={idx} className="h-[72px] w-[149.1px]">
            <Image
              src={src}
              width={149.1}
              height={72}
              alt={`Client logo ${idx + 1}`}
            />
          </li>
        ))}
      </ul>
      <hr className="w-full border-t border-gray-200 opacity-5" />
    </section>
  );
}
