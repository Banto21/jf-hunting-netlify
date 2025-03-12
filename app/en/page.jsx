import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../../components/card';

import { Markdown } from '../../components/markdown';

import ContactForm from "../../components/contact-form-en";
import { getNetlifyContext } from 'utils';
import ImageCarousel from "../../components/carousel";

import logoUpdated from 'public/logo_updated.png';



const preDynamicContentExplainer = `
As an agency that prioritizes customer satisfaction, we take care of every detail, providing professional service 
and an individual approach to each hunter. The safety of our guests is our priority, which is why all hunts are 
carefully planned and conducted in accordance with the highest standards.
`;

const postDynamicContentExplainer = `
At JF Hunting, we know that hunting is not just about the trophy but, above all, the experience that stays in your 
memory for a long time. Embark on this adventure with us – experience the thrill of hunting in the most 
beautiful corners of the world.
`;
const huntingGroups = `We invite Hunting Clubs to cooperate with us.`;
const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col items-center gap-8 sm:gap-16">
            <div className="h-20px"><Image src={logoUpdated} height="200px" alt="JFH logo" className="h-100px" /></div>
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">JF Hunting – Your Unique Hunting Experience Around the World</h1>

            </section>
            <section>
            <p className="text-2xl">JF Hunting is a hunting agency that combines a passion for traditional hunting 
                    with the highest standards of safety and comfort. Our hunts take place in the most beautiful locations 
                    worldwide – from picturesque Africa, through the wild terrains of Estonia, to the charming forests of Poland. 
                    Each of these places offers unique opportunities to experience unforgettable moments in harmony with nature 
                    and the hunting traditions of the region.</p>
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
            <section className="flex flex-col gap-4">
                <Markdown content={huntingGroups} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}

            <ContactForm />
            
            <section className="flex flex-col py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white mb-8">Contact</h2>
                    
                    <div className="flex-col gap-8">                 
                        <div className="flex items-center justify-center space-x-4 mt-8">
                            <div>
                            <p className="text-2xl font-medium white">+48 502 388 219</p>
                            </div>
                        </div>
                    
                        <div className="flex items-center justify-center space-x-4 mt-8">
                            <div><a href="mailto:info@company.com" className="text-white text-2xl">jfhuntingtours@gmail.com</a></div>
                        </div>
               
                        <div className="flex items-center justify-center space-x-4 mt-8">
                            <div><p className="text-2xl font-medium text white">Mierzyn 1b, 64-400 Mierzyn</p></div>
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
