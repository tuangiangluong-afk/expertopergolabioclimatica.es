import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Experto Pérgola Bioclimática",
        "url": "https://www.expertopergolabioclimatica.es",
        "logo": "https://www.expertopergolabioclimatica.es/logo.png",
        "description": "Red nacional de instaladores profesionales de pérgolas bioclimáticas a medida para terrazas y jardines en España.",
        "sameAs": [],
        "foundingDate": "2020",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ES"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "910 00 00 00",
            "contactType": "customer service",
            "areaServed": "ES",
            "availableLanguage": "Spanish"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertopergolabioclimatica.es/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertopergolabioclimatica.es",
        "name": "expertopergolabioclimatica",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertopergolabioclimatica.es/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalación de Pérgolas Bioclimáticas",
        "provider": { "@type": "Organization", "name": "expertopergolabioclimatica" },
        "areaServed": { "@type": "Country", "name": "España" }
    };

    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.expertopergolabioclimatica.es",
        "name": "Experto Pérgola Bioclimática",
        "description": "Instalación de pérgolas bioclimáticas a medida",
        "inLanguage": "es",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "h1",
                ".hero-description",
                ".faq-answer",
                "article h2",
                "article p:first-of-type",
                ".prose > p:first-child"
            ]
        },
        "isPartOf": {
            "@type": "WebSite",
            "url": "https://www.expertopergolabioclimatica.es",
            "name": "Experto Pérgola Bioclimática"
        }
    };

    return (
        <>
        <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) + '\n' + JSON.stringify(websiteSchema) + '\n' + JSON.stringify(serviceSchema) + '\n' + JSON.stringify(faqSchema) }}
        />

        <Script

            id="webpage-speakable-schema"

            type="application/ld+json"

            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}

        />

        </>
    );
}
