# World Cup Stickers - back

Back-end do World Cup Stickers, uma aplicação para colecionadores de figurinhas da copa do mundo do Qatar 2022.

Saiba mais sobre em: https://github.com/LuigiTanaka/worldCupStickers-frontend

## Tecnologias

Na construção do back-end dessa aplicação foram utilizadas as seguintes ferramentas e frameworks:
<br>
<div align=left>
<img alt="NODEJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
<img alt="express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />  
<img alt="TS" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="Prisma" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
<img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
<img alt="JWT" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
<img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
</div>

## Como executar o projeto em ambiente de desenvolvimento

1. Clone esse repositório

```bash
git clone https://github.com/LuigiTanaka/worldCupStickers-backend.git
```

2. Instale as dependências

```bash
npm install
```

3. Crie um arquivo .env.test usando como base o arquivo .env.example

```bash
PORT = Número da porta (recomenda-se 5000)
NODE_ENV = test
SALT = Número inteiro (recomenda-se 10)
JWT_SECRET = String qualquer
DATABASE_URL = postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}
POSTGRES_USER = Nome de usuário postgres
POSTGRES_PASSWORD = Senha de usuário postgres
POSTGRES_DB = nome que deseja atribuir ao banco de dados
```

4. Execute todas as migrations e popule o banco de dados com os dados iniciais com o comando:

```bash
npm run prisma:test
```

5. Execute o back-end em ambiente de desenvolvimento:

```bash
npm run dev
```

## Como executar os testes

Após realizar todos os passos anteriores até o item 4:

### Testes unitários (não possui 100% de coverage)

```bash
npm run test:unit
```

### Testes de integração

```bash
npm run test:integration
```
