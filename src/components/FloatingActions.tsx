import { useEffect, useRef, useState } from "react";

type A11yPrefs = {
  scale: number; // 0.9 | 1 | 1.15
  highContrast: boolean;
  grayscale: boolean;
};

const DEFAULT_PREFS: A11yPrefs = { scale: 1, highContrast: false, grayscale: false };
const STORAGE_KEY = "a11y-prefs";

function applyPrefs(prefs: A11yPrefs) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(prefs.scale));
  root.classList.toggle("a11y-high-contrast", prefs.highContrast);
  root.classList.toggle("a11y-grayscale", prefs.grayscale);
}

function FloatingAccessibility() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) } as A11yPrefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    applyPrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const setScale = (s: number) => setPrefs((p) => ({ ...p, scale: s }));
  const reset = () => setPrefs(DEFAULT_PREFS);

  return (
    <div ref={wrapRef} className="fab-wrap fab-left">
      {open && (
        <div className="fab-panel" role="dialog" aria-label="Pengaturan aksesibilitas">
          <div className="fab-panel-title">Aksesibilitas</div>

          <div className="fab-panel-row">
            <span className="fab-panel-label">Ukuran teks</span>
            <div className="fab-seg">
              <button
                type="button"
                className={prefs.scale === 0.9 ? "active" : ""}
                onClick={() => setScale(0.9)}
                aria-label="Perkecil teks"
              >
                A-
              </button>
              <button
                type="button"
                className={prefs.scale === 1 ? "active" : ""}
                onClick={() => setScale(1)}
                aria-label="Ukuran teks normal"
              >
                A
              </button>
              <button
                type="button"
                className={prefs.scale === 1.15 ? "active" : ""}
                onClick={() => setScale(1.15)}
                aria-label="Perbesar teks"
              >
                A+
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`fab-toggle ${prefs.highContrast ? "on" : ""}`}
            onClick={() => setPrefs((p) => ({ ...p, highContrast: !p.highContrast }))}
            aria-pressed={prefs.highContrast}
          >
            <span>Kontras tinggi</span>
            <span className="fab-switch" aria-hidden="true" />
          </button>

          <button
            type="button"
            className={`fab-toggle ${prefs.grayscale ? "on" : ""}`}
            onClick={() => setPrefs((p) => ({ ...p, grayscale: !p.grayscale }))}
            aria-pressed={prefs.grayscale}
          >
            <span>Mode grayscale</span>
            <span className="fab-switch" aria-hidden="true" />
          </button>

          <button type="button" className="fab-reset" onClick={reset}>
            Reset
          </button>
        </div>
      )}

      <button
        type="button"
        className="fab-btn"
        aria-label="Buka menu aksesibilitas"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="1.6" fill="currentColor" stroke="none" />
          <path d="M4 8h16" />
          <path d="M9 8l1 6-1.5 7" />
          <path d="M15 8l-1 6 1.5 7" />
          <path d="M9 14h6" />
        </svg>
      </button>
    </div>
  );
}

const CONTACTS = [
  {
    label: "Kemenkeu Prime 134",
    href: "tel:134",
    external: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Pengaduan via LAPOR!",
    href: "https://www.lapor.go.id/instansi/kementerian-keuangan",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1v-8h3" />
        <path d="M3 11v7a2 2 0 0 0 2 2h1v-8H3" />
      </svg>
    ),
  },
  {
    label: "Pengaduan via WISE",
    href: "https://www.wise.kemenkeu.go.id/",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="fab-wrap fab-right">
      {open && (
        <div className="fab-contact-list" role="menu" aria-label="Kontak dan pengaduan">
          {CONTACTS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              className="fab-contact-item"
              role="menuitem"
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="fab-contact-icon">{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        className="fab-btn fab-btn-primary"
        aria-label="Buka menu kontak dan pengaduan"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function SiteFloatingActions() {
  return (
    <>
      <FloatingAccessibility />
      <FloatingContact />
    </>
  );
}
