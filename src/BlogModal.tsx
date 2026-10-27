import React, { useEffect } from 'react';
import { X, Calendar, Clock, Download, ArrowRight, Award, CheckCircle2, UserCheck } from 'lucide-react';
import type { BlogPost } from './blogData';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

const APPOINTMENT_URL = "https://calendar.app.google/UEwvToJLxp8oqrS17";

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 25, 47, 0.75)',
        backdropFilter: 'blur(5px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fafbfc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{
              backgroundColor: 'var(--color-navy-dark, #0d1e3a)',
              color: 'var(--color-gold, #c5a059)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              padding: '0.3rem 0.75rem',
              borderRadius: '999px'
            }}>
              {post.category}
            </span>
            {post.publication && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                color: '#475569',
                backgroundColor: '#e2e8f0',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                fontWeight: 600
              }}>
                <Award size={14} color="#0d1e3a" />
                {post.publication}
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            aria-label="Sluiten"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#64748b',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e2e8f0';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#64748b';
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div style={{
          padding: '2rem 2.5rem',
          overflowY: 'auto',
          lineHeight: '1.75',
          color: '#1e293b'
        }}>
          {/* Metadata bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '0.85rem',
            color: '#64748b',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={15} /> {post.date}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={15} /> {post.readTime}
            </span>
            <span>•</span>
            <span>Auteur: <strong>Prof. Em. ir. Ludo Poelaert</strong></span>
          </div>

          {/* Article Title & Subtitle */}
          <h1 style={{
            fontSize: '1.85rem',
            lineHeight: '1.3',
            color: 'var(--color-navy-dark, #0d1e3a)',
            marginBottom: '0.75rem',
            fontWeight: 800
          }}>
            {post.title}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            fontStyle: 'italic',
            marginBottom: '1.75rem',
            borderLeft: '4px solid var(--color-gold, #c5a059)',
            paddingLeft: '1rem'
          }}>
            {post.subtitle}
          </p>

          {/* Action strip: Download PDF & Plan Kennismaking */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>
              Origineel verschenen in VVT Magazine december 2023
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {post.pdfUrl && (
                <a
                  href={post.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  <Download size={15} />
                  Bekijk Originele PDF
                </a>
              )}
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--color-gold, #c5a059)',
                  color: '#0d1e3a',
                  border: '1px solid var(--color-gold-dark, #a38038)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 700
                }}
              >
                Plan een gratis kennismaking van 20 minuten
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Article Full Content */}
          {post.content ? (
            <div className="article-body">
              <p style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: '1.8', marginBottom: '1.5rem', color: '#1e293b' }}>
                {post.content.introduction}
              </p>

              {post.content.sections.map((section, sIdx) => (
                <div key={sIdx} style={{ marginBottom: '2rem' }}>
                  <h2 style={{
                    fontSize: '1.35rem',
                    color: 'var(--color-navy-dark, #0d1e3a)',
                    marginBottom: '0.85rem',
                    fontWeight: 700
                  }}>
                    {section.heading}
                  </h2>

                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} style={{ marginBottom: '1rem', color: '#334155' }}>
                      {p}
                    </p>
                  ))}

                  {/* Highlight box if present (e.g. 3 Roles) */}
                  {section.highlightBox && (
                    <div style={{
                      backgroundColor: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      margin: '1.5rem 0'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-navy-dark, #0d1e3a)',
                        marginBottom: '1rem',
                        fontWeight: 700
                      }}>
                        {section.highlightBox.title}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {section.highlightBox.points.map((pt, ptIdx) => (
                          <div key={ptIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                              minWidth: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-gold, #c5a059)',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              marginTop: '2px'
                            }}>
                              {ptIdx + 1}
                            </div>
                            <div>
                              <strong style={{ color: 'var(--color-navy-dark, #0d1e3a)', fontSize: '0.98rem' }}>
                                {pt.label}:
                              </strong>{' '}
                              <span style={{ color: '#334155', fontSize: '0.95rem' }}>{pt.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pull quote if present */}
                  {section.quote && (
                    <blockquote style={{
                      margin: '1.75rem 0',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: '#fefce8',
                      borderLeft: '5px solid var(--color-gold, #c5a059)',
                      borderRadius: '0 8px 8px 0',
                      fontStyle: 'italic',
                      color: '#713f12',
                      fontSize: '1.05rem',
                      lineHeight: '1.6'
                    }}>
                      "{section.quote}"
                    </blockquote>
                  )}
                </div>
              ))}

              {/* Takeaways Box */}
              {post.content.takeaways && (
                <div style={{
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginTop: '2rem',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: '#065f46',
                    marginBottom: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <CheckCircle2 size={18} color="#059669" />
                    Belangrijkste Inzichten (Key Takeaways)
                  </h3>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#047857' }}>
                    {post.content.takeaways.map((item, tIdx) => (
                      <li key={tIdx} style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Author note */}
              {post.content.authorNote && (
                <div style={{
                  padding: '1.25rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#475569'
                }}>
                  <UserCheck size={28} color="var(--color-navy-dark, #0d1e3a)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#0f172a' }}>Over de auteur:</strong> {post.content.authorNote}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: '2rem 0', textAlign: 'center', color: '#64748b' }}>
              <p>{post.excerpt}</p>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                Dit artikel wordt momenteel voorbereid voor de volgende maandelijkse publicatieronde.
              </p>
            </div>
          )}

          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0'
          }}>
            {post.tags.map((tag, tIdx) => (
              <span key={tIdx} style={{
                fontSize: '0.75rem',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                fontWeight: 500
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer / CTA */}
        <div style={{
          padding: '1.25rem 2rem',
          backgroundColor: 'var(--color-navy-dark, #0d1e3a)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-gold-light, #deb872)' }}>
              Ervaar je zelf het knagend spanningsveld tussen zorgverlenen en management?
            </div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
              Bespreek jouw praktijksituatie vertrouwelijk en 1-op-1 met Prof. Em. ir. Ludo Poelaert.
            </div>
          </div>
          <a
            href={APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              backgroundColor: 'var(--color-gold, #c5a059)',
              color: '#0d1e3a',
              border: 'none',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Plan een gratis kennismaking van 20 minuten
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
