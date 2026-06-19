/**
 * Site Configuration for Expert Béton Décoratif
 */

export interface SiteConfig {
    slug: string;
    domain: string;
    aliases?: string[];
    city: string;
    postalCode: string;
    department: string;
    region: string;
    name: string;
    phoneNumber: string;
    email: string;
    targetType: 'SOLAR' | 'MIXED' | 'PMP' | 'CONCRETE';
    priceRange: 'STANDARD' | 'PREMIUM' | 'LUXE';
    theme: 'premium' | 'trust';
    heroImage: string;
    description: string;
    meta: {
        title: string;
        description: string;
    };
    certifications: string[];
    aidesDisponibles: string[];
    features: string[];
    localKeywords: string[];
    quartiers: string[];
    coproprietes: string[];
    centresCommerciaux: string[];
    ga_id?: string;
    gtm_id?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

const TEMPLATE_CERTIFICATIONS = [
    "Artisans Qualifiés RGE",
    "Garantie Décennale",
    "Matériaux Certifiés NF"
];
const TEMPLATE_AIDES = [
    "Devis gratuits et sans engagement",
    "Étude de faisabilité offerte",
    "Assurance décennale béton incluse"
];
const TEMPLATE_FEATURES = [
    "Devis sous 24h/48h",
    "Grand choix de finitions (désactivé, imprimé, lissé)",
    "Haute résistance & durabilité",
    "Accès camion toupie étudié",
    "Esthétique moderne & personnalisée"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: 'expertopergolabioclimatica.es',
    city: "France",
    postalCode: "",
    department: "",
    region: "National",
    name: 'Experto Pérgola Bioclimática',
    phoneNumber: "01 84 80 00 00",
    email: 'contacto@expertopergolabioclimatica.es',
    targetType: "CONCRETE",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/concrete-hero.webp",
    description: "Le réseau n°1 des poseurs de béton décoratif et désactivé en France. Devis gratuit sous 24h.",
    meta: {
        title: "Expert Béton Décoratif | Béton Désactivé & Imprimé FR",
        description: "Installation de béton désactivé, imprimé, balayé pour terrasses et allées. Devis gratuit."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "pose beton desactive",
    "beton imprime prix m2",
    "pose dalle beton terrasse",
    "artisan beton decoratif",
    "beton lisse garage"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 48.856, lng: 2.352 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertbetondecoratif.com": _hubConfig,
    "www.expertbetondecoratif.com": _hubConfig,
    "home": _hubConfig
};

export const getSiteConfig = (hostnameOrSlug: string): SiteConfig | null => {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');
    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;
    if (SITES[hostname]) return SITES[hostname];
    return _hubConfig;
};

export const getSiteBySlug = (slug: string): SiteConfig | null => Object.values(SITES).find(s => s.slug === slug) || null;
export const getSatelliteSites = (): SiteConfig[] => [];
export const isMainHub = (hostname: string): boolean => true;
export const getHubConfig = (): SiteConfig => _hubConfig;
