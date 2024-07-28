import React, { useEffect, useRef } from 'react';

export const Graficaerostar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tradingview-widget-script-ars-grafic';
    
    // Verifică și elimină orice script existent
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Adaugă scriptul TradingView
    const script = document.createElement('script');
    script.id = scriptId; // Adaugă un ID unic pentru acest script
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "400",
      symbol: "BVB:ARS",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      hide_legend: true,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
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
    <div className="tradingview-widget-container" style={{ height: '400px', width: '100%' }} ref={containerRef}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};