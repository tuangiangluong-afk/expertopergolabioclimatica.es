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
    "Diseño a medida",
    "Aluminio alta calidad",
    "Garantía de instalación"
];
const TEMPLATE_AIDES = [
    "Presupuesto sin compromiso",
    "Proyecto llave en mano"
];
const TEMPLATE_FEATURES = [
    "Lamas motorizadas",
    "Luces LED integradas",
    "Cerramientos opcionales"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertopergolabioclimatica.es",
    city: "España",
    postalCode: "",
    department: "",
    region: "National",
    name: "Experto Pérgola Bioclimática",
    phoneNumber: "910 00 00 00",
    email: "contacto@expertopergolabioclimatica.es",
    targetType: "CONCRETE",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/pergola-hero.png",
    description: "Encuentra instaladores autorizados de pérgolas bioclimáticas en España. Solicita tu estudio gratuito.",
    meta: {
        title: "Experto Pérgola Bioclimática | Presupuestos & Instalación",
        description: "Encuentra instaladores autorizados de pérgolas bioclimáticas en España. Solicita tu estudio gratuito."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "pergola bioclimatica",
    "pergola aluminio"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.22, lng: 2.21 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertopergolabioclimatica.es": _hubConfig,
    "www.expertopergolabioclimatica.es": _hubConfig,
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
