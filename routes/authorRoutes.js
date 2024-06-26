// Importazione del modulo express
import express from 'express';
// Importazione del modello Author
import Author from '../models/Authors.js';

// Creazione di un router Express
const router = express.Router();

// Definizione di una route GET per ottenere tutti gli autori
router.get('/', async (req, res) => {
  try {
    // Trova tutti gli autori nel database
    const authors = await Author.find({});
    // Risponde con l'array di autori in formato JSON
    res.json(authors);
  } catch (err) {
    // Risponde con un errore 500 se c'è un problema
    res.status(500).json({ message: err.message });
  }
});

// Definizione di una route GET per ottenere un autore per ID
router.get('/:id', async (req, res) => {
  try {
    // Trova un autore per ID
    const author = await Author.findById(req.params.id);
    // Se l'autore non è trovato, risponde con un errore 404
    if (!author) {
      return res.status(404).json({ message: 'Utente non presente nel database di Author...' });
    }
    // Risponde con l'autore trovato in formato JSON
    res.json(author);
  } catch (err) {
    // Risponde con un errore 500 se c'è un problema
    res.status(500).json({ message: err.message });
  }
});

// Definizione di una route POST per creare un nuovo autore
router.post('/', async (req, res) => {
  // Creazione di un nuovo oggetto Author con i dati dal corpo della richiesta
  const author = new Author(req.body);
  try {
    // Salva il nuovo autore nel database
    const newAuthor = await author.save();
    // Risponde con l'autore creato e un codice 201 (creato)
    res.status(201).json(newAuthor);
  } catch (err) {
    // Risponde con un errore 400 se c'è un problema
    res.status(400).json({ message: err.message });
  }
});

// Definizione di una route PATCH per aggiornare un autore per ID
router.patch('/:id', async (req, res) => {
  try {
    // Trova e aggiorna l'autore per ID con i dati dal corpo della richiesta
    const updateAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true // Restituisce il documento aggiornato anziché quello vecchio
    });
    // Risponde con l'autore aggiornato in formato JSON
    res.json(updateAuthor);
  } catch (err) {
    // Risponde con un errore 400 se c'è un problema
    res.status(400).json({ message: err.message });
  }
});

// Definizione di una route DELETE per eliminare un autore per ID
router.delete('/:id', async (req, res) => {
  try {
    // Trova e elimina l'autore per ID
    await Author.findByIdAndDelete(req.params.id);
    // Risponde con un messaggio di successo
    res.json({ message: 'Autore eliminato correttamente...' });
  } catch (err) {
    // Risponde con un errore 500 se c'è un problema
    res.status(500).json({ message: err.message });
  }
});

// Esportazione del router
export default router;
