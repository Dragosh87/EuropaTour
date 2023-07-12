import React, { useState } from 'react';

const ModificariForm = () => {
  const [modificari, setModificari] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/modificari', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modificari }),
    });
    const data = await response.json();
    console.log(data); // tratați răspunsul în consecință (afișați mesajul, etc.)
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Introduceți modificările dorite"
        value={modificari}
        onChange={(e) => setModificari(e.target.value)}
      />
      <button type="submit">Trimiteți modificările</button>
    </form>
  );
};

export default ModificariForm;