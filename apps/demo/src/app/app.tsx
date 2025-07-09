import { Route, Routes } from 'react-router-dom';
// importing the component from the library
import { Hero } from '@acme/ui';

export function App() {
  return (
    <>
      <h1>Home</h1>
      <Hero
        title="Welcome @acme/demo"
        subtitle="Build something amazing today"
        cta="Get Started"
      />
    </>
  );
}

export default App;