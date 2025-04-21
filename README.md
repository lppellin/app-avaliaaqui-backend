# AvaliaAqui Backend

Este é o backend do projeto **AvaliaAqui**, desenvolvido em **TypeScript**. O projeto utiliza a biblioteca **TypeORM** para manipulação de banco de dados e outras dependências populares para funcionalidade de autenticação e logging.

## Funcionalidades Principais

- **Autenticação**: Implementada com `jsonwebtoken` e `bcrypt`.
- **Envio de E-mails**: Utilizando `nodemailer`.
- **Banco de Dados**: Gerenciado por `TypeORM`, com suporte para migrações.
- **Logging**: Configurado com `winston`.
- **CORS**: Gerenciamento de políticas de origem cruzada com `cors`.

## Tecnologias Utilizadas

- **TypeScript**
- **Node.js** (Versão mínima: 18.x)
- **Express.js**
- **PostgreSQL** (via `pg`)

## Como Executar

1. Clone o repositório:
   `git clone  https://github.com/lppellin/app-avaliaaqui-backend.git`
  
3. Instale as dependências:
  `npm install`
4. Inicie o aplicativo:
  `npm start`
