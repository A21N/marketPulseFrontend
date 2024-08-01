import React, { useState } from 'react';
import '../../css/App.css';

const SearchableList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const companies = [
        'Sphera Franchise Group - SFG',
        'AAGES S.A. - AAG',
        'ALUMIL ROM INDUSTRY S.A. - ALU',
        'AQUILA PART PROD COM - AQ',
        'AEROSTAR S.A. - ARS',
        'ARTEGO SA - ARTE',
        'ANTIBIOTICE S.A. - ATB',
        'BIOFARM S.A. - BIO',
        'BRD - GROUPE SOCIETE GENERALE S.A. - BRD',
        'SSIF BRK FINANCIAL GROUP SA - BRK',
        'BERMAS S.A. - BRM',
        'F.I.A.I.R. BET FI Index Invest - BTF',
        'BURSA DE VALORI BUCURESTI SA - BVB',
        'SIF HOTELURI SA - CAOR',
        'CARBOCHIM S.A. - CBC',
        'COMELF S.A. - CMF',
        'COMPA S.A. - CMP',
        'CONPET SA - COTE',
        'CHIMCOMPLEX S.A. BORZESTI - CRC',
        'Digi Communications N.V. - DIGI',
        'TURISM, HOTELURI, RESTAURANTE MAREA NEAGRA S.A. - EFO',
        'ELECTROMAGNETICA SA - ELMA',
        'SOCIETATEA ENERGETICA ELECTRICA S.A. - EL',
        'EVERGENT INVESTMENTS S.A. - EVER',
        'FONDUL PROPRIETATEA - FP',
        'S.P.E.E.H. HIDROELECTRICA S.A. - H2O',
        'IAR SA Brașov - IARV',
        'INFINITY CAPITAL INVESTMENTS S.A. - INFINITY',
        'LION CAPITAL S.A. - LION',
        'OIL TERMINAL S.A. - OIL',
        'ONE UNITED PROPERTIES - ONE',
        'PREFAB SA - PREH',
        'ROMPETROL WELL SERVICES S.A. - PTR',
        'FARMACEUTICA REMEDIA SA - RMAH',
        'ROMCARBON SA - ROCE',
        'SAFETECH INNOVATIONS - SAFE',
        'LION CAPITAL S.A. - SIF1',
        'INFINITY CAPITAL INVESTMENTS S.A. - SIF5',
        'S.N.G.N. ROMGAZ S.A. - SNG',
        'S.N. NUCLEARELECTRICA S.A. - SNN',
        'SANTIERUL NAVAL ORSOVA S.A. - SNO',
        'OMV PETROM S.A. - SNP',
        'SOCEP S.A. - SOCP',
        'TRANSILVANIA BROKER DE ASIGURARE - TBK',
        'TURBOMECANICA S.A. - TBM',
        'C.N.T.E.E. TRANSELECTRICA - TEL',
        'S.N.T.G.N. TRANSGAZ S.A. - TGN',
        'BANCA TRANSILVANIA S.A. - TLV',
        'TRANSILVANIA INVESTMENTS ALLIANCE S.A. - TRANSI',
        'TERAPLAST SA - TRP',
        'TTS (TRANSPORT TRADE SERVICES) - TTS',
        'TURISM FELIX S.A. - TUFE',
        'VRANCART SA - VNC',
        'PURCARI WINERIES PUBLIC COMPANY LIMITED - WINE',
        'SOCEP S.A. - SOCP',
        'LION CAPITAL S.A. - LION',
        'PREFAB SA - PREH',
        'TRANSILVANIA BROKER DE ASIGURARE - TBK',
        'S.N.T.G.N. TRANSGAZ S.A. - TGN',
        'C.N.T.E.E. TRANSELECTRICA - TEL',
        'TURBOMECANICA S.A. - TBM',
        'SANTIERUL NAVAL ORSOVA S.A. - SNO',
        'SAFETECH INNOVATIONS - SAFE',
        'FARMACEUTICA REMEDIA SA - RMAH',
        'ROMPETROL WELL SERVICES S.A. - PTR',
        'PREFAB SA - PREH',
        'ONE UNITED PROPERTIES - ONE',
        'INFINITY CAPITAL INVESTMENTS S.A. - INFINITY',
        'TURISM, HOTELURI, RESTAURANTE MAREA NEAGRA S.A. - EFO',
        'CHIMCOMPLEX S.A. BORZESTI - CRC',
        'CONPET SA - COTE',
        'LION CAPITAL S.A. - LION'
        
    ];

    const handleChange = (event) => {
        setSearchTerm(event.target.value.toUpperCase().trim());
    };

    const filteredCompanies = companies.filter(company =>
        company.toUpperCase().startsWith(searchTerm)
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
                            <li key={index} className='list-term'>{company}</li>
                        ))
                    ) : (
                        <li>Nicio companie nu a fost găsită</li>
                    )
                ) : (
                    <li></li>
                )}
            </ul>
        </form>
    );
};

export default SearchableList;
