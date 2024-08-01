import React, { useEffect, useRef } from 'react';

export const Graficaerostar = () => {
  const containerRef = useRef(null);

  useEffect(() => {



    if (!document.getElementById('tradingview-widget-script-aerostar')) {
      const scriptAero = document.createElement('script');
      scriptAero.id = 'tradingview-widget-script-aerostar'; 
        scriptAero.type = 'text/javascript';
        scriptAero.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        scriptAero.async = true;
        scriptAero.innerHTML = JSON.stringify({
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
        containerRef.current.appendChild(scriptAero);
      }
    }, []);
  return (
    <div className="tradingview-widget-container" style={{ height: '400px', width: '100%' }} ref={containerRef}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};
