---
__:warning: Este é um projeto teste de uma empresa fictícia para uso de Node.js__

API para suporte ao backend para controle de folha de ponto da empresa XPTO.

---
---

# Empresa XPTO
### Sistema de Controle de Folha

---

**Descrição:**

- Este é um sistema de folha de ponto para controle de horas dos profissionais que trabalham na empresa fictícia XPTO. Com base em um cadastro inicial do colaborador e subsequente logon, poderá começar a administrar suas horas diárias de produção. 

#

**Como usar:**

- Diariamente, o colaborador deverá informar seu horário de entrada na empresa para adicionar uma nova folha àquele dia; 
- A cada novo intervalo, será preenchida a hora corrente de entrada ou saída coerente com a próxima informação disponível;
- Ao preenchimento completo de cada folha, poderá ser pesquisado o montante de horas a pagar ou a receber daquele colaborador logado.  

#  

**Vantagens:**

- Controle individual de horas;
- Contribuição para gestão do setor impactado e melhores garantias para a governança organizacional;
- Adição de dados concisos para realização de sessões de desenvolvimento;
- Dados relevantes para levantamento de indicadores internos de desempenho. 

---

## Funcionalidades

`Resumo`

- Cadastro de usuário;
- Login e logout de usuário;
- Cadastro de folha de ponto;
- Edição de folha de ponto;
- Deleção de folha de ponto;
- Pesquisa de montante de saldo de horas ou atraso.

---
---

## Sobre o Projeto

---

Este projeto refere-se somente ao backend da aplicação com um todo. 
#
É uma API construída com NODE.js, utilizando o banco não relacional MongoDB, responsável por criar, alterar e deletar os dados necessários no sistema. 

---

### Detalhes 

`Termos Técnicos`
#

| Info           | Descrição   |
| -------------- | ----------- |
| Tecnologia     | Node.js     |
| Módulos Princ. | express; mongoose; celebrate; jsonwebtoken; bcryptjs; cors |
| Banco          | MongoDB. Admin.: roberto.morel |
| Encriptação    | Encriptação de senha com o bcryptjs |
| Autenticação   | Autenticação de rotas com o jsonwebtoken |
| Testes         | Testes unitários da função que gera o token com o celebrate |

---

### Download
> ##### **1. Baixar e instalar o GIT para seu computador**
> ###### Link: https://git-scm.com/downloads

> ##### **2. Criar uma pasta para armazenar o projeto**

> ##### **3. Na pasta, clique com o botão direito e escolher 'Git Bash Here'**

> ##### **4. No terminal, copie e cole o código abaixo:**
> ###### Obs.: como a pasta node_modules não é copiada para o gitLab, as dependências necessárias devem ser instaladas.
``` js
git clone git@gitlab.com:game.developer.br/entry-control-backend.git
```

---

### Execução
> ##### **1. Abrir o terminal do seu sistema operacional**
> ###### Será usado o windows como exemplo.
> ###### Sugestão: 'Windows PowerShell'

> ##### **2. Acessar a pasta do projeto**
``` js
cd path/entry-control-backend
```

> ##### **3. Executar o comando abaixo:**
> ###### Como já comentado, devem ser instaladas as dependências necessárias.
``` js
yarn dev
```

---

### Extra
`Instalando dependências .:. Code`
#
    choco install yarn // -- Deve ter o Chololatey
    yarn add express
    yarn add nodemon -D

---

### Links

[Dev Docs](https://devdocs.io/)

[ECMAScript 6](https://www.w3schools.com/js/js_es6.asp)