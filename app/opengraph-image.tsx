import { ImageResponse } from "next/og";
import { person, buildWork, distinctions } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090F",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(155,135,245,0.35), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,122,61,0.3), transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#948FA3", fontFamily: "monospace" }}>
            {person.location}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 84,
              fontWeight: 700,
              color: "#F4F2ED",
              letterSpacing: "-0.02em",
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              color: "#F4F2ED",
              opacity: 0.85,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Machine learning engineer and AI governance researcher.
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#FF7A3D", fontStyle: "italic" }}>
              60k+
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#948FA3" }}>people reached</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#9B87F5", fontStyle: "italic" }}>
              {buildWork.length}+
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#948FA3" }}>systems shipped</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#F5C451", fontStyle: "italic" }}>
              {distinctions.length}+
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#948FA3" }}>selective fellowships</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
