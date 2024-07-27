import React from 'react';
import { Link } from 'react-router-dom';


const Companii = () => {
  return (
    <div>
      <p>Companii</p>
      <Link to="/omvpetrom">OMV Petrom</Link>
      <br />
      <Link to="/antibiotice">Antibiotice</Link>
      <br />
      <Link to="/bermas">Bermas</Link>
      <br />
      <Link to="/biofarm">Biofarm</Link>
      <br />
      <Link to="/brdgrup">BRD</Link>
      
    </div>
  );
};

export default Companii;
