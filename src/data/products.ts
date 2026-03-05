export interface Product {
  slug: string;
  name: string;
  tag: string;
  thickness: string;
  size: string;
  finish: string;
  color: string;
  selfHealing: string;
  price: number;
  img: string;
  desc: string;
  shortDesc: string;
  features: string[];
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    slug: "kppf-24",
    name: "KPPF #24",
    tag: "Flagship",
    thickness: "190μm",
    size: "15m × 1.52m",
    finish: "Gloss",
    color: "White & Black vehicles",
    selfHealing: "Without heat — natural sunlight is enough",
    price: 890,
    img: "/images/kppf-24.png",
    shortDesc: "The original KPPF film. Self-healing without heat, anti-yellowing, deep gloss. Created by masters, for masters.",
    desc: "KPPF 24 is a glossy polyurethane paint protection film with 190μm coating thickness. The top layer features self-healing properties that repair minor scratches without heat treatment. Enhanced resistance to road chemicals prevents yellowing, while high elasticity simplifies working with complex body shapes. Thanks to exceptional transparency, the car's color becomes deeper and gains a premium gloss — no additional wax or ceramic coatings needed.",
    features: [
      "Self-healing without heat — scratches disappear from sunlight alone",
      "Anti-yellowing formula — stays clear for years",
      "Deep gloss finish — enhances paint depth and color",
      "High elasticity — conforms to any body shape, forgives positioning errors",
      "Chemical resistance — road salt, reagents, acid rain",
      "No additional treatment needed — no wax or ceramic required",
      "500%+ elongation for complex curves",
      "Temperature range: -40°C to +80°C"
    ],
    specs: {
      "Thickness": "190 microns",
      "Roll Size": "15m × 1.52m (22.8 m²)",
      "Finish": "High gloss",
      "Self-Healing": "Yes, without heat",
      "Recommended For": "White and black vehicles",
      "Elongation": "500%+",
      "Temperature Range": "-40°C to +80°C",
      "Durability": "Up to 7 years"
    }
  },
  {
    slug: "kppf-84",
    name: "KPPF #84",
    tag: "Satin",
    thickness: "190μm",
    size: "15m × 1.52m",
    finish: "Satin",
    color: "Universal — any color",
    selfHealing: "Without heat — self-restoring top layer",
    price: 950,
    img: "/images/kppf-84.png",
    shortDesc: "Satin finish with a rich wet look. Self-healing without heat, universal for all colors. The bold satin statement.",
    desc: "KPPF 84 is a professional polyurethane film with 190μm thickness and a distinctive satin effect finish. It combines a matte surface with a subtle, rich satin sheen — the 'wet satin' look. Self-healing without heat, scratch-resistant during installation, elastic and forgiving. Ideal for those who want something between gloss and matte.",
    features: [
      "Satin finish — rich 'wet satin' look, between gloss and matte",
      "Self-healing without heat — minor scratches vanish naturally",
      "Universal — suitable for any vehicle color",
      "Scratch-resistant during installation",
      "Anti-yellowing — maintains optical clarity",
      "High elasticity for complex surfaces",
      "Chemical and reagent resistant",
      "No additional polishing or coating needed"
    ],
    specs: {
      "Thickness": "190 microns",
      "Roll Size": "15m × 1.52m (22.8 m²)",
      "Finish": "Satin (wet satin effect)",
      "Self-Healing": "Yes, without heat",
      "Recommended For": "All vehicle colors",
      "Elongation": "500%+",
      "Temperature Range": "-40°C to +80°C",
      "Durability": "Up to 7 years"
    }
  },
  {
    slug: "kppf-96",
    name: "KPPF #96",
    tag: "Hard Top",
    thickness: "170μm",
    size: "15m × 1.52m",
    finish: "Gloss",
    color: "White vehicles / Over vinyl",
    selfHealing: "With heat application",
    price: 790,
    img: "/images/kppf-96.png",
    shortDesc: "Hard top coat, exceptional clarity. Perfect for white vehicles and second-layer application over vinyl wraps.",
    desc: "KPPF 96 is a professional polyurethane film with approximately 170μm thickness, featuring a hard top lacquer layer. The gloss finish provides a 'fresh lacquer' visual effect. Specifically designed for white and light-colored vehicles, it also excels as a second layer over vinyl wraps. The hard top means scratches require heat to heal — but the trade-off is exceptional surface hardness and clarity.",
    features: [
      "Hard top lacquer layer — exceptional surface hardness",
      "Scratch healing with heat application (feature, not limitation)",
      "Excellent for vinyl wrap overlay (second layer)",
      "Optimized for white and light vehicles",
      "Anti-yellowing — no discoloration over time",
      "Predictable, easy installation",
      "High transparency preserves paint depth",
      "Chemical and reagent resistant"
    ],
    specs: {
      "Thickness": "170 microns",
      "Roll Size": "15m × 1.52m (22.8 m²)",
      "Finish": "High gloss (hard top coat)",
      "Self-Healing": "With heat application",
      "Recommended For": "White vehicles, vinyl overlay",
      "Elongation": "450%+",
      "Temperature Range": "-40°C to +80°C",
      "Durability": "Up to 5-7 years"
    }
  },
  {
    slug: "kppf-99",
    name: "KPPF #99",
    tag: "Max Protection",
    thickness: "240μm",
    size: "15m × 1.52m",
    finish: "Gloss",
    color: "Universal — any color",
    selfHealing: "Without heat — self-restoring top layer",
    price: 1090,
    img: "/images/kppf-99.png",
    shortDesc: "Maximum 240μm thickness for ultimate protection. Self-healing without heat, universal for all colors. The thickest KPPF.",
    desc: "KPPF 99 is the ultimate protection film with 240μm thickness — the thickest in the KPPF lineup. Despite its thickness, it remains elastic and comfortable to install with a grippy adhesive. Glossy finish, self-healing without heat, universal for any vehicle color. When maximum protection matters.",
    features: [
      "240μm maximum thickness — ultimate stone chip protection",
      "Self-healing without heat — scratches vanish naturally",
      "Universal — suitable for any vehicle color",
      "Elastic despite thickness — comfortable installation",
      "Grippy, reliable adhesive",
      "Deep gloss finish enhances paint depth",
      "Scratch-resistant during installation",
      "High transparency and color saturation"
    ],
    specs: {
      "Thickness": "240 microns",
      "Roll Size": "15m × 1.52m (22.8 m²)",
      "Finish": "High gloss",
      "Self-Healing": "Yes, without heat",
      "Recommended For": "All vehicles, maximum protection",
      "Elongation": "500%+",
      "Temperature Range": "-40°C to +80°C",
      "Durability": "Up to 7+ years"
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
