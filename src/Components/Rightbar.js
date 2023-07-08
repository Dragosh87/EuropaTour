import React, { useState, useEffect } from 'react';
import './Rightbar.css';

const API_EUR = 'https://restcountries.com/v3.1/region/europe';

function Rightbar() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showGeolocation, setShowGeolocation] = useState(false);
  const [showYouTubePlayer, setShowYouTubePlayer] = useState(false);

  useEffect(() => {
    fetch(API_EUR)
      .then((response) => response.json())
      .then((data) => {
        const countriesWithData = data.map((country) => ({
          ...country,
          youtubeLink: getYouTubeLink(country.name.common),
        }));
        setCountries(countriesWithData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getYouTubeLink = (countryName) => {
      const links = {
      Romania: 'xcDRvhEW-7g',
      Germany: 'xf0byg9qO6o',
      Serbia: 'hlBP5b06_Ok',
      Andorra: 'gFbQ7hXnIvo',
      Ukraine: 'Y0veGCmOul0',
      Norway: '8wURBc_B6VE',
      Jersey: 'apUaujhzCpk',
      Malta: 'Mka4AjU4vrc',
      Belarus: 'U8FWBa0x40o',
      Finland: 'Wl1_uUJrfYg',
      Gibraltar: 'KnLsngMT5Eg',
      "North Macedonia": '1AOpf4YoWmc',
      Austria: 'J_H0BaRab5U',
      Spain: 'L5JORXmV_A0',
      Hungary: 'pHYovykI_1M',
      "Åland Islands": 'DUJikf5a68Q',
      Czechia: 'HHqzkE7VACs',
      Bulgaria: 'HDrCvMnY6p0',
      Sweden: '6zEIvZqs0-Y',
      Montenegro: 'hdOPWI2Ftgg',
      Russia: '_V0hvU4d7-o',
      Estonia: 'gmXrGQxuWnI',
      Luxembourg: '6QoNlVR6I_Y',
      "Faroe Islands": '5mNEDKM62JI',
      Kosovo: 'eUIOL74aAQo',
      'San Marino': 'KLvDb3L1b60',
      Slovakia: 'lCBdcccceiM',
      Netherlands: 'zszHnC4FjwI',
      'Svalbard and Jan Mayen': 'j1B-QSg92r4',
      "United Kingdom": "i_XpQLYV5Zg",
      France: '7uLXIr6KISo',
      Lithuania: 'Q8A__CjIpS0',
      Iceland: 'vzSHcyXfNPw',
      'Vatican City': 'dx5reuzkr48',
      Ireland: 'MZO4B1RZU5g',
      Italy: 'uYFtWVv5F3E', 
      Slovenia: 'lqDMR32jb98',
      Denmark: 'PIfAOPjfIEo',
      Germany: '9T49_LduzpQ',
      Greece: 'lepdqiCF-W8',
      Monaco: 'SVLZTttOO58',
      Croatia: 'A3zSCvf0EPg',
      Guersney: 'nSqnZHDwm2M',
      Albania: 'dB-uSGfQzLU',
      Poland: 'FZb2uCgosdc',
      Latvia: 'EKRvH7J2g2c',
      'Bosnia and Herzegovina': 'g4bU0TGwnkg',
      Portugal: 'WMRwGZ6wr8w',
      Switzerland: 'pfdb6u4HDoQ',
      Belgium: 'GirQzR4BADY',
      'Isle of Man': 'UX5CaDGoqL8',
      Moldova: 'Jsmrv31k88E',
      Cyprus: 'zObJmfkgAmo',
      Liechtenstein: 'lga_M0oBmd4'
    };
  
    if (links[countryName]) {
      return `https://www.youtube.com/embed/${links[countryName]}`;
    } else {
      return null;
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDetails(false);
    setShowGeolocation(false);

    setTimeout(() => {
      setShowDetails(true);

      setTimeout(() => {
        setShowGeolocation(true);
        setShowYouTubePlayer(true);
      }, 500);
    }, 500);
  };

  const handleOpenGoogleMaps = () => {
    if (selectedCountry && selectedCountry.maps.googleMaps) {
      window.open(selectedCountry.maps.googleMaps, '_blank');
    }
  };

  return (
    <div className="Rightbar" style={{ flex: '0 0 20%' }}>
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
          <div className="Geobutton">
            {showGeolocation && (
              <>
                <button onClick={handleOpenGoogleMaps}>Open Google Maps</button>
                
                <div className='youtube'>
                {showYouTubePlayer && selectedCountry.youtubeLink && (
                  <iframe
                    width="375"
                    height="211"
                    src={selectedCountry.youtubeLink}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>

                )}</div>
              </>
            )}
          </div>
        </div>
      )}
      <img
        src="https://cdn.pixabay.com/animation/2023/04/27/02/38/02-38-04-740_512.gif"
        alt="GIF"
        style={{ width: '280px', height: 'auto', margin: '10px' }}
      />
      
    </div>
  );
}

export default Rightbar;
