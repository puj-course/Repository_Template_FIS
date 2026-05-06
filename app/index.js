const express = require('express');
const app = express();

const PORT = 3000;

// Endpoint principal
app.get('/', (req, res) => {
  res.send('Aplicación Node funcionando correctamente');
});

// Endpoint de prueba
app.get('/test', (req, res) => {
  res.json({ status: 'ok', message: 'Ruta de prueba' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});