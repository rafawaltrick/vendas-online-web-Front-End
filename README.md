# vendas-online-web

## Instalar o node.js 

[Download Node.js](https://nodejs.org/en/download)

## Criar o Projeto com React usando Vite 

[Documentação do Vite](https://vitejs.dev/guide/)

Exucutar: `npm create vite@latest`
```
Need to install the following packages:
  create-vite@4.3.2
Ok to proceed? (y) y
✔ Project name: … vendas-online-web
✔ Target directory "vendas-online-web" is not empty. Remove existing files and continue? … yes
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```
`npm install`, depois `npm run dev`

## Configuração Parcial dos padrões de código

Comandos para instalar o **Prettier** e o **Lint**

Executar: `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier`

Criar na raiz do projeto um arquivo .eslintrc.js e um arquivo .prettier.js

<h3>Lint:</h3> Ele permite configurar regras personalizadas para garantir que o código esteja escrito de acordo com as melhores práticas e padrões definidos pela equipe de desenvolvimento.

O ESLint ajuda a identificar e corrigir problemas como variáveis não utilizadas, erros de formatação, uso incorreto de sintaxe, ausência de pontos-e-vírgulas, entre outros.

[Documentação do Lint](https://eslint.org/)

[GitHub do Lint](https://github.com/eslint/eslint)

<h3>Prettier:</h3> Ele pode formatar automaticamente o código-fonte de acordo com as regras de formatação definidas, tornando-o mais legível e fácil de entender.

O Prettier é útil para evitar debates sobre estilos de código e economizar tempo, pois elimina a necessidade de ajustar manualmente a formatação do código.

[Documentação do Prettier](https://prettier.io/)

[GitHub do Prettier](https://github.com/prettier/prettier)
