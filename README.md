# vendas-online-web

## Instalar o node.js

[Download Node.js](https://nodejs.org/en/download)

<details>
   <summary><h3>Criar o Projeto com React usando Vite</h3></summary>
   <br>

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

</details>
  
<details>
   <summary><h3>Configuração Parcial dos padrões de código</h3></summary>
   <br>

Comandos para instalar o **Prettier** e o **Lint**

Os arquivos são instalados nas dependencia `devDependencies` por serem usadas apenas durante a produção do projeto, não sendo útil para os usuários comuns.

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

</details>

<details>
   <summary><h3>Styled-Components</h3></summary>
   <br>

[Documentação Styled-Componets](https://styled-components.com/)

`npm install styled-components` ou `yarn add styled-components`

```
import styled from 'styled-components';

// Exemplo de um componente estilizado
const Button = styled.button`
  background-color: #fca311;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e5a00d;
  }
`;

// Uso do componente estilizado
function App() {
  return (
    <div>
      <Button>Click me!</Button>
    </div>
  );
}
```

Em resumo, styled-components é uma biblioteca que facilita a estilização de componentes React, oferecendo uma sintaxe elegante e recursos poderosos para criar estilos de forma mais simples, modular e reutilizável.

</details>

<details>
   <summary><h3>Ant Design</h3></summary>
   <br>

[Documentação Ant Design](https://ant.design/)

`npm install antd` ou `yarn add antd`

Exemplo simples do uso da ferramenta:

```
import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div>
      <Button type="primary">Clique aqui</Button>
      <DatePicker />
    </div>
  );
}
```

O uso do Ant Design pode ajudar a acelerar o desenvolvimento de interfaces de usuário atraentes e funcionais em seus aplicativos React, oferecendo uma ampla gama de componentes prontos para uso e um design consistente e moderno.

</details>
