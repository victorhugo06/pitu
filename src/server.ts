import app from './app';
import database from './database';

database.sync();
console.log('Database rodando na porta 3306');

app.listen(3001);
console.log('Server rodando na porta 3001');