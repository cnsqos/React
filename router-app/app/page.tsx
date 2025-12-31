'use client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}