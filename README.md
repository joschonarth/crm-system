# CRM System

Este repositório contém um sistema de CRM (Customer Relationship Management) desenvolvido utilizando React para o front-end e Firebase para o backend e autenticação.

<p align="center">
    <a href=''>
    <img src="assets/CRMSystem.gif" />
    </a>
</p>

### Tecnologias Utilizadas 🛠️

[![React](https://skillicons.dev/icons?i=react&theme=dark)](https://reactjs.org/)
[![Firebase](https://skillicons.dev/icons?i=firebase&theme=dark)](https://firebase.google.com/)
[![Node.js](https://skillicons.dev/icons?i=nodejs&theme=dark)](https://nodejs.org/)
[![JavaScript](https://skillicons.dev/icons?i=javascript&theme=dark)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://skillicons.dev/icons?i=bootstrap&theme=dark)](https://getbootstrap.com/)
[![CSS](https://skillicons.dev/icons?i=css&theme=dark)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML](https://skillicons.dev/icons?i=html&theme=dark)](https://developer.mozilla.org/en-US/docs/Web/HTML)


### Funcionalidades ⚙️

* **Gerenciamento de Clientes:** Implementação de operações CRUD para adicionar, editar e excluir informações de clientes de forma intuitiva e eficiente.
* **Autenticação de Usuários:** Autenticação de usuários com Firebase Authentication e controle de acesso à aplicação.
* **Armazenamento e Consulta de Dados:** Utiliza o Firestore para armazenar e consultar dados dos clientes de forma eficiente e em tempo real.

### React ⚛️

* O **React** foi fundamental como base da aplicação, proporcionando uma arquitetura eficiente para o desenvolvimento frontend.

* **React Hooks:** utilizado para otimizar a lógica dos componentes, permitindo gerenciar estados complexos de forma mais intuitiva e eficiente, melhorando significativamente a performance da aplicação.

* **Context API:** utilizado para gerenciar o estado global da aplicação de forma eficaz. Isso não apenas simplifica a propagação de dados entre componentes, mas também reforça a segurança ao proteger páginas contra acesso não autorizado, facilitando a implementação de autenticação e controle de acesso.


### Firebase 🔥

* **Cloud Firestore:** banco de dados NoSQL para armazenar e consultar dados de clientes em tempo real de maneira escalável e eficiente.

* **Firebase Authentication:** oferece um processo seguro e simplificado de autenticação de usuários, garantindo controle de acesso rigoroso às funcionalidades da aplicação.

### Como Rodar o Projeto Localmente 🚀

1. **Clone o repositório**:

```bash
git clone https://github.com/joschonarth/crm-system.git
```

2. **Instale as dependências do Node Modules**:

```bash
npm install
```

3. **Configure as credenciais do Firebase**: 🔥
- Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
- Copie as credenciais do seu projeto Firebase para o arquivo de configuração no React (`src/app/config/firebase.js`).
- Em Firestore Database crie uma Collection de nome `clientes`.

4. **Inicie o servidor de desenvolvimento**:

```bash
npm start
```

5. **Acesse o aplicativo**:

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.


## Contato 📞

<div>
    <a href="https://www.linkedin.com/in/joschonarth/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="mailto:joschonarth@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>