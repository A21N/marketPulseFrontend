import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/header/Menu';
import { Footer } from './components/footer/Footer';
import { Home } from './components/content/Home';
import { Blog } from './components/content/Blog';
import { Companii } from './components/content/Companii';
import { Despre } from './components/content/Despre';
import { Contact } from './components/content/Contact';
import { Company } from './components/content/principala/SablonCompanii/Company';
import { CompaniiDinBackend } from './components/content/CompaniiDinBackend';



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
        <Route path="/omvpetrom" element={<Company symbol="SNP" graph="SNP"/>} />
        <Route path="/antibiotice" element={<Company symbol="ATB"  graph="ATB" />} />
        <Route path="/bermas" element={<Company symbol="BRM" graph="BRM" />} />
        <Route path="/biofarm" element={<Company  symbol="BIO" graph= "BIO"/>} />
        {/* <Route path="/brdgrup" element={<Brdgrup />} /> */}
        <Route path="/brdgrup" element={<Company symbol="BRD" graph="BRD"/>} />
        <Route path="/aerostar" element={<Company symbol="ARS" graph="ARS"/>} />
        {/* <Route path="/aerostar" element={<Aerostar />} /> */}
        <Route path="/alro" element={<Company symbol="ALR" graph="ALR" />} />
        <Route path="/bancatransilvania" element={<Company symbol="TLV" graph="TLV" />} />
        <Route path="/compa" element={<Company  symbol="CMP" graph="CMP" />} />
        <Route path="/compet" element={<Company symbol="COTE" graph="COTE" />} />
        <Route path="/electrica" element={<Company symbol="EL" graph="EL" />} />
        <Route path="/electromagnetica" element={<Company symbol="ELMA" graph="ELMA" />} />
        <Route path="/hidroelectrica" element={<Company symbol="H2O" graph="H2O" />} />
        <Route path="/medlife" element={<Company symbol="M" graph="M" />} />
        <Route path="/nuclearelectrica" element={<Company  symbol="SNN" graph="SNN"/>} />
        <Route path="/oneunitedproperty" element={<Company symbol="ONE" graph="ONE" />} />
        <Route path="/purcari" element={<Company symbol="WINE" graph="WINE" />} />
        <Route path="/romgaz" element={<Company  symbol="SNG" graph="SNG" />} />
        <Route path="/teraplast" element={<Company  symbol="TRP" graph="TRP"/>} />
        <Route path="/transelectrica" element={<Company symbol="TEL" graph="TEL" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companii_din_backend" element={<CompaniiDinBackend />} />
      </Routes>

      </div>
      <Footer />
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;
