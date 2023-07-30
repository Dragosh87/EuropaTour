import React, { useState } from "react";
import CountryDropdown from "./weather/Country";
import CityDropdown from "./weather/City";
import Weather from "./weather/Weather";
import { Country, City } from "country-state-city";

function Leftbar() {
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [cityIsOpen, setCityIsOpen] = useState(false);
  const [country, setCountry] = useState("IT");
  const [city, setCity] = useState(
    City.getCitiesOfCountry(country).find((it) => it.name === "Rome")
  );

  const europeanCountries = Country.getAllCountries().filter((country) =>
    country.timezones.find((timezone) => timezone.zoneName.includes("Europe")) && City.getCitiesOfCountry(country.isoCode).length > 0
  );

  return (
    
    <div className="Leftbar " style={{ flex: "0 0 20%",  }}>
      
      {/* <div className="Leftfixed" style={{ position: "fixed", top: "7%", left: 0, bottom: "20%", width: "20%" }}> */}
      <h3
        className="text-2xl text-center mb-6"
        style={{
          border: "2px solid #BF9270", // Adaugă un border de 2px solid negru
          margin: "10px", // Adaugă un margin de 10px
          borderRadius: "10px",
        }}
      >
        Embarking on a Journey? <br />
        Discover the Time Zone and Weather in Your Destination
      </h3>
      <CountryDropdown
        id={"country-selector"}
        open={countryIsOpen}
        onToggle={() => setCountryIsOpen(!countryIsOpen)}
        onChange={setCountry}
        countries={europeanCountries}
        selectedValue={europeanCountries.find((opt) => opt.isoCode === country)}
      />
      {country != null && (
        <CityDropdown
          id={"city-selector"}
          open={cityIsOpen}
          onToggle={() => setCityIsOpen(!cityIsOpen)}
          onChange={(city) =>
            setCity(
              City.getCitiesOfCountry(country).find((it) => it.name === city)
            )
          }
          country={country}
          selectedValue={City.getCitiesOfCountry(country).find(
            (opt) => opt === city
          )}
        />
      )}
      {city != null && (
        <Weather
          id="weather-card"
          lat={city.latitude}
          lon={city.longitude}
          city={city.name}
        />
      )}
     
    {/* </div> */}
    
    </div>
  );
}

export default Leftbar;
