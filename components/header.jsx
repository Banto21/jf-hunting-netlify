import Image from 'next/image';
import Link from 'next/link';
import jfhLogo from 'public/logo_white.jpg';
import logoWithText from 'public/logo_with_text.svg';
import logoCircle from 'public/logo_circle.png';
import logoCircle_2 from 'public/logo_circle_2.png';
import logoCircle_3 from 'public/logo_circle_3.png';

const navItems = [
    { linkText: 'PL', href: '/' },
    { linkText: 'ENG', href: '/revalidation' }
    // { linkText: 'Image CDN', href: '/image-cdn' },
    // { linkText: 'Edge Function', href: '/edge' },
    // { linkText: 'Blobs', href: '/blobs' },
    // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex place-self-end flex-wrap max-h-100px text-black  pt-6 pb-12 sm:pt-12 md:pb-10">
            {/* <div className="h-200px"><Image src={logoCircle_3} height="200px" alt="JFH logo" className="h-100px" /></div> */}
    
                 
            {!!navItems?.length && (
                <ul className="flex gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {/* <Link href="/">
                <Image src={jfhLogo} alt="JF Hunting logo" />
            </Link> */}

            

        </nav>
    );
}
