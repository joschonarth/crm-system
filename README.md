# 📈 CRM System 

Este repositório contém um sistema de CRM (Customer Relationship Management) desenvolvido utilizando React para o front-end e Firebase para o backend e autenticação.

https://github.com/user-attachments/assets/e0073c12-9490-4f93-8600-991fe11dca1b

## ⚙️ Funcionalidades 

* **Gerenciamento de Clientes:** Implementação de operações CRUD para adicionar, editar e excluir informações de clientes de forma intuitiva e eficiente.
* **Autenticação de Usuários:** Autenticação de usuários com Firebase Authentication e controle de acesso à aplicação.
* **Armazenamento e Consulta de Dados:** Utiliza o Firestore para armazenar e consultar dados dos clientes de forma eficiente e em tempo real.

## 🛠️ Tecnologias Utilizadas 

* [<img src="https://skillicons.dev/icons?i=react&theme=dark" width="30" align="center">](https://reactjs.org/) **React**: Foi utilizado no front-end para construir uma interface de usuário dinâmica e responsiva. Componentes como formulários de gerenciamento de clientes e tabelas de exibição de dados foram criados utilizando React Hooks, proporcionando uma navegação suave e uma experiência intuitiva para o usuário.

* [<img src="https://skillicons.dev/icons?i=firebase&theme=dark" width="30" align="center">](https://firebase.google.com/) **Firebase**: No backend, integrou dois serviços principais: Cloud Firestore, para armazenar e recuperar informações de clientes em tempo real, e Firebase Authentication, que gerencia a autenticação de usuários de maneira segura e simplificada, permitindo o controle de acesso à aplicação.

* [<img src="https://skillicons.dev/icons?i=nodejs&theme=dark" width="30" align="center">](https://nodejs.org/) **Node.js**: Utilizado em conjunto com o Firebase para gerenciar funções de back-end e garantir a integração contínua entre a base de dados e o front-end, permitindo atualizações em tempo real dos dados exibidos na interface do CRM.

* [<img src="https://skillicons.dev/icons?i=javascript&theme=dark" width="30" align="center">](https://developer.mozilla.org/en-US/docs/Web/JavaScript) **JavaScript**: Toda a lógica de interação do projeto, incluindo manipulação de dados e autenticação, foi implementada utilizando as melhores práticas para garantir performance e escalabilidade, com integração total entre o front-end e o back-end.

* [<img src="https://skillicons.dev/icons?i=bootstrap&theme=dark" width="30" align="center">](https://getbootstrap.com/) **Bootstrap**: Aplicado para estilizar a interface, criando layouts responsivos e componentes visuais como botões, formulários e modais, garantindo uma experiência de usuário moderna e amigável em dispositivos móveis e desktops.

* [<img src="https://skillicons.dev/icons?i=css&theme=dark" width="30" align="center">](https://developer.mozilla.org/en-US/docs/Web/CSS) **CSS**: As folhas de estilo personalizaram os componentes criados com Bootstrap, ajustando cores, espaçamentos e animações, aprimorando a usabilidade e a estética da aplicação.

* [<img src="https://skillicons.dev/icons?i=html&theme=dark" width="30" align="center">](https://developer.mozilla.org/en-US/docs/Web/HTML) **HTML**: Utilizado para estruturar a base da aplicação, definindo a semântica das páginas e os elementos fundamentais que compõem o layout do CRM, como seções de clientes, formulários de autenticação e painéis de controle.

---

### ⚛️ React 

* O **React** foi fundamental como base da aplicação, proporcionando uma arquitetura eficiente para o desenvolvimento frontend.

* **React Hooks:** utilizado para otimizar a lógica dos componentes, permitindo gerenciar estados complexos de forma mais intuitiva e eficiente, melhorando significativamente a performance da aplicação.

* **Context API:** utilizado para gerenciar o estado global da aplicação de forma eficaz. Isso não apenas simplifica a propagação de dados entre componentes, mas também reforça a segurança ao proteger páginas contra acesso não autorizado, facilitando a implementação de autenticação e controle de acesso.


### 🔥 Firebase 

* **Cloud Firestore:** banco de dados NoSQL para armazenar e consultar dados de clientes em tempo real de maneira escalável e eficiente.

* **Firebase Authentication:** oferece um processo seguro e simplificado de autenticação de usuários, garantindo controle de acesso rigoroso às funcionalidades da aplicação.

## 🚀 Como Rodar o Projeto Localmente 

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


## 📞 Contato 

<div>
    <a href="https://www.linkedin.com/in/joschonarth/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="mailto:joschonarth@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
