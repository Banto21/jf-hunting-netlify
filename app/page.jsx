import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
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
                <ContextAlert />
                <h1 className="mb-0">JF Hunting – Twoje wyjątkowe doświadczenie łowieckie na całym świecie</h1>
                <p className="text-lg">JF Hunting to biuro polowań, które łączy pasję do tradycyjnego łowiectwa z najwyższymi standardami bezpieczeństwa i komfortu. </p>
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
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
