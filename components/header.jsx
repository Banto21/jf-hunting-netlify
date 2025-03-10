import Link from 'next/link';


const navItems = [
    { linkText: 'PL', href: '/' },
    { linkText: 'ENG', href: '/' }

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


            

        </nav>
    );
}
