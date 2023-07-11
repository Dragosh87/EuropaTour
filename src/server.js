const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Alte configurații sau rutele backend-ului vor fi adăugate aici

const port = 3000; // sau orice alt port pe care doriți să îl utilizați

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});

// Ruta pentru login
app.post('/login', (req, res) => {
    // Verificați și validați datele de autentificare din req.body
    const { username, password } = req.body;
    // Efectuați verificările necesare și returnați un răspuns adecvat
    if (username === 'admin' && password === 'parola') {
      res.json({ message: 'Autentificare cu succes' });
    } else {
      res.status(401).json({ error: 'Autentificare eșuată' });
    }
  });
  
  // Ruta pentru modificări în backend
  app.post('/modificari', (req, res) => {
    // Verificați și validați cererea de modificări din req.body
    // Efectuați modificările necesare în backend și returnați un răspuns adecvat
    res.json({ message: 'Modificări efectuate cu succes' });
  });