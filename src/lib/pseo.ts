import type { CityConfig } from "@/lib/db";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
}

const REGIONAL_DATA: Record<string, { subsidyName: string; subsidyAmount: string; avgPrice: string; }> = {};

const DEFAULT_REGIONAL = {
    subsidyName: "Diseño a medida",
    subsidyAmount: "Proyecto llave en mano",
    avgPrice: "10.000€ – 25.000€"
};

type SpintaxType = "meta_title" | "meta_description" | "hero_title" | "hero_subtitle" | "cta_primary";
type SpintaxContext = "HUB" | "LOCAL";

const templates: Record<SpintaxType, Record<SpintaxContext, string[]>> = {
    meta_title: {
        HUB: [
            "Las Mejores Pérgolas Bioclimáticas en {city} | Fabricantes",
            "Pérgolas de Aluminio a Medida {city} | Compara Presupuestos",
            "Expertos en Pérgolas Bioclimáticas y Cerramientos en {city}"
        ],
        LOCAL: [
            "Pérgolas Bioclimáticas a Medida en {city} | Instaladores Premium",
            "Tu Pérgola de Aluminio en {city} | Diseño y Elegancia",
            "Instalación de Pérgolas Bioclimáticas de Lujo en {city}"
        ]
    },
    meta_description: {
        HUB: [
            "Encuentra los mejores fabricantes e instaladores de pérgolas bioclimáticas en {city}. Compara precios para transformar tu terraza o jardín.",
            "Directorio de especialistas en cerramientos y pérgolas de aluminio en {city}. Solicita hasta 3 diseños y presupuestos sin compromiso."
        ],
        LOCAL: [
            "Transforma el exterior de tu chalet en {city}. Instalación de pérgolas bioclimáticas de aluminio con lamas orientables y motorizadas. Calidad premium.",
            "Disfruta de tu terraza todo el año en {city}. Pérgolas a medida, cerramientos de cristal e iluminación LED integrada. Presupuesto sin compromiso."
        ]
    },
    hero_title: {
        HUB: [
            "Los Mejores Fabricantes de <span class=\"text-stone-600\">Pérgolas Bioclimáticas</span> en {city}",
            "Pérgolas a Medida en <span class=\"text-stone-600\">{city}</span>: Compara Opciones",
            "Diseña tu Terraza Perfecta en <span class=\"text-stone-600\">{city}</span>"
        ],
        LOCAL: [
            "Instalación de <span class=\"text-stone-600\">Pérgolas Bioclimáticas</span> en {city}",
            "Lujo y Confort para tu Terraza en <span class=\"text-stone-600\">{city}</span>",
            "Expertos en <span class=\"text-stone-600\">Estructuras de Aluminio</span> en {city}"
        ]
    },
    hero_subtitle: {
        HUB: [
            "Conecta con los líderes en cerramientos de exterior. Recibe diseños y presupuestos personalizados para revalorizar tu propiedad.",
            "Protección solar, domótica y diseño vanguardista. Compara precios de empresas especialistas en pérgolas de aluminio."
        ],
        LOCAL: [
            "Lamas orientables motorizadas, iluminación LED y cerramientos de cristal. Crea un nuevo espacio en tu hogar con nuestros acabados de lujo.",
            "Fabricación a medida e instalación impecable en {city}. Convierte tu jardín en un oasis disfrutable los 365 días del año."
        ]
    },
    cta_primary: {
        HUB: ["Solicitar 3 Presupuestos"],
        LOCAL: ["Pedir Presupuesto a Medida"]
    }
};

export async function getPseoContent(cityConfig: CityConfig, isHub: boolean = false): Promise<PseoPageContent> {
    const context: SpintaxContext = isHub ? "HUB" : "LOCAL";
    const cityHash = cityConfig.city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pick = (arr: string[]) => arr[cityHash % arr.length];
    
    const replaceVars = (text: string) => {
        return text
            .replace(/{city}/g, cityConfig.city)
            .replace(/{dept}/g, cityConfig.department || "");
    };

    const regional = DEFAULT_REGIONAL;

    return {
        meta_title: replaceVars(pick(templates.meta_title[context])),
        meta_description: replaceVars(pick(templates.meta_description[context])),
        hero_title: replaceVars(pick(templates.hero_title[context])),
        hero_badge: isHub ? "Diseño a medida" : `Instalador Premium en ${cityConfig.city}`,
        intro_html: replaceVars(pick(templates.hero_subtitle[context])),
        cta_primary: pick(templates.cta_primary[context]),
        pricing_estimated: regional.avgPrice,
        regional_subsidy: "",
        expert_tip: `Revaloriza tu chalet en ${cityConfig.city} con acabados de lujo y domótica integrada.`
    };
}
