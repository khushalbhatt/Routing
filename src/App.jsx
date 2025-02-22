import { useState, lazy, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./Components/Header'));
const Landing = lazy(() => import('./Components/Landing'));
const Dashboard = lazy(() => import('./Components/Dashboard'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;