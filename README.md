# Teste Técnico

## Sobre o Teste

Este repositório contém um código que simula o cadastro de descontos para um determinado produto.
Leve em consideração o seguinte registro do time de suporte:

```
 O Cliente alega que criou o desconto com valor incorreto, fez a correção, mas o percentual aplicado é incorreto na hora da venda.
```
### Requisição 1
```typescript
POST /products/019a3b46-54d7-76bf-8753-077cfa8d030a/discounts

{
	"code": "CUPOM10",
	"type": "PERCENTAGE",
	"value": 15
}
```

### Requisição 2
```typescript
POST /products/019a3b46-54d7-76bf-8753-077cfa8d030a/discounts

{
	"code": "CUPOM10",
	"type": "PERCENTAGE",
	"value": 10
}
```
## O que será avaliado

### 1. Levando em consideração a análise do suporte, demonstre como foi o processo que o(a) levou a identificação do problema.

### 2. Crie um teste que garanta que não haverá regressão do problema apresentado.

### 3. Considerando que não existe uma documentação adequada, crie um documento que especifique as regras de negócio envolvidas na criação de um novo desconto.

### 4. Qual foi o seu entendimento geral da estrutura e organização do projeto? Faça suas considerações.
---
## Tecnologias Utilizadas

- **Runtime**: Node.js 22.x
- **Linguagem**: TypeScript
- **Framework Web**: Express.js
- **Validação**: Zod
- **Testes**: Vitest
- **Linting**: ESLint
- **Formatação**: Prettier

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Executar testes
npm test

# Build para produção
npm run build

# Executar em produção
npm start

npm run test
```
