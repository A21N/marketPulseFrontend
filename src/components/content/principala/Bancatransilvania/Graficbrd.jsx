import React, { useEffect, useRef } from 'react';

export const Graficaerostar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Verifică și elimină orice script existent
    const existingScript = document.getElementById('tradingview-widget-script-ars');
    if (existingScript) {
      existingScript.remove();
    }

    // Adaugă scriptul TradingView
    const script = document.createElement('script');
    script.id = 'tradingview-widget-script-ars';
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
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
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: '400px', width: '100%' }} ref={containerRef}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};
