const express = require('express');
const app = express();
const apiRoutes = require('./routers/index');
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use('/api', apiRoutes);

const connectedServer = app.listen(PORT, ()=>{
  console.log(`Server activo y escuchando en puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message)
});