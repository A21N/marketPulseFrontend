import React, { useEffect, useRef } from 'react';

export const Priceteraplast = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Verifică dacă scriptul a fost deja adăugat
    if (!document.getElementById('tradingview-widget-script-trp')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script-trp'; // Adaugă un ID unic pentru acest script
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "BVB:TRP",
        width: 350,
        isTransparent: false,
        colorTheme: "light",
        locale: "en"
      });
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};
