// ========================================
// NATIONAL TARGETS - 39 HIGH-VALUE ZONES
// Pérgolas Bioclimáticas - Couverture Nationale pSEO (Maximized ES)
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    price_start: number;
    top_places: string[];
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
    unique_intro?: string;
    unique_expert_tip?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    {
        slug: "madrid",
        name: "Madrid",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.4168, lng: -3.7038 },
        price_start: 3900,
        top_places: ["Centro","Chamberí","Salamanca","Retiro"],
        zip: "28001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Madrid con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Madrid están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "barcelona",
        name: "Barcelona",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.3851, lng: 2.1734 },
        price_start: 4200,
        top_places: ["Eixample","Gràcia","Sarrià-Sant Gervasi","Les Corts"],
        zip: "08001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Barcelona con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Barcelona, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "valencia",
        name: "Valencia",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 39.4699, lng: -0.3763 },
        price_start: 4100,
        top_places: ["Ruzafa","El Carmen","El Cabanyal","Campanar"],
        zip: "46001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Valencia con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Valencia están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "sevilla",
        name: "Sevilla",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 37.3891, lng: -5.9845 },
        price_start: 4000,
        top_places: ["Triana","Nervión","Los Remedios","Casco Antiguo"],
        zip: "41001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Sevilla con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Sevilla hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "zaragoza",
        name: "Zaragoza",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.6488, lng: -0.8891 },
        price_start: 4100,
        top_places: ["Centro","Delicias","Actur","El Rabal"],
        zip: "50001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Zaragoza con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Zaragoza, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "malaga",
        name: "Málaga",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 36.7213, lng: -4.4214 },
        price_start: 3900,
        top_places: ["La Malagueta","El Palo","Teatinos","Centro Histórico"],
        zip: "29001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Málaga con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Málaga hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "murcia",
        name: "Murcia",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 37.9922, lng: -1.1307 },
        price_start: 3900,
        top_places: ["El Carmen","Vistalegre","La Fama","San Basilio"],
        zip: "30001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Murcia con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Murcia hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "palma",
        name: "Palma",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 39.5696, lng: 2.6502 },
        price_start: 3800,
        top_places: ["Santa Catalina","Son Vida","Paseo Marítimo","Casco Antiguo"],
        zip: "07001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Palma con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Palma están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "las-palmas",
        name: "Las Palmas",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 28.1235, lng: -15.4363 },
        price_start: 3800,
        top_places: ["Vegueta","Triana","Las Canteras","Ciudad Jardín"],
        zip: "35001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Las Palmas con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Las Palmas hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "bilbao",
        name: "Bilbao",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.263, lng: -2.935 },
        price_start: 3900,
        top_places: ["Abando","Indautxu","Casco Viejo","Deusto"],
        zip: "48001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Bilbao con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Bilbao, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "alicante",
        name: "Alicante",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 38.3452, lng: -0.481 },
        price_start: 4100,
        top_places: ["Postiguet","San Juan","Centro","Benalúa"],
        zip: "03001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Alicante con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Alicante hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "cordoba",
        name: "Córdoba",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 37.8882, lng: -4.7794 },
        price_start: 4000,
        top_places: ["Judería","Centro","Ciudad Jardín","Poniente"],
        zip: "14001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Córdoba con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Córdoba hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "valladolid",
        name: "Valladolid",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.6522, lng: -4.7245 },
        price_start: 3800,
        top_places: ["Centro","Parquesol","Delicias","Covaresa"],
        zip: "47001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Valladolid con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Valladolid, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "vigo",
        name: "Vigo",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 42.2406, lng: -8.7207 },
        price_start: 4200,
        top_places: ["Casco Vello","Bouzas","Coia","Teis"],
        zip: "36201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Vigo con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Vigo, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "gijon",
        name: "Gijón",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.5322, lng: -5.6611 },
        price_start: 3800,
        top_places: ["Cimadevilla","Arena","El Llano","Somió"],
        zip: "33201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Gijón con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Gijón, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "hospitalet",
        name: "L'Hospitalet",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.3596, lng: 2.0998 },
        price_start: 3800,
        top_places: ["Centre","Bellvitge","Santa Eulàlia","Collblanc"],
        zip: "08901",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en L'Hospitalet con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de L'Hospitalet, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "vitoria",
        name: "Vitoria-Gasteiz",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 42.8467, lng: -2.6716 },
        price_start: 4000,
        top_places: ["Casco Viejo","Lovaina","San Martín","Zabalgana"],
        zip: "01001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Vitoria-Gasteiz con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Vitoria-Gasteiz, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "coruna",
        name: "A Coruña",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.3623, lng: -8.4115 },
        price_start: 3900,
        top_places: ["Monte Alto","Los Rosales","Riazor","Ciudad Vieja"],
        zip: "15001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en A Coruña con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de A Coruña, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "granada",
        name: "Granada",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 37.1773, lng: -3.5986 },
        price_start: 4000,
        top_places: ["Albaicín","Realejo","Centro","Zaidín"],
        zip: "18001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Granada con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Granada hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "elche",
        name: "Elche",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 38.2669, lng: -0.6984 },
        price_start: 3800,
        top_places: ["Altabix","Centro","Carrús","El Pla"],
        zip: "03201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Elche con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Elche hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "oviedo",
        name: "Oviedo",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.3614, lng: -5.8494 },
        price_start: 3900,
        top_places: ["Centro","La Florida","Pumarín","El Cristo"],
        zip: "33001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Oviedo con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Oviedo, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "badalona",
        name: "Badalona",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.45, lng: 2.2474 },
        price_start: 4100,
        top_places: ["Centre","Gorg","Llefià","Pomar"],
        zip: "08911",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Badalona con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Badalona, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "cartagena",
        name: "Cartagena",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 37.6257, lng: -0.9966 },
        price_start: 4200,
        top_places: ["Casco Antiguo","Ensanche","Los Dolores","San Antón"],
        zip: "30201",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Cartagena con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Cartagena hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "terrassa",
        name: "Terrassa",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.5615, lng: 2.0089 },
        price_start: 4100,
        top_places: ["Centre","Ca n'Aurell","Sant Pere","Les Fonts"],
        zip: "08221",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Terrassa con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Terrassa, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "jerez",
        name: "Jerez",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 36.685, lng: -6.1261 },
        price_start: 3800,
        top_places: ["Centro","La Granja","Norte","Sur"],
        zip: "11401",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Jerez con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Jerez hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "sabadell",
        name: "Sabadell",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 41.5433, lng: 2.1094 },
        price_start: 4100,
        top_places: ["Centre","Creu Alta","Can Rull","Ca n'Oriac"],
        zip: "08201",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Sabadell con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Sabadell, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "mostoles",
        name: "Móstoles",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.3223, lng: -3.8649 },
        price_start: 4100,
        top_places: ["Centro","Norte-Universidad","Sur","Oeste"],
        zip: "28931",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Móstoles con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Móstoles están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "santa-cruz",
        name: "Santa Cruz",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 28.4682, lng: -16.2546 },
        price_start: 3800,
        top_places: ["Centro","Salamanca","Ofra","La Salud"],
        zip: "38001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Santa Cruz con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Santa Cruz hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "pamplona",
        name: "Pamplona",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 42.8125, lng: -1.6458 },
        price_start: 4100,
        top_places: ["Casco Viejo","Ensanche","Iturrama","San Juan"],
        zip: "31001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Pamplona con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Pamplona, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "almeria",
        name: "Almería",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 36.834, lng: -2.4637 },
        price_start: 4000,
        top_places: ["Centro","Nueva Andalucía","Zapillo","Retamar"],
        zip: "04001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Almería con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Almería hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "alcala",
        name: "Alcalá",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.4816, lng: -3.3639 },
        price_start: 3900,
        top_places: ["Casco Histórico","Ensanche","Espartales","El Val"],
        zip: "28801",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Alcalá con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Alcalá están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "fuenlabrada",
        name: "Fuenlabrada",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.2842, lng: -3.7942 },
        price_start: 3900,
        top_places: ["Centro","Loranca","Naranjo","La Avanzada"],
        zip: "28941",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Fuenlabrada con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Fuenlabrada están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "leganes",
        name: "Leganés",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.3283, lng: -3.7635 },
        price_start: 4000,
        top_places: ["Zarzaquemada","San Nicasio","Carrascal","Centro"],
        zip: "28911",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Leganés con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Leganés están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "san-sebastian",
        name: "San Sebastián",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.3183, lng: -1.9812 },
        price_start: 4100,
        top_places: ["Gros","Centro","Antiguo","Amara"],
        zip: "20001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en San Sebastián con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de San Sebastián, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "getafe",
        name: "Getafe",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 40.3083, lng: -3.7327 },
        price_start: 3900,
        top_places: ["Centro","Sector III","Getafe Norte","Bercial"],
        zip: "28901",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Getafe con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Getafe están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
    {
        slug: "burgos",
        name: "Burgos",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 42.3439, lng: -3.6969 },
        price_start: 3900,
        top_places: ["Centro Histórico","Gamonal","San Pedro","G3"],
        zip: "09001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Burgos con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Burgos, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "albacete",
        name: "Albacete",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 38.9942, lng: -1.8585 },
        price_start: 4100,
        top_places: ["Centro","Ensanche","Industria","San Pablo"],
        zip: "02001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Albacete con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "El intenso sol de Albacete hace que las lamas orientables sean perfectas para crear una brisa natural cruzada, reduciendo la sensación térmica sin necesidad de aire acondicionado."
    },
    {
        slug: "santander",
        name: "Santander",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 43.4623, lng: -3.8044 },
        price_start: 4200,
        top_places: ["Sardinero","Centro","Castilla-Hermida","Alisal"],
        zip: "39001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Santander con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Para la zona de Santander, recomendamos instalar sensores de lluvia y nieve que cierran automáticamente las lamas de la pérgola, protegiendo tus muebles de exterior en invierno."
    },
    {
        slug: "castellon",
        name: "Castellón",
        heroTitle: "Pérgolas Bioclimáticas",
        geo: { lat: 39.9864, lng: -0.0513 },
        price_start: 4200,
        top_places: ["Centro","Grao","Este","Oeste"],
        zip: "12001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "Transforma tu terraza o jardín en Castellón con una pérgola bioclimática de aluminio a medida. Gracias a sus lamas orientables motorizadas, podrás disfrutar del exterior durante todo el año, regulando la luz solar y protegiéndote de las inclemencias del tiempo.",
        unique_expert_tip: "Nuestras pérgolas instaladas en Castellón están diseñadas para resistir fuertes vientos y cuentan con un sistema de drenaje de agua integrado en los postes."
    },
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = target.price_start + " €";
    const priceDesc = "Estudio y Presupuesto Gratis";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} en ${target.name}`,
        domain: `${target.slug}.${slug === 'madrid' ? 'localhost' : 'expertopergolabioclimatica.es'}`, 
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "ES",
        region: "España",
        description: `${target.heroTitle} en ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Estudio Gratis",
            "Instaladores Certificados",
            "Garantía Total"
        ],
        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,
        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "Variable"
        },
        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },
        phoneNumber: "900 00 00 00",
        email: "contacto@expertopergolabioclimatica.es",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} en ${target.name} | ${priceDisplay}`,
            description: `${target.heroTitle} ${target.name} ${target.zip}. Soluciones eficientes.`
        },
        unique_intro: target.unique_intro,
        unique_expert_tip: target.unique_expert_tip
    };
}
