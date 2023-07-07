// import React from 'react';
// import './Rightbar.css';

// function Rightbar() {
//   return (
//     <div className="Rightbar" style={{ flex: '0 0 20%', backgroundColor: 'lightyellow' }}>
//       <p>Rightbar</p>
//       <p>Salut</p>
//     </div>
    


//   );
// }google-maps-button 

// export default Rightbar;
import React, { useState, useEffect } from 'react';
import './Rightbar.css';

const API_EUR = 'https://restcountries.com/v3.1/region/europe';

function Rightbar() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showGeolocation, setShowGeolocation] = useState(false);

  useEffect(() => {
    fetch(API_EUR)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDetails(false);
    setShowGeolocation(false);

    setTimeout(() => {
      setShowDetails(true);

      setTimeout(() => {
        setShowGeolocation(true);
      }, 500); 
    }, 500); 
  };

  const handleOpenGoogleMaps = () => {
    if (selectedCountry && selectedCountry.maps.googleMaps) {
      window.open(selectedCountry.maps.googleMaps, '_blank');
    }
  };

  return (
    <div className="Rightbar" style={{ flex: '0 0 20%'  }}>
      <h3>Explorează țările Europei și descoperă informații interesante</h3>

      <div className="ChooseCountry">
        <select
          value={selectedCountry ? selectedCountry.name.common : ''}
          onChange={(e) => {
            const selectedCountry = countries.find(
              (country) => country.name.common === e.target.value
            );
            handleCountrySelect(selectedCountry);
          }}
        >
          <option value="">Selectează țara</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && showDetails && (
        <div className="CountryDetails">
          <h4>Steagul țării</h4>
          <img src={selectedCountry.flags.svg} alt={selectedCountry.name.common} />
          <h4>Stema</h4>
          <img src={selectedCountry.coatOfArms.svg} alt="Coat of Arms" />
          <h4>Capitala</h4>
          <p>{selectedCountry.capital[0]}</p>
          <h4>Populație</h4>
          <p>{selectedCountry.population}</p>
            <div className='Geobutton'>
          {showGeolocation && (
            <button onClick={handleOpenGoogleMaps}>Open Google Maps</button>
            
          )}
          </div>
        </div>
      )}
      <img src="https://cdn.pixabay.com/animation/2023/04/27/02/38/02-38-04-740_512.gif" alt="GIF" style={{ width: '280px', height: 'auto', margin: "10px" }}/>
    </div>
  );
}

export default Rightbar;