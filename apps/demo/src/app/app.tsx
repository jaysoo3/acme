import { Route, Routes } from 'react-router-dom';
import { Hero } from '@acme/ui';

export function App() {
  return (
    <>
      <h1>Home</h1>
      <Hero
        title="Wlcome @acme/demo"
        subtitle="Build something amazing today"
        cta="Get Started"
      />
    </>
  );
}

export default App;