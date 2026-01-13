
# 🌐 Cenário Tech

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Firebase](https://img.shields.io/badge/Database-Firestore-orange)
![Bootstrap](https://img.shields.io/badge/Frontend-Bootstrap%205-purple)

Uma plataforma moderna de blog desenvolvida para demonstrar proficiência em tecnologias Full-Stack. O projeto apresenta uma interface responsiva com estilo **Glassmorphism** e utiliza **Firebase Firestore** para persistência de dados em tempo real.

---

## 📸 Funcionalidades

* **📰 Listagem de Postagens:** Visualização dinâmica de posts com design "hero" e cartões translúcidos.
* **✍️ Criação de Conteúdo:** Formulário para criar novas publicações com Título, Autor, Conteúdo e URL de imagem de capa.
* **📝 Edição de Posts:** Interface para carregar e atualizar dados de postagens existentes.
* **❌ Exclusão:** Remoção de postagens diretamente pela interface.
* **📱 Interface Responsiva:** Layout adaptável para mobile e desktop utilizando Bootstrap 5.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído combinando um Backend robusto com um Frontend moderno:

### Backend
* **Node.js**: Ambiente de execução JavaScript.
* **Express.js**: Framework para gerenciar rotas e a API RESTful.
* **Firebase Admin SDK**: Integração segura com o banco de dados Firestore.

### Frontend
* **HTML5 & CSS3**: Estrutura semântica e estilização personalizada (efeitos de paralaxe e vidro).
* **Bootstrap 5**: Framework CSS para grid e componentes responsivos.
* **JavaScript (Vanilla)**: Manipulação do DOM e consumo da API via `fetch`.

### Banco de Dados
* **Google Firestore**: Banco de dados NoSQL hospedado na nuvem.
    * *Nota: O projeto possui dependência do `mysql2` listada, mas a implementação atual utiliza ativamente o Firebase Firestore.*

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado.
* Uma conta no Google Firebase com o Firestore habilitado.

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/cenario-tech.git](https://github.com/seu-usuario/cenario-tech.git)
    cd cenario-tech
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configuração do Firebase (Credenciais)**
    O backend utiliza uma conta de serviço para autenticar no Firebase.
    * Baixe sua chave privada (`serviceAccountKey.json`) no console do Firebase.
    * Coloque o arquivo na raiz do projeto ou ajuste o caminho no arquivo `index.js`:
        ```javascript
        // index.js
        admin.initializeApp({
            credential: admin.credential.cert("./caminho-para-sua-chave.json")
        });
        ```

4.  **Inicie o Servidor**
    ```bash
    node index.js
    ```
    O servidor iniciará na porta **3000**.

5.  **Acesse a Aplicação**
    Abra o navegador em: `http://localhost:3000`

---

## 📡 Documentação da API

A aplicação consome sua própria API REST interna configurada no `index.js`:

| Método | Rota | Descrição | Corpo da Requisição (JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/posts` | Retorna todas as postagens | N/A |
| **GET** | `/api/posts/:id` | Retorna uma postagem específica | N/A |
| **POST** | `/api/posts` | Cria uma nova postagem | `{ "titulo": "...", "autor": "...", "conteudo": "...", "imagemUrl": "..." }` |
| **PUT** | `/api/posts/:id` | Atualiza uma postagem | `{ "titulo": "...", "autor": "...", "conteudo": "...", "imagemUrl": "..." }` |
| **DELETE**| `/api/posts/:id` | Remove uma postagem | N/A |

---

## 📂 Estrutura do Projeto

```text
/
├── front-end/              # Arquivos estáticos (HTML, CSS, Imagens)
│   ├── assets/             # Estilos e Logotipos
│   ├── blog-parallax.html  # Página Principal
│   ├── postagem.html       # Página de Cadastro
│   ├── edicao.html         # Página de Edição
│   └── sobre.html          # Página "Sobre Nós"
├── index.js                # Servidor Express e Configuração da API
├── package.json            # Dependências e Scripts
└── firebase-config.js      # Configuração Client-side (opcional)

```

---

## 👥 Autores

Trabalho desenvolvido para a disciplina do Prof. Diogo.

* **Vitor Daniel**

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.
