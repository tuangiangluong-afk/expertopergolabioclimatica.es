import { getHubConfig } from "@/lib/sites-config";
import { NATIONAL_TARGETS } from "@/config/national-targets";
import { Zap, Award, ArrowRight, Home, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstallationSteps from "@/components/InstallationSteps";
import PricingTable from "@/components/PricingTable";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Expert Béton Décoratif | Devis Béton Désactivé & Imprimé",
    description: "Trouvez un artisan qualifié pour la réalisation de vos dalles, terrasses et allées de garage en béton désactivé ou imprimé. Devis sous 48h.",
};

export default function HomePage() {
    const hub = getHubConfig();
    const cities = NATIONAL_TARGETS.map(t => ({ name: t.name, slug: t.slug, available: true, department: t.zip.substring(0,2) }));

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Header isHub={true} variant="default" themeColor="amber" />
            <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 -z-10 bg-slate-100 opacity-30" />
                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
                        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
                            <div>
                                <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 mb-6">
                                    <CheckCircle size={16} className="mr-2" />
                                    Devis gratuits & Assurance décennale incluse
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                                    Donnez du cachet à votre extérieur avec le <span className="text-amber-500">Béton Décoratif</span>.
                                </h1>
                                <p className="text-xl text-slate-600 mb-4 max-w-xl mx-auto lg:mx-0">
                                    <strong>Esthétique, durable et sans entretien.</strong> Allée de garage carrossable ou terrasse personnalisée : estimez vos travaux sous 24h/48h.
                                </p>
                            </div>

                            <div className="w-full max-w-xl mx-auto lg:mx-0 relative z-30 text-left">
                                <div id="simulateur" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                                    <div className="p-1 bg-gradient-to-r from-amber-50 to-yellow-400"></div>
                                    <div className="p-6 md:p-8">
                                        <LeadForm
                                            city="France"
                                            domain="expertbetondecoratif.com"
                                            targetType="MIXED"
                                            themeColor="gold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden border bg-white">
                                <Image
                                    src="/images/generated/concrete-hero.webp"
                                    alt="Béton Décoratif"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <InstallationSteps />
            <PricingTable />
            <TestimonialsSection />
            
            {/* Local Cities Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Artisans bétonneurs dans votre ville</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {cities.map((city, idx) => (
                            <Link href={`/ville/${city.slug}`} key={idx} className="p-4 bg-white border rounded-xl hover:border-amber-500 shadow-sm text-center font-semibold text-slate-800">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection />
            <Footer config={hub} />
        </div>
    );
}
