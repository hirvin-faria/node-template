import express from 'express';

const app = express();
app.use(express.json());

app.get('/dev', (resquest, response) => {
    response.json(['Servidor de Desenvolvimento Rodando']);
});

app.listen(3000);
