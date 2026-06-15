import { createPortal } from "react-dom";

export function ImprintModal({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          width: "min(860px, 100%)",
          minHeight: "50vh",
          padding: "80px 100px",
          position: "relative",
          fontFamily: "inter-tight-variable, sans-serif",
          fontWeight: 300,
          color: "#020a0a",
          lineHeight: 1.8,
          fontSize: "18px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "32px",
            right: "40px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "28px",
            color: "#020a0a",
            lineHeight: 1,
            fontWeight: 300,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Eyebrow */}
        <p style={{ marginBottom: "48px", fontWeight: 600, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#8d8e8e" }}>
          Imprint &amp; Privacy
        </p>

        {/* Imprint */}
        <p style={{ marginBottom: "12px", fontWeight: 400, fontSize: "18px" }}>
          Responsible for the content:
        </p>
        <p style={{ marginBottom: "48px", fontSize: "18px" }}>
          Steiner Hotelbetriebe GmbH &amp; Co KG<br />
          Kressbrunnenweg 3<br />
          A-6456 Obergurgl<br />
          <a href="mailto:info@austria-bellevue.com" style={{ color: "#020a0a", textDecoration: "underline" }}>
            info@austria-bellevue.com
          </a>
        </p>

        {/* Privacy */}
        <p style={{ marginBottom: "48px", fontSize: "18px" }}>
          Please find our data privacy policy{" "}
          <a href="https://austria-bellevue.com/austria/en/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "#020a0a", textDecoration: "underline" }}>
            here
          </a>
          .
        </p>

        {/* Credits */}
        <p style={{ marginBottom: "12px", fontWeight: 400, fontSize: "18px" }}>
          Design, Concept, Development:
        </p>
        <p style={{ fontSize: "18px" }}>
          Mariacher and friends Werbeagentur<br />
          <a href="https://mariacher.at" target="_blank" rel="noopener noreferrer" style={{ color: "#020a0a", textDecoration: "underline" }}>
            mariacher.at
          </a>
        </p>
      </div>
    </div>,
    document.body
  );
}
