# ESERCIZIO API

WebAPI Autori 📚
Descrizione del progetto
Questo esercizio consiste nella creazione di una WebAPI per la gestione di autori. L'API permette di eseguire operazioni CRUD (Create, Read, Update, Delete) su una raccolta di autori, utilizzando MongoDB come database.

Endpoints disponibili 🚀
GET /authors: Restituisce la lista completa degli autori 📜.
GET /authors/
: Restituisce i dettagli di un singolo autore, identificato dal suo _id 🔍.
POST /authors: Crea un nuovo autore, con i dettagli forniti nel corpo della richiesta ✏️.
PUT /authors/
: Modifica i dati di un autore esistente, identificato dal suo _id 🛠️.
DELETE /authors/
: Elimina l'autore specificato dall'ID fornito 🗑️.
Struttura Autore 🧑‍💻
_id (generato da MongoDB)
nome (stringa)
cognome (stringa)
email (stringa)
data di nascita (stringa)
avatar (stringa)
Tecnologie utilizzate 🛠️
Node.js
Express.js
MongoDB
