import Image from "next/image";

type Affiliation = {
  name: string;
  logo: string;
  width: number;
};

const affiliations: Affiliation[] = [
  { name: "University of Toronto", logo: "/logos/uoft.svg", width: 26 },
  { name: "Arcadis", logo: "/logos/arcadis.svg", width: 86 },
  { name: "Google DeepMind", logo: "/logos/deepmind.svg", width: 112 },
  { name: "RBC Borealis", logo: "/logos/rbc-borealis.svg", width: 120 },
  { name: "Cash App", logo: "/logos/cashapp.svg", width: 36 },
  { name: "Vector Institute", logo: "/logos/vector.png", width: 86 },
  { name: "MILA", logo: "/logos/mila.png", width: 60 },
];

export function AffiliationStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {affiliations.map((a) => (
        <div
          key={a.name}
          title={a.name}
          className="flex h-11 items-center justify-center rounded-lg bg-ink/90 px-3 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={a.logo}
            alt={a.name}
            width={a.width}
            height={24}
            style={{ width: a.width, height: "auto", maxHeight: 22 }}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
