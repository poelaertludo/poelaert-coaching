import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Award, FileText, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from './blogData';
import BlogModal from './BlogModal';

const APPOINTMENT_URL = "https://calendar.app.google/UEwvToJLxp8oqrS17";

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const featuredPost = BLOG_POSTS.find(p => !p.isUpcoming) || BLOG_POSTS[0];
  const upcomingPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

  return (
    <section id="inzichten" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--color-border, #e2e8f0)', borderBottom: '1px solid var(--color-border, #e2e8f0)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--color-gold-dark, #a38038)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            <BookOpen size={16} />
            Maandelijkse Inzichten &amp; Publicaties
          </div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy-dark, #0d1e3a)', marginBottom: '1rem', lineHeight: '1.25' }}>
            Kennis &amp; Artikels voor Zorgpraktijken en Leiderschap
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Elke maand deelt Prof. Em. ir. Ludo Poelaert concrete inzichten over leiderschap, praktijkvoering, delegatie en financieel beheer. Gebaseerd op meer dan 21 jaar praktijkcoaching in de medische en zakelijke sector.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredPost && (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '2px solid var(--color-gold, #c5a059)',
            boxShadow: '0 20px 40px -15px rgba(13, 30, 58, 0.08)',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              padding: '2.5rem'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
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
                    {featuredPost.category}
                  </span>
                  {featuredPost.publication && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      color: '#0d1e3a',
                      backgroundColor: '#fef3c7',
                      border: '1px solid #fde68a',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}>
                      <Award size={14} color="#b45309" />
                      {featuredPost.publication}
                    </span>
                  )}
                </div>

                <h3 
                  onClick={() => setSelectedPost(featuredPost)}
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--color-navy-dark, #0d1e3a)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.3',
                    cursor: 'pointer',
                    fontWeight: 800
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-dark, #a38038)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-navy-dark, #0d1e3a)'}
                >
                  {featuredPost.title}
                </h3>

                <p style={{
                  fontSize: '1.02rem',
                  color: '#475569',
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                  lineHeight: '1.5'
                }}>
                  {featuredPost.subtitle}
                </p>

                <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.98rem', marginBottom: '1.5rem' }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  fontSize: '0.85rem',
                  color: '#64748b',
                  marginBottom: '1.75rem'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={15} /> {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={15} /> {featuredPost.readTime}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSelectedPost(featuredPost)}
                    className="btn btn-accent"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.92rem',
                      padding: '0.7rem 1.4rem',
                      backgroundColor: 'var(--color-gold, #c5a059)',
                      color: '#0d1e3a',
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(197, 160, 89, 0.3)'
                    }}
                  >
                    Lees het volledige artikel
                    <ArrowRight size={16} />
                  </button>

                  {featuredPost.pdfUrl && (
                    <a
                      href={featuredPost.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.92rem',
                        padding: '0.7rem 1.25rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#334155',
                        fontWeight: 600,
                        borderRadius: '8px',
                        textDecoration: 'none'
                      }}
                    >
                      <FileText size={16} />
                      Originele PDF (VVT)
                    </a>
                  )}
                </div>
              </div>

              {/* Callout Card inside featured item */}
              <div style={{
                backgroundColor: '#0d1e3a',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(197, 160, 89, 0.3)'
              }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-gold-light, #deb872)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1rem'
                  }}>
                    <Sparkles size={16} /> Kernboodschap uit het artikel
                  </div>
                  <h4 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1.25rem', lineHeight: '1.4' }}>
                    "Zorg … leid en delegeer."
                  </h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    De tandarts-praktijkhouder verenigt drie rollen in één persoon: <strong>zorgverlener</strong>, <strong>leider</strong> en <strong>manager</strong>. 
                    Wie de operationele managementrol durft over te dragen aan medewerkers, ervaart een zalige rust in het hoofd en creëert een win-win-win voor praktijk, medewerkers én patiënten.
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                  <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '0.75rem' }}>
                    Wil je de 3 rollen en het delegeermodel toepassen in jouw groepspraktijk?
                  </div>
                  <a
                    href={APPOINTMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      padding: '0.65rem 1rem',
                      backgroundColor: 'var(--color-gold, #c5a059)',
                      color: '#0d1e3a',
                      fontWeight: 700,
                      borderRadius: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    Plan een gratis kennismaking van 20 minuten
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Calendar / Upcoming Monthly Articles */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy-dark, #0d1e3a)', fontWeight: 700 }}>
                Aankomende Maandelijkse Artikels
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
                Elke maand verschijnt een nieuw diepgaand artikel rond leiderschap en praktijkvoering.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.75rem'
          }}>
            {upcomingPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{
                      backgroundColor: '#f1f5f9',
                      color: 'var(--color-navy-dark, #0d1e3a)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px'
                    }}>
                      {post.category}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#a38038',
                      backgroundColor: '#fefce8',
                      border: '1px solid #fef08a',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}>
                      {post.date}
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '1.15rem',
                    color: 'var(--color-navy-dark, #0d1e3a)',
                    lineHeight: '1.35',
                    marginBottom: '0.6rem',
                    fontWeight: 700
                  }}>
                    {post.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.72rem',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        color: '#64748b',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--color-gold-dark, #a38038)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    Bekijk samenvatting →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Article Modal */}
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </section>
  );
};

export default BlogSection;
