import { useEffect, useState } from "react";
import Clock from "react-live-clock";

export default function Weather({ id, city, lat, lon }) {
  let [temperature, setTemperature] = useState(null);
  let [timezone, setTimezone] = useState(null);
  let [clouds, setClouds] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [visibility, setVisibility] = useState(null);
  let [pressure, setPressure] = useState(null);
  let [windspeed, setWindspeed] = useState(null);
  let [icon, setIcon] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lang=en&lat=${lat}&lon=${lon}&appid=e203317f0df5474c05874e35b030eda3`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimezone(data.timezone);
        setPressure(data.current.pressure);
        setTemperature(Math.round(data.current.temp - 273.15));
        setHumidity(data.current.humidity);
        setTimezone(data.timezone);
        setClouds(data.current.clouds);
        setDesc(data.current.weather[0].description);
        setVisibility(data.current.visibility / 1000);
        setWindspeed(Math.round(data.current.wind_speed));
        setIcon(data.current.weather[0].icon);
      });
  }, [lat, lon]);

  return (
    <div
    className="m-2 flex flex-col items-center p-8 rounded-md dark:text-gray-100"
    >
      
    
      <div className="text-center">
        <h2 className="text-4xl font-semibold ">{city}</h2>
      </div>
      <Clock
        format={"HH:mm:ss"}
        ticking={true}
        timezone={timezone}
        className="text-2xl"
      />
      <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      <p className="text-2xl font-semibold dark:text-gray-400 uppercase text-center">
        {desc}
      </p>
      <div className="pt-2 text-4xl">{temperature}°</div>
      <div className="text-md pt-4 pb-4 px-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <span className="flex space-x-2 items-center">
              <svg
                height="20"
                width="20"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
              </svg>
              <span>{windspeed}km/h</span>
            </span>
            <span className="flex space-x-2 items-center">
              <svg
                height="20"
                width="20"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
              </svg>
              <span>{humidity}%</span>
            </span>
            <span className="flex space-x-2 items-center">
              <svg
                height="20"
                width="20"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M9 4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm0 4a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm12 8a6 6 0 1 1-9-5.191V5a3 3 0 0 1 6 0v5.809A5.992 5.992 0 0 1 21 16zm-3 0a3 3 0 1 0-3 3 3 3 0 0 0 3-3z" />
              </svg>
              <span>{pressure} hPa</span>
            </span>
            <span className="flex space-x-2 items-center">
              <svg
                height="20"
                width="20"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M4.61 16.88c0-1.15.36-2.17 1.08-3.07.72-.9 1.63-1.48 2.74-1.73.31-1.37 1.02-2.49 2.11-3.37s2.35-1.32 3.76-1.32c1.38 0 2.61.43 3.69 1.28s1.78 1.95 2.1 3.29h.33c.9 0 1.73.22 2.49.65s1.37 1.03 1.81 1.79c.44.76.67 1.58.67 2.48a4.94 4.94 0 01-2.36 4.25c-.73.45-1.54.69-2.41.72H9.41c-1.34-.06-2.47-.57-3.4-1.53-.93-.95-1.4-2.1-1.4-3.44zm1.71 0c0 .87.3 1.62.9 2.26s1.33.98 2.19 1.03H20.6c.86-.04 1.59-.39 2.19-1.03.61-.64.91-1.4.91-2.26 0-.88-.33-1.63-.98-2.27-.65-.64-1.42-.96-2.32-.96h-1.6c-.11 0-.17-.06-.17-.18l-.07-.57c-.11-1.08-.58-1.99-1.4-2.72-.82-.73-1.77-1.1-2.86-1.1-1.09 0-2.05.37-2.85 1.1-.81.73-1.27 1.64-1.37 2.72l-.08.57c0 .12-.07.18-.2.18h-.53c-.84.1-1.54.46-2.1 1.07s-.85 1.33-.85 2.16z" />
              </svg>
              <span>{clouds}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    
  );
}
