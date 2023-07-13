import React, { useState, useEffect } from 'react';
import './Rightbar.css';

function Game() {
  const [randomCountry, setRandomCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    generateNewGame();
  }, []);

  const generateNewGame = () => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.name.common,
          capital: country.capital[0],
        }));

        const randomIndex = Math.floor(Math.random() * countries.length);
        const correctCapital = countries[randomIndex].capital;

        const shuffledOptions = shuffleArray([
          correctCapital,
          ...getRandomCapitals(countries, randomIndex, 3),
        ]);

        setRandomCountry(countries[randomIndex]);
        setOptions(shuffledOptions);
        setMessage('');
      })
      .catch((error) => console.log(error));
  };

  const getRandomCapitals = (countries, excludedIndex, count) => {
    const randomCapitals = [];
    const randomIndexes = [];

    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      if (randomIndex !== excludedIndex && !randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomCapitals.push(countries[randomIndex].capital);
      }
    }

    return randomCapitals;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleOptionSelect = (selectedCapital) => {
    if (selectedCapital === randomCountry.capital) {
      setMessage(<span style={{ color: 'green' }}>Bravo! Correct answer!</span>);
    } else {
      setMessage(<span style={{ color: 'red' }}>Wrong answer! Try again.</span>);
    }
  };

  const handleNewGame = () => {
    generateNewGame();
  };

  return (
    <div>
      {randomCountry && (
        <div>
          <h4>Country: {randomCountry.name}</h4>
         
          {options.map((capital, index) => (
            <button key={index} onClick={() => handleOptionSelect(capital)}>
              {capital}
            </button>
          ))}
          <p>{message}</p>
          <button onClick={handleNewGame}>Joc Nou</button>
        </div>
      )}
    </div>
  );
}

export default Game;
