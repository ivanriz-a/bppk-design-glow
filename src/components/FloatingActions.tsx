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
    label: "Kirim Tiket",
    sub: "Kemenkeu Prime 134",
    href: "https://prime.kemenkeu.go.id/",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7z" />
        <path d="M13 5v14" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    sub: "Kemenkeu Prime 134",
    href: "https://wa.me/62134",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.8 9.8 0 0 1-1.5-5.16c0-5.42 4.42-9.83 9.86-9.83 2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.88 6.95c0 5.42-4.42 9.83-9.84 9.83zm5.4-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/>
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
              <span className="fab-contact-text">
                <span>{c.label}</span>
                {"sub" in c && c.sub && <span className="fab-contact-sub">{c.sub}</span>}
              </span>
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
