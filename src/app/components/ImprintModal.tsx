export function ImprintModal({ onClose }: { onClose: () => void }) {
  return (
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
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          maxWidth: "520px",
          width: "90%",
          padding: "48px",
          position: "relative",
          fontFamily: "inter-tight-variable, sans-serif",
          fontWeight: 300,
          color: "#020a0a",
          lineHeight: 1.7,
          fontSize: "16px",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
            color: "#020a0a",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>

        <p style={{ marginBottom: "24px", fontWeight: 400, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "#8d8e8e" }}>
          Imprint &amp; Privacy
        </p>

        <p style={{ marginBottom: "8px", fontWeight: 400 }}>Responsible for the content:</p>

        <p style={{ marginBottom: "24px" }}>
          Steiner Hotelbetriebe GmbH &amp; Co KG<br />
          Kressbrunnenweg 3<br />
          A-6456 Obergurgl<br />
          <a href="mailto:info@austria-bellevue.com" style={{ color: "#020a0a" }}>
            info@austria-bellevue.com
          </a>
        </p>

        <p>
          Please find our data privacy policy{" "}
          <a
            href="https://austria-bellevue.com/austria/en/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#020a0a", textDecoration: "underline" }}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
