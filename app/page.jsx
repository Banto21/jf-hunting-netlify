import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import ImageCarousel from "components/carousel";
import logoCircle_3 from 'public/logo_circle_3.png';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
Nasze polowania odbywają się w najpiękniejszych miejscach na świecie – od malowniczej Afryki, przez dzikie tereny Estonii, po urokliwe lasy Polski. 
Każde z tych miejsc oferuje unikalne możliwości, by przeżyć niezapomniane chwile w zgodzie z naturą i tradycją łowiecką danego regionu.
`;

const preDynamicContentExplainer = `
Jako biuro, które stawia na pełne zadowolenie klienta, dbamy o każdy szczegół, zapewniając profesjonalną obsługę i indywidualne podejście 
do każdego myśliwego. Bezpieczeństwo naszych gości to dla nas priorytet, dlatego wszystkie polowania są starannie zaplanowane 
i realizowane zgodnie z najwyższymi standardami.
`;

const postDynamicContentExplainer = `
W JF Hunting wiemy, że polowanie to nie tylko zdobycz, ale przede wszystkim doświadczenie, które na długo zostaje w pamięci. 
Daj się porwać tej przygodzie – z nami przeżyjesz łowieckie emocje w najpiękniejszych zakątkach świata.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col items-center gap-8 sm:gap-16">
            <div className="h-200px"><Image src={logoCircle_3} height="200px" alt="JFH logo" className="h-100px" /></div>
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">JF Hunting – Twoje wyjątkowe doświadczenie łowieckie na całym świecie</h1>
                <p className="text-2xl">JF Hunting to biuro polowań, które łączy pasję do tradycyjnego łowiectwa z najwyższymi standardami bezpieczeństwa i komfortu. </p>
            </section>
            <section>
                <Markdown content={preDynamicContentExplainer} />
            </section>
            <section>
                <div className="flex justify-center items-center rounded-xl bg-gray-100">
                    <ImageCarousel />
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}

            <section className="flex flex-col py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white mb-8">Kontakt</h2>
                    
                    <div className="flex-col gap-8">
                    
                    <div className="flex items-center justify-center space-x-4">
                    
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-6h2v2h-2zm-1-4h4V7H8v3z" clip-rule="evenodd"/>
                            </svg>
                        
                        <div>
                            <p className="text-2xl font-medium text white">Adres?</p>
                        </div>
                    </div>

                    
                    <div className="flex items-center justify-center space-x-4 mt-8">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M2.75 2a.75.75 0 01.75-.75h13a.75.75 0 01.75.75v16a.75.75 0 01-.75.75h-13a.75.75 0 01-.75-.75V2z" clip-rule="evenodd"/>
                        </svg>
                        <div>
                        <p className="text-2xl font-medium white">(123) 456-7890</p>
                        </div>
                    </div>
                    


                    <div className="mt-8">
                        <div><a href="mailto:info@company.com" className="text-white text-2xl">email@email.com</a></div>
                    </div>
                    </div>
                    


                </div>
                </section>

        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
