import Image from "next/image";

type Affiliation = {
  name: string;
  logo: string;
  width: number;
};

const affiliations: Affiliation[] = [
  { name: "University of Toronto", logo: "/logos/uoft.svg", width: 22 },
  { name: "Arcadis", logo: "/logos/arcadis.svg", width: 68 },
  { name: "Google DeepMind", logo: "/logos/deepmind.svg", width: 92 },
  { name: "RBC Borealis", logo: "/logos/rbc.svg", width: 32 },
  { name: "Cash App", logo: "/logos/cashapp.svg", width: 28 },
  { name: "Vector Institute", logo: "/logos/vector.png", width: 68 },
  { name: "MILA", logo: "/logos/mila.png", width: 48 },
];

export function AffiliationStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {affiliations.map((a) => (
        <div
          key={a.name}
          title={a.name}
          className="flex h-11 items-center justify-center rounded-xl border border-line bg-ink/95 px-4 transition-transform hover:-translate-y-0.5"
        >
          <Image
            src={a.logo}
            alt={a.name}
            width={a.width}
            height={22}
            style={{ width: a.width, height: "auto", maxHeight: 20 }}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
