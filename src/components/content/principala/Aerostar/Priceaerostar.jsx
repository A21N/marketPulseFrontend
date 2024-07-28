import React, { useEffect, useRef } from 'react';

export const Priceaerostar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tradingview-widget-script-aerostar-price';

    // Verifică și elimină orice script existent
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Adaugă scriptul TradingView
    const script = document.createElement('script');
    script.id = scriptId; // Adaugă un ID unic pentru acest script
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BVB:ARS",
      width: 350,
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    // Adaugă scriptul în container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup la demontarea componentei pentru a evita scurgerile de memorie
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};