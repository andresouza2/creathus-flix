# Programa de Gerenciamento de Filmes

## _Descrição do programa_

Este é um programa para gerenciamento de filmes baseado nas requisições do cliente para:

1. Adicionar um filme;
2. Exibir todos os filmes;
3. Exibir as informações de um filme selecionado;

### _Tecnologias Utilizadas_

1. Front-end
   - React JS
   - Styled-Components
   - TypeScript

2. Back-end
   - Node JS
   - Express
   - Mongoose

3. Banco de Dados
   - MongoDB

Obs.: para utilizar o React foi utilizado o CLI do [vite](https://vitejs.dev/guide/).

## _Passo a passo para a execução do programa_

1.  faça o download dos arquivos no [github](https://github.com/andresouza2/creathus-flix), ou faça os seguintes passos:
    
2. abra o cmd no caminho do diretorio de sua preferência e digite o seguinte comando:

```
$ git init

$ git clone https://github.com/andresouza2/creathus-flix.git
```

3. Abra o diretório backend, abra o cmd e execute o seguinte comando:
```
$ npm install
```
> Esse comando irá baixar todas as dependências necessárias para a execução do servidor do backend.
4. Em seguida execute para o backend começar a funcionar:

```
$ npm start
```

5. Em seguida abra o diretório Frontend, abra o cmd e execute o seguinte comando:

```
$ yarn
```
> Esse comando irá baixar todas as dependências para o funcionamento do fron-end da aplicação.

6. Após baixar todos os pacotes de dependências, execute o comando:

```
$ yarn dev
```

No browse de sua preferência acesse o endereço:
```
http://localhost:3000
```    

### _Como Importar o Banco de dados_

1. Faça download e instale o banco de dados [MongoDB](https://www.mongodb.com/try/download/community);
2. Faça download do Mongo Database Tools [aqui](https://www.mongodb.com/try/download/database-tools);
3. Após as instalações certifique-se de que o banco MongoDB esteja funcionando;
4. Abrindo o CMD no diretorio raiz onde foi baixado todos os arquivos do projeto execute:
```
$ mongoimport movies.json -d creathus -c movies
```
