import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/header/Menu';
import { Footer } from './components/footer/Footer';
import { Home } from './components/content/Home';
import { Blog } from './components/content/Blog';
import { Companii } from './components/content/Companii';
import { Despre } from './components/content/Despre';
import { Contact } from './components/content/Contact';
import { Omvpetrom } from './components/content/principala/omv/Omvpetrom';
import { Antibiotice } from './components/content/principala/antibiotice/Antibiotice';
import { Bermas } from './components/content/principala/bermas/Bermas';
import { Biofarm } from './components/content/principala/biofarm/Biofarm';
import { Alro } from './components/content/principala/Alro/Alro';
import { Bancatransilvania } from './components/content/principala/Bancatransilvania/Bancatransilvania';
import { Compa } from './components/content/principala/Compa/Compa';
import { Compet } from './components/content/principala/Compet/Compet';
import { Electrica } from './components/content/principala/Electrica/Electrica';
import { Electromagnetica } from './components/content/principala/Electromagnetica/Electromagnetica';
import { Hidroelectrica } from './components/content/principala/Hidroelectrica/Hidroelectrica';
import { Medlife } from './components/content/principala/Medlife/Medlife';
import { Company } from './components/content/principala/SablonCompanii/Company';

import { Nuclearelectrica } from './components/content/principala/Nuclearelectrica/Nuclearelectrica';

import { Oneunitedproperty } from './components/content/principala/Oneunitedproperty/Oneunitedproperty';

import { Purcari } from './components/content/principala/Purcari/Purcari';

import { Romgaz } from './components/content/principala/Romgaz/Romgaz';

import { Teraplast } from './components/content/principala/Teraplast/Teraplast';

import { Transelectrica } from './components/content/principala/Transelectrica/Transelectrica';



function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Menu />
    <div style={{width: '90%', margin: '0 auto'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companii" element={<Companii />} />

        {/*rute catre companiile prezente pe site */}

        <Route path="/omvpetrom" element={<Omvpetrom />} />
        <Route path="/antibiotice" element={<Antibiotice />} />
        <Route path="/bermas" element={<Bermas />} />
        <Route path="/biofarm" element={<Biofarm />} />
        {/* <Route path="/brdgrup" element={<Brdgrup />} /> */}
        <Route path="/brdgrup" element={<Company symbol="BRD"/>} />
        <Route path="/aerostar" element={<Company symbol="ARS"/>} />
        {/* <Route path="/aerostar" element={<Aerostar />} /> */}
        <Route path="/alro" element={<Alro />} />
        <Route path="/bancatransilvania" element={<Bancatransilvania />} />
        <Route path="/compa" element={<Compa />} />
        <Route path="/compet" element={<Compet />} />
        <Route path="/electrica" element={<Electrica />} />
        <Route path="/electromagnetica" element={<Electromagnetica />} />
        <Route path="/hidroelectrica" element={<Hidroelectrica />} />
        <Route path="/medlife" element={<Medlife />} />
        <Route path="/nuclearelectrica" element={<Nuclearelectrica />} />
        <Route path="/oneunitedproperty" element={<Oneunitedproperty />} />
        <Route path="/purcari" element={<Purcari />} />
        <Route path="/romgaz" element={<Romgaz />} />
        <Route path="/teraplast" element={<Teraplast />} />
        <Route path="/transelectrica" element={<Transelectrica />} />


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
