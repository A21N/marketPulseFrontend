import React, { useState } from 'react';
import '../../css/App.css';
const SearchableList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const companies = [
        'OMV Petrom',
        'Antibiotice',
        'Bermas',
        'Biofarm',
        'BRD',
        'Aerostar',
        'Alro',
        'Banca Transilvania',
        'Compet',
        'Compa',
        'Electrica',
        'Electromagnetica',
        'Hidroelectrica',
        'Medlife',
        'Nuclearelectrica',
        'OneUnitedProperty',
        'Purcari',
        'Romgaz',
        'Teraplast',
        'Transelectrica'
    ];

    const handleChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCompanies = companies.filter(company =>
        company.toLowerCase().includes(searchTerm)
    );

    return (
        <form id='search-bar'>
            <input 
                type='text' 
                id='search-input' 
                placeholder='Cauta o companie!' 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <ul id='list'>
                {searchTerm ? (
                    filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company, index) => (
                            <li key={index}>{company}</li>
                        ))
                    ) : (
                        <li>Nicio companie găsită</li>
                    )
                ) : (
                    <li>Introduceți un termen de căutare</li>
                )}
            </ul>
        </form>
    );
};

export default SearchableList;
