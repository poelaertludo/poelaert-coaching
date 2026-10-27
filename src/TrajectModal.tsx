import { useEffect } from 'react';
import { X } from 'lucide-react';
import { KENNISMAKING_EMAIL, KENNISMAKING_URL, type Traject } from './trajecten';

const STAPPEN = [
  { key: 'kennismaking', titel: 'Kennismaking', badge: '20 min · gratis' },
  { key: 'nulmeting', titel: 'Nulmeting', badge: '' },
  { key: 'sessies', titel: 'Coachingsessies', badge: '' },
  { key: 'opvolging', titel: 'Opvolging', badge: '' },
] as const;

interface Props {
  naam: string;
  image: string;
  traject: Traject;
  onClose: () => void;
}

export default function TrajectModal({ naam, image, traject, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const subject = encodeURIComponent(`Kennismaking (20 min): ${naam}`);
  const body = encodeURIComponent(
    `Beste Prof. Poelaert,\n\nGraag plan ik een gratis kennismaking van 20 minuten rond: ${naam}.\n\nMet vriendelijke groet,`,
  );
  const cta = KENNISMAKING_URL || `mailto:${KENNISMAKING_EMAIL}?subject=${subject}&body=${body}`;
  const external = Boolean(KENNISMAKING_URL);

  return (
    <div className="traject-backdrop" onClick={onClose}>
      <div
        className="traject-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="traject-titel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="traject-close" onClick={onClose} aria-label="Sluiten">
          <X size={24} />
        </button>

        <p className="traject-eyebrow">Coachingtraject</p>
        <h3 id="traject-titel" className="traject-title">{naam}</h3>
        <p className="traject-intro">{traject.intro}</p>

        <a
          className="traject-cta"
          href={cta}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          Plan een gratis kennismaking van 20 minuten
        </a>

        <h4 className="traject-h">Herken je dit?</h4>
        <ul className="traject-herken">
          {traject.herkenbaar.map((h) => (
            <li key={h}>“{h}”</li>
          ))}
        </ul>

        <h4 className="traject-h">Zo werkt het traject</h4>
        <ol className="traject-steps">
          {STAPPEN.map((s, i) => (
            <li key={s.key}>
              <span className="traject-step-nr" aria-hidden="true">{i + 1}</span>
              <div>
                <strong>{s.titel}</strong>
                {s.badge && <span className="traject-badge">{s.badge}</span>}
                <p>{traject.stappen[s.key]}</p>
              </div>
            </li>
          ))}
        </ol>

        {traject.tool && (
          <aside className="traject-tool" aria-label={`Tool: ${traject.tool.naam}`}>
            <span className="traject-tool-badge">Tool in dit traject: {traject.tool.naam}</span>
            <strong>{traject.tool.titel}</strong>
            <p>{traject.tool.tekst}</p>
          </aside>
        )}

        <h4 className="traject-h">Wat je na dit traject kan</h4>
        <ul className="traject-leer">
          {traject.leerdoelen.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <details className="traject-model">
          <summary>Bekijk het gebruikte model</summary>
          <div className="lightbox-brand-tint">
            <img src={image} alt={naam} style={{ width: '100%', height: 'auto' }} />
          </div>
        </details>

        <a
          className="traject-cta"
          href={cta}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          Plan een gratis kennismaking van 20 minuten
        </a>
      </div>
    </div>
  );
}
