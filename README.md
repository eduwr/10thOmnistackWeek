# DevRadar (Semana Omnistack - Rocketseat)
DevRadar - Aplicação produzida durante a 10ª Semana Omnistack da Rocketseat


## Getting Started

Estas instruções permitirão copiar o projeto e rodá-lo localmente para propósito de testes e desenvolvimento.

### Pré-requisitos

* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/get-npm)
* [Expo](https://expo.io/)
* [Git](https://git-scm.com/)
* [MongoDB](https://www.mongodb.com/)


### Início

#### Clonar o repositório

Inserir o comando a baixo na pasta desejada para salvar o projeto.

```
git clone [link do repositório]
```

#### Instalando as dependências do backend

No diretório do backend inserir o comando:

```
yarn
```

#### Conectando ao banco de dados

* Deve-se acessar o [MongoDB](https://www.mongodb.com/) através do site e logar em sua conta.
* Após configurar o Cluster copiar o link fornecido pelo MongoDB para conexão e substituir no arquivo 'index.js' conforme a baixo.

```javascript
mongoose.connect(`Link de conexão com o Mongo`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
```

#### Criando uma variável de ambiente (opcional)

* Com o intuito de proteger seus dados pessoais é recomendado criar uma variável de ambiente conforme modelo do arquivo '.env.exemple'.
* Incluir suas credenciais de acesso no arquivo e substituir o nome de '.env.exemple' para '.env'.
* Para acessar esses dados na aplicação deve-se importar a biblioteca dotenv e acessar as variáveis conforme a baixo.

```javascript
require('dotenv/config');

const minhaVariavelDeAmbiente = process.env.NOME_DA_VARIAVEL
```

#### Startando o backend
No diretório do backend inserir o comando:

```
yarn dev
```

#### Instalando as dependências da aplicação web

No diretório web inserir o comando:

```
yarn
```

#### Startando a aplicação web
No diretório web inserir o comando:

```
yarn start
```

#### Instalando as dependências do mobile

No diretório do mobile inserir o comando:

```
yarn
```

#### Startando o app
**Obs: a aplicação mobile só funcionará no dispositivo móvel com o [Expo](https://expo.io/) instalado.**

No diretório do mobile inserir o comando:

```
yarn start
```

Caso esteja rodando no próprio dispositivo, usar o IP fornecido pelo expo ou escanear o QR code fornecido através do aplicativo mobile do expo.


## Principais Ferramentas Utilizadas
* [Express](https://expressjs.com/pt-br/) - Framework utilizado no backend
* [React](https://pt-br.reactjs.org/) - Biblioteca utilizada para o desenvolvimento da aplicação web
* [React-Native](https://facebook.github.io/react-native/) - Bilioteca utilizada no desenvolvimento da aplicação mobile

