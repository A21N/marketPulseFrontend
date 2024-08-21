import React, { useState, useEffect } from 'react';

export const CompaniiDinBackend = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch('http://localhost:8000/get_companies')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Company List</h1>
      {companies.length > 0 ? (
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              <h2>{company.name}</h2>
              <p><strong>Ticker:</strong> {company.ticker}</p>
              <p><strong>ISIN:</strong> {company.isin}</p>
              <p><strong>Market:</strong> {company.market}</p>
              {company.description && <p><strong>Description:</strong> {company.description}</p>}
              {company.industry && <p><strong>Industry:</strong> {company.industry}</p>}
              {company.site && <p><strong>Website:</strong> <a href={company.site}>{company.site}</a></p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading companies...</p>
      )}
    </div>
  );
};
