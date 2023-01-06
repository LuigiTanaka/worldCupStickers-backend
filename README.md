# World Cup Stickers - back

Back-end do World Cup Stickers, uma aplicação para colecionadores de figurinhas da copa do mundo do Qatar 2022.

Saiba mais sobre em: https://github.com/LuigiTanaka/worldCupStickers-frontend

## Como rodar o projeto em ambiente de desenvolvimento

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
POSTGRES_DB = nome que será atribuído ao banco de dados
```

4. Rode todas as migrations e popule o banco de dados com os dados iniciais

```bash
npm run prisma:test
```

5. Rode o back-end em ambiente de desenvolvimento:

```bash
npm run dev
```

## Como rodar os testes

Após realizar todos os passos anteriores até o item 4:

### Testes unitários (não possui 100% de coverage)

```bash
npm run test:unit
```

### Testes de integração

```bash
npm run test:integration
```
