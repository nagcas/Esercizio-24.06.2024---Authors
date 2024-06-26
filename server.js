// Importazione dei moduli necessari
import express from 'express';
import endpoints from 'express-list-endpoints';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authorRoutes from './routes/authorRoutes.js';

import cors from 'cors';

// Configurazione di dotenv per caricare le variabili d'ambiente dal file .env
dotenv.config(); 

// Creazione di un'applicazione Express
const app = express();

// Middleware per il parsing del JSON nel corpo delle richieste
app.use(express.json());

app.use(cors());

// Connessione a MongoDB utilizzando l'URI presente nelle variabili d'ambiente
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB CONNESSO"))
  .catch((err) => console.error("MONGODB: ERRORE -", err));

// Definizione della porta su cui il server ascolterà, utilizzando le variabili d'ambiente o un valore di default
const PORT = process.env.PORT || 5000;

// Definizione delle rotte per gli autori, prefisso '/authors/'
app.use('/authors/', authorRoutes);

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server acceso sulla porta ${PORT}`);
  console.log('Sono disponibili i seguenti endpoints');
  // Stampa in tabella di tutti gli endpoint disponibili nell'app
  console.table(endpoints(app));
})
