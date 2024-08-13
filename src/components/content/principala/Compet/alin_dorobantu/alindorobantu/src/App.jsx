import { Meniu } from './components/Meniu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages_components/Home';
import { Mypath } from './components/pages_components/Mypath';
import { Skills } from './components/pages_components/Skills';
import { Portfolio } from './components/pages_components/Portfolio';
import { Certificates } from './components/pages_components/Certificates';
import { Contact } from './components/pages_components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Meniu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mypath" element={<Mypath />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
