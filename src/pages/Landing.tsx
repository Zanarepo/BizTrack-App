import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { LanguageSelector } from '../components/LanguageSelector';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight, Sparkles, ShieldCheck, Layers, TrendingUp, Smartphone } from 'lucide-react';

export const Landing: React.FC = () => {
  const { t } = useLanguage();

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
    fontSize: '3.6rem',
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    margin: '8px 0',
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      {/* Streamlined Top Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TrendingUp size={30} color="var(--brand-primary)" strokeWidth={2.5} />
          <h2
            style={{
              fontWeight: 900,
              margin: 0,
              fontSize: '1.7rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-main)',
            }}
          >
            Biz<span className="text-gradient">Track</span>
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LanguageSelector />
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="sm">
              {t('signInButton').replace('🚀', '')}
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm" rightIcon={<ArrowRight size={16} />}>
              {t('getStartedFree')}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main style={heroStyle}>
        <Badge
          variant="success"
          showDot
          pulseDot
          style={{ padding: '6px 16px', fontSize: '0.85rem' }}
        >
          <Sparkles size={14} style={{ marginRight: '6px' }} /> {t('heroBadge')} — Enterprise Grade
          Architecture
        </Badge>

        <h1 style={titleStyle}>
          {t('appTagline')} <span className="text-gradient">Simplified.</span>
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
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
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
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

        {/* Interactive Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            width: '100%',
            marginTop: '56px',
            textAlign: 'left',
          }}
        >
          <Card
            title="Instant Ledger"
            subtitle="Offline Dexie Persistence"
            isInteractive
            style={{ padding: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '10px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <Smartphone size={22} color="var(--brand-primary)" />
              <span>Record cash flow instantly even without network connection.</span>
            </div>
          </Card>

          <Card
            title="Audit Security"
            subtitle="Encrypted Recovery"
            isInteractive
            style={{ padding: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '10px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <ShieldCheck size={22} color="var(--brand-cyan)" />
              <span>Multi-factor PIN authorization and bank-grade data peace of mind.</span>
            </div>
          </Card>

          <Card
            title="Executive Growth"
            subtitle="Automated Reporting"
            isInteractive
            style={{ padding: '20px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '10px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <Layers size={22} color="var(--brand-accent)" />
              <span>
                Real-time billing status tags, smart query filters, and clean ledger analytics.
              </span>
            </div>
          </Card>
        </div>
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
