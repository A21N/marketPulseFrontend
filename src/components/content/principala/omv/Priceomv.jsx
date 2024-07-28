import React, { useEffect, useRef } from 'react';

export const Priceomv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tradingview-widget-script-price-omv';

    // Verifică și elimină orice script existent
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Adaugă scriptul TradingView
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BVB:SNP",
      width: 350,
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

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
