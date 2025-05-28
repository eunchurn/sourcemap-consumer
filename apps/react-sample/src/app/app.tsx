import { Suspense, lazy } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';

import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import Card10 from './components/Card10';
import Card11 from './components/Card11';
import Card12 from './components/Card12';

// Lazy load card components
// const Card1 = lazy(() => import('./components/Card1'));
// const Card2 = lazy(() => import('./components/Card2'));
// const Card3 = lazy(() => import('./components/Card3'));
// const Card4 = lazy(() => import('./components/Card4'));
// const Card5 = lazy(() => import('./components/Card5'));
// const Card6 = lazy(() => import('./components/Card6'));
// const Card7 = lazy(() => import('./components/Card7'));
// const Card8 = lazy(() => import('./components/Card8'));
// const Card9 = lazy(() => import('./components/Card9'));
// const Card10 = lazy(() => import('./components/Card10'));
// const Card11 = lazy(() => import('./components/Card11'));
// const Card12 = lazy(() => import('./components/Card12'));

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>여행 카드 갤러리</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Card7 />
          <Card8 />
          <Card9 />
          <Card10 />
          <Card11 />
          <Card12 />
        </Suspense>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
