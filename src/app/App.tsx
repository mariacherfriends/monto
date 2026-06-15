import { useEffect, useRef, useState } from "react";
import { HomeWithContent } from "./components/HomeWithContent";
import { MobileWithContent } from "./components/MobileWithContent";
import { translations } from "./translations";
import type { Language } from "./translations";

const DESKTOP_WIDTH = 1920;
const MOBILE_WIDTH = 395;
const MOBILE_BREAKPOINT = 768;

const styles = `
  /* ── Font overrides: map Figma names → Adobe Fonts kit names ── */
  [class*="Waverly_CF"] {
    font-family: waverly-cf, sans-serif !important;
    font-weight: 800;
    font-style: normal;
  }
  [class*="Inter_Tight"] {
    font-family: inter-tight-variable, sans-serif !important;
    font-weight: 400;
    font-style: normal;
  }
  [class*="Inter_Tight:Light"],
  [class*="Inter_Tight\:Light"] {
    font-weight: 300 !important;
  }
  [class*="Inter_Tight:SemiBold"],
  [class*="Inter_Tight\:SemiBold"] {
    font-weight: 600 !important;
  }
  [class*="Playfair_Display"] {
    font-family: playfair-display, serif !important;
    font-style: italic;
    font-weight: 400;
  }

  /* Ticker clipping — clip-path does not block child animations on iOS */
  [data-name="font"],
  [data-name="Font Mobile"] {
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }

  @supports (-moz-appearance: none) {
    [data-name="font"],
    [data-name="Font Mobile"] {
      height: 20px !important;
      max-height: 20px !important;
    }
    [data-name="slider"] {
      line-height: 20px !important;
      height: 20px !important;
      overflow: hidden !important;
      align-items: flex-start !important;
    }
    [data-name="slider"] p {
      line-height: 20px !important;
      height: 20px !important;
      overflow: hidden !important;
    }
  }
`;

function ScaledLayout({
  designWidth,
  children,
}: {
  designWidth: number;
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(() => window.innerWidth / designWidth);
  const [designHeight, setDesignHeight] = useState(8000);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateScale() {
      setScale(window.innerWidth / designWidth);
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  useEffect(() => {
    function measure() {
      if (!innerRef.current) return;
      const currentScale = window.innerWidth / designWidth;
      const footer = innerRef.current.querySelector('[data-name="footer"]');
      if (!footer) return;
      const innerTop = innerRef.current.getBoundingClientRect().top;
      const footerBottom = footer.getBoundingClientRect().bottom;
      const designBottom = (footerBottom - innerTop) / currentScale;
      setDesignHeight(Math.ceil(designBottom) + 40);
    }
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 1200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, [designWidth]);

  return (
    <div style={{ width: "100vw", height: designHeight * scale, overflow: "hidden", position: "relative" }}>
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          height: designHeight,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);
  const [lang, setLang] = useState<Language>("en");

  const content = translations[lang];
  const toggle = () => setLang((l) => (l === "en" ? "de" : "en"));

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{styles}</style>
      {isMobile ? (
        <ScaledLayout designWidth={MOBILE_WIDTH}>
          <MobileWithContent content={content} onToggle={toggle} />
        </ScaledLayout>
      ) : (
        <ScaledLayout designWidth={DESKTOP_WIDTH}>
          <HomeWithContent content={content} onToggle={toggle} />
        </ScaledLayout>
      )}
    </>
  );
}
