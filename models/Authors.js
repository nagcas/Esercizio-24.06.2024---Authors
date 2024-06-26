// Importazione di Schema e model da mongoose
import { Schema, model } from 'mongoose';

// Definizione dello schema degli autori
const authorsSchema = new Schema (
  {
    // Campo nome: tipo String e obbligatorio
    nome: {
      type: String,
      required: true
    },
    // Campo cognome: tipo String e obbligatorio
    cognome: {
      type: String,
      required: true
    },
    // Campo email: tipo String, obbligatorio e unico
    email: {
      type: String,
      required: true,
      unique: true
    },
    // Campo data: tipo String e obbligatorio
    data: {
      type: String,
      required: true
    },
    // Campo avatar: tipo String e non obbligatorio
    avatar: {
      type: String,
      required: false
    }
  }, 
  {
    timestamps: true
  }
);

// Creazione del modello Author basato sullo schema authorsSchema
const Author = model('Author', authorsSchema);
// Esportazione del modello Author
export default Author;
