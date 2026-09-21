import Image from "next/image";

type Affiliation = {
  name: string;
  logo: string;
  width: number;
};

const affiliations: Affiliation[] = [
  { name: "University of Toronto", logo: "/logos/uoft.svg", width: 20 },
  { name: "Arcadis", logo: "/logos/arcadis.svg", width: 62 },
  { name: "Google DeepMind", logo: "/logos/deepmind.svg", width: 82 },
  { name: "RBC Borealis", logo: "/logos/rbc-borealis.svg", width: 92 },
  { name: "Cash App", logo: "/logos/cashapp.svg", width: 26 },
  { name: "Vector Institute", logo: "/logos/vector.png", width: 62 },
  { name: "MILA", logo: "/logos/mila.png", width: 44 },
];

export function AffiliationStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
      {affiliations.map((a) => (
        <div
          key={a.name}
          title={a.name}
          className="flex h-6 items-center justify-center rounded-md bg-ink/90 px-1.5 py-1 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={a.logo}
            alt={a.name}
            width={a.width}
            height={18}
            style={{ width: a.width, height: "auto", maxHeight: 16 }}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
