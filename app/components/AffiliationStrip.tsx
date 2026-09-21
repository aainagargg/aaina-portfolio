import Image from "next/image";

type Affiliation = {
  name: string;
  logo: string;
  width: number;
};

const affiliations: Affiliation[] = [
  { name: "University of Toronto", logo: "/logos/uoft.svg", width: 16 },
  { name: "Arcadis", logo: "/logos/arcadis.svg", width: 50 },
  { name: "Google DeepMind", logo: "/logos/deepmind.svg", width: 66 },
  { name: "RBC Borealis", logo: "/logos/rbc-borealis.svg", width: 72 },
  { name: "Cash App", logo: "/logos/cashapp.svg", width: 22 },
  { name: "Vector Institute", logo: "/logos/vector.png", width: 50 },
  { name: "MILA", logo: "/logos/mila.png", width: 36 },
];

export function AffiliationStrip() {
  return (
    <div className="flex max-w-[280px] flex-wrap items-center justify-center gap-x-3 gap-y-3">
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
            height={14}
            style={{ width: a.width, height: "auto", maxHeight: 14 }}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
