<h1>Clean NODE API</h1>

<p> O objetivo foi criar uma API simples de cadastro de usuário, com uma arquitetura bem definida e desacoplada, utilizando Clean Architecture para fazer a distribuição de responsabilidades em camadas, seguindo o máximo possivel os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns. </p>

<h2>Design Patterns</h2>

* Factory
* Adapter
* Composite

<h2>Metodologias e Designs</h2>

* Clean Architecture
* DDD
* Modular Design
* Use Cases

<h2>Bibliotecas e Ferramentas</h2>

* NPM
* Typescript
* Git
* MSSQL
* Bcrypt
* JsonWebToken
* Validator
* Express
* Sucrase
* Nodemon

<h2>Rotas</h2>

<h3>GET</h3>
* /api/index      ->  Para listar todos os usuários <br />
* /api/index/:id  ->  Para buscar um usuários específico

<h3>POST</h3>
* /api/signup    ->   Para cadastrar um usuario, informando o name, email, password e passwordConfirmation <br />
* /api/login     ->   Para fazer o login

<h3>PUT</h3>
* /api/update    ->   Para fazer alterção no usuário

<h3>DELETE</h3>
* /api/delete    ->   Para deletar o usuário, informando o email
