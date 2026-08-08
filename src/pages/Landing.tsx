import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { LanguageSelector } from '../components/LanguageSelector';
import { Badge } from '../components/Badge';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { LandingFeatureShowcase } from '../components/landing/LandingFeatureShowcase';
import { ThemeToggle } from '../components/ThemeToggle';

export const Landing: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'var(--bg-app)',
    padding: '32px 24px',
    textAlign: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  };

  const heroStyle: React.CSSProperties = {
    maxWidth: '820px',
    margin: '64px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 8vw, 3.6rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    margin: '8px 0',
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      {/* Background Mesh Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'var(--brand-primary-light)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--brand-cyan)',
          opacity: 0.1,
          filter: 'blur(120px)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '300px',
          height: '300px',
          background: 'var(--brand-accent)',
          opacity: 0.05,
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Streamlined Top Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          position: 'relative',
          zIndex: 1,
          padding: '12px 16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 1 }}>
          <TrendingUp size={24} color="var(--brand-primary)" strokeWidth={2.5} />
          <h2
            style={{
              fontWeight: 900,
              margin: 0,
              fontSize: 'clamp(1.2rem, 4vw, 1.7rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text-main)',
            }}
          >
            Biz<span className="text-gradient">Track</span>
          </h2>
        </div>
        <div className="landing-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', flexShrink: 1, maxWidth: '100%' }}>
          <ThemeToggle />
          <LanguageSelector />
          {user ? (
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button variant="primary" style={{ padding: '4px 8px', fontSize: '0.75rem', height: 'auto' }} rightIcon={<ArrowRight size={12} />}>
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="outline" style={{ padding: '4px 8px', fontSize: '0.75rem', height: 'auto' }}>
                  {t('signInButton').replace('', '')}
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" style={{ padding: '4px 8px', fontSize: '0.75rem', height: 'auto' }} rightIcon={<ArrowRight size={12} />}>
                  {t('getStartedFree')}
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ ...heroStyle, position: 'relative', zIndex: 1 }}>
        <Badge
          variant="success"
          showDot
          pulseDot
          style={{ maxWidth: '100%', padding: '8px 16px', fontSize: '0.85rem', whiteSpace: 'normal', textAlign: 'center', height: 'auto', lineHeight: '1.4' }}
        >
          <Sparkles size={14} style={{ marginRight: '6px' }} /> {t('heroBadge')} — Enterprise Grade
          Architecture
        </Badge>

        <h1 style={titleStyle}>
          {t('appTagline')} <span className="text-gradient">Simplified.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {t('heroDesc')} Built with state-of-the-art offline database persistence, real-time sync,
          and enterprise financial ledger tracking.
        </p>

        <div
          className="btn-group-responsive"
          style={{
            marginTop: '32px',
            justifyContent: 'center'
          }}
        >
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button
              variant="primary"
              size="lg"
              style={{ minWidth: '220px' }}
              rightIcon={<ArrowRight size={20} />}
            >
              {t('registerButton')}
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="lg" style={{ minWidth: '180px' }}>
              {t('existingAccount')}
            </Button>
          </Link>
        </div>

        <LandingFeatureShowcase />
      </main>

      {/* Footer */}
      <footer
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.875rem',
          marginTop: '64px',
          padding: '20px 0',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span>{t('footerDesc')}</span>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span>BizTrack © 2026</span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span>Version 0.1.0 (Sprint Ready)</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
