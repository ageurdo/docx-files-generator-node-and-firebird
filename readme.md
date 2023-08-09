# Gerador de Arquivos DOCX a partir de Banco de Dados Firebird

![Node.js](https://img.shields.io/badge/Node.js-v16-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v4-blue)
![Firebird](https://img.shields.io/badge/Firebird-v3.0-red)

Uma aplicação desenvolvida em Node.js e TypeScript para gerar arquivos DOCX contendo dados dinâmicos de empresas, como CNPJ, razão social, endereço, e outros detalhes.

## Capturas de Tela

![Captura 1](src/assets/screenshot.png)

## Funcionalidades

- Gera arquivos DOCX personalizados para cada empresa a partir dos dados do banco de dados Firebird.
- Inclui informações como CNPJ, razão social, endereço e outras informações relevantes.
- Facilita a geração de autorizações para uso de dados e logotipos de empresas em um site de fornecedora de software.

## Getting Started

1. Clone o repositório:
   ```sh
   git clone https://github.com/ageurdo/docx-files-generator-node-and-firebird.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd docx-files-generator-node-and-firebird
   ```
3. Crie um arquivo .env baseado no arquivo .env.sample e 
preencha as informações de conexão com o banco de dados Firebird.


4. Instale as dependências:
    ```sh
    yarn install
    # ou
    npm install
    ```
5. Inicie o servidor de desenvolvimento:
    ```sh
    yarn dev
    ```

Obs: Arquivos de saída - Após rodar o projeto automaticamente os arquivos serão gerados na pasta ./output



