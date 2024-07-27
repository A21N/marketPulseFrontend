import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/header/Menu';
import { Footer } from './components/footer/Footer';
import { Home } from './components/content/Home';
import { Blog } from './components/content/Blog';
import Companii from './components/content/Companii';
import { Despre } from './components/content/Despre';
import { Contact } from './components/content/Contact';
import { Omvpetrom } from './components/content/principala/omv/Omvpetrom';
import { Antibiotice } from './components/content/principala/antibiotice/Antibiotice';
import { Bermas } from './components/content/principala/bermas/Bermas';
import { Biofarm } from './components/content/principala/biofarm/Biofarm';
import { Brdgrup } from './components/content/principala/brd/Brdgrup';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Menu />
    <div style={{width: '90%', height: '100%' ,margin: '0 auto'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companii" element={<Companii />} />

        <Route path="/omvpetrom" element={<Omvpetrom />} />
        <Route path="/antibiotice" element={<Antibiotice />} />
        <Route path="/bermas" element={<Bermas />} />
        <Route path="/biofarm" element={<Biofarm />} />
        <Route path="/brdgrup" element={<Brdgrup />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      </div>
      <Footer />
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;
