<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" align="center" width="300px" >
</p>
<br>
<h1 align="center"> Node Quick Template </h1>
<h2 align="center"> Template rápido para desenvolvimento com Node.js </h2>

## 📗 Descrição

<p align="justify"> 
Este template para foi criado com o intuito de facilitar a criação de projetos Node.js, de maneira a possuir diversos recursos já configurados para iniciar o desenvolviemento de uma aplicação node.
<p>

## 💻 Tecnologias

-   Node.js
-   npm
-   ESLint
-   Prettier
-   Typescript Support
-   eslint-config-prettier
-   eslint-plugin-prettier

## 🔧 Plugins Utilizados

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 🔨 VS Code Config

Adicione as seguintes configurações no **setting.json** do VS Code, para habilitar a compatibilidade do Prettier com o ESLint no Visual Studio Code.

**setting.json**

```json
{
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
}
```

## 🚀 Como Utilizar

Fork o projeto e após clone o repósitório

`git clone`

Acesse a pasta
`cd`

Remova o repositório remotodo original e altere os dados de package.json e o README de acordo com seu projeto, e bom desenvolvimento.

## rage3: Configuração Manual

Para configurar o Prettier e o ESLint manualmente em um projeto node/javascript, instale os plugins do Prettier e do Eslint.

Instale o ESLint no projeto e execute a configuração inicial:
`npm install eslint -D`
`npx eslint --init`

Algumas perguntas serão exibidas no terminal para configurar o EsLint

-   **Primeira Pergunta**

    -   US: How would you like to use ESLint?
    -   BR: Como você gostaria de usar o ESLint?

    *   To check syntax, find problems, and enforce code style.
    *   Checar sintaxe, buscar problemas e forçar o code style.

-   **Segunda Pergunta**

    -   US: What type of modules does your project use?
    -   BR: Que tipo de modulo é utilizado em seu projeto?

    *   CommonJS (require/exports).

Responda CommonJS já que estamos configurando o Node.js

-   **Terceira Pergunta**

    -   US: Which framework does your project use?
    -   BR: Usa algum frameword?

    *   None of these

Responsa None of these, já que não estamos usando Frameworks

-   **Quarta Pergunta**

    -   US: Does your project use TypeScript?
    -   BR: Seu projeto utilizará TypeScript?

Responda Yes para instalar os modulos do Typescript e No caso não vá utilza-lo.

-   **Quinta Pergunta**

    -   US: Where does your code run?
    -   BR: Onde este projeto sera executado?

    *   Node

-   **Sexta Pergunta**

    -   US: How would you like to define a style for your project?
    -   BR: Qual code style você gostaria de utilizar para este projeto?

    *   Use a popular style guide.
    *   Use um estilo comum.

-   **Setima Pergunta**

    -   [Airbnb](https://github.com/airbnb/javascript)

Aqui você ira escolher entre os estilos mais comuns e populares utilizados, recomendo utilizar o do Airbnb.

-   **Oitava Pergunta**

    -   US: What format do you want your config file to be in?
    -   BR: Qual formato do arquivo de configuracao?

    *   JSON.

-   **Nona Pergunta**

    -   US: Would you like to install them now with npm?
    -   BR: Gostaria de instalar utilizando npm?

    *   Yes

Dessa forma teremos o ESLint configurado, o arquivo gerado deve ser parecido com isto:

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": ["airbnb-base"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "plugins": ["@typescript-eslint"],
    "rules": {}
}
```

Configurar o Prettier para o editor.

Execute o comando:
`npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

-   eslint-config-prettier: Executa o Prettier como uma regra do ESLint;
-   eslint-plugin-prettier: Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;

Adicione os plugins instalados ao ESLint em `.eslintrc.json`

Extends:
`"extends": ["airbnb-base", "prettier"],`

Pluggins:
`"plugins": ["@typescript-eslint", "prettier"],`

Crie uma pasta chamada `.vscode` e um arquivo com nome `settings.json` e adicione ao arquivo:

```json
{
    "editor.formatOnSave": true
}
```

Isto fará com que ao salvar um arquivo que foi editado o Prettier formate o arquivo automaticamente seguindo as regras definidas.

O Prettier possui algumas regras que são incosistentes com o style do Airbnb como as aspas duplas e simples para isso vamos criar as configurações do `prettier.config.js` e sobrescrever o padrão do Prettier

prettier.config.js:

```JSON
module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
};
```

Por fim instale o editorconfig, e clicando com o botão esquedo no diretório de arquivos do VS Code, escolha a opção _Generate .editorconfig_

**Configurações do TypeScript**

Para iniciar as configurações do Typescript para o projeto execute o comando:
`yarn tsc --init`

Esse comando ira criar o arquivo tsconfig.json

## :octocat: Desenvolvedores por

| [<img src="https://avatars0.githubusercontent.com/u/42902087?s=400&u=2627dc250e09bb350c2dc70e974dd102090c3e2b&v=4" width=115 > <br> <sub> Hirvin Faria </sub>](https://github.com/hirvin-faria) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

