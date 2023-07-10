import React, {useState} from "react";
import CountryDropdown from './weather/Country'
import CityDropdown from './weather/City'
import Weather from './weather/Weather' 
import {Country, City} from 'country-state-city';

function Leftbar() {
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [cityIsOpen, setCityIsOpen] = useState(false);
  const [country, setCountry] = useState('IT');
  const [city, setCity] = useState(City.getCitiesOfCountry(country).find(it => it.name === 'Rome'));
  return (
    <div className="Leftbar " style={{ flex: '0 0 20%' }}>

                <CountryDropdown
                    id={"country-selector"}
                    open={countryIsOpen}
                    onToggle={() => setCountryIsOpen(!countryIsOpen)}
                    onChange={setCountry}
                    selectedValue={Country.getAllCountries().find(opt => opt.isoCode === country)}
                />
                {country != null &&
                    <CityDropdown
                        id={"city-selector"}
                        open={cityIsOpen}
                        onToggle={() => setCityIsOpen(!cityIsOpen)}
                        onChange={(city) => setCity(City.getCitiesOfCountry(country).find(it => it.name === city))}
                        country={country}
                        selectedValue={City.getCitiesOfCountry(country).find(opt => opt === city)}
                    />
                }
                {city != null &&
                    <Weather
                        id="weather-card"
                        lat={city.latitude}
                        lon={city.longitude}
                        city={city.name}/>


                }

            </div>

  
  );
}

export default Leftbar;