import React, { useState, useEffect } from 'react';

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
      setMessage('GREATE! Correct answer!');
    } else {
      setMessage('Wrong answer! Try again.');
    }
  };

  const handleNewGame = () => {
    generateNewGame();
  };

  return (
    <div className="game-container mx-auto my-4 px-6 py-4 bg-white border border-gray-300 rounded">
       <h3 class="text-2xl text-center mb-6">Game: Pick the correct capital 🎯</h3>
      {randomCountry && (
        <div>
           <h3 class="text-2xl text-center mb-6">Country: {randomCountry.name}</h3>
          <div className="grid grid-cols-2 gap-4">
            {options.map((capital, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(capital)}
                className="px-4 py-2 bg-ffeddb text-edcdbb rounded hover:bg-e3b7a0 hover:text-white focus:outline-none my-2 px-2 py-1"
                style={{ backgroundColor: '#e2bea2' }}
              >
                {capital}
              </button>
            ))}
          </div>
          <p className={`mt-4 ${message.startsWith('GREATE') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
          <button
            onClick={handleNewGame}
            className="px-4 py-2 bg-ffeddb text-edcdbb rounded hover:bg-e3b7a0 hover:text-white focus:outline-none my-2 px-2 py-1"
            style={{ backgroundColor: '#BF9270' }}
          >
            New game
          </button>
        </div>
      )}
    </div>
  );

}

export default Game;