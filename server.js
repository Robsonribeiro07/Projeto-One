const express = require('express');
const app = express();
const path = require('path');

// Defina a porta do servidor
const port = 8081;

// Defina a rota para servir arquivos estáticos (como HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Rota padrão que serve o arquivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Arquivo padrão
});

// Rota para servir o arquivo de teste
app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste.html')); // Arquivo de teste
});

// O servidor irá escutar em todas as interfaces de rede
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}/`);
    console.log(`Acesse o arquivo de teste em http://0.0.0.0:${port}/teste`);
});