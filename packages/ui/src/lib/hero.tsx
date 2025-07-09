const styles = {
  hero: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '32px',
  },
  button: {
    backgroundColor: '#0066ff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '18px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export function Hero(props: { title: string; subtitle: string; cta: string; onCtaClick?: () => void }) {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>{props.title}</h1>
      <p style={styles.subtitle}>{props.subtitle}</p>
      <button onClick={props.onCtaClick} style={styles.button}>{props.cta}</button>
    </div>
  );
}
