import Image from 'next/image';
import Link from 'next/link';

/**
 * Logo component navigates to the top of the page when clicked.
 */
export default function Logo() {
  return (
    <Link href="/#Home" aria-label="Home">
      <div className="relative h-[26px] w-[128px] max-lg:h-5 max-lg:w-[100px]">
        <Image
          src="/images/ui/logo.png"
          fill
          alt="Chromezy logo"
          priority
          quality={100}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
