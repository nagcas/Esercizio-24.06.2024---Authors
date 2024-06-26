# ESERCIZIO API

Creazione di una WebAPI per una applicazione.

### Struttura Autore

```
_id // generato da mongo
nome // stringa
cognome // stringa
email // stringa
data di nascita // stringa
avatar // stringa
```
GET /authors        --> ritorna la lista degli autori
GET /authors/123    --> ritorna il singolo autore
POST /authors       --> crea un nuovo autore
PUT / authors/123   --> modifica l'autore con l'id associato
DELETE /authors/123 --> cancella l'autore con l'id associato

Database utilizzato MongoDB
