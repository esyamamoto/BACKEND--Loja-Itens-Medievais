# PROJETO LOJA DE ITENS MEDIEVAIS

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

Criei uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma API, utilizando Typescript e Sequelize.

Desenvolvi as camadas de Service e Controllers da aplicação em seu código, utilizando JWT para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação tem endpoints que tem suporte a operações de criação, leitura e atualização de informações.
 </details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto:

- um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint
- um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint
- um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint
- um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint
- validações dos produtos e testes que cubram as funcionalidades deste endpoint


</details>


## Orientações
<details>
  <summary><strong>🐳 Especificações sobre uso do Docker</strong></summary>

> Rode os serviços com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.
  > Rode o comando `npm run db:reset` (este comando vai funcionar somente após a criação do tipos solicitados no requisito) para criar o banco de dados, as tabelas que serão utilizadas e populá-las.

  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:

  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;

  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

## Seus Testes

Para rodar os seus testes localmente utilize o seguinte comando:

```bash
npm run test:local
```

Para os verificar seus testes de cobertura utilize o seguinte comando:

```bash
npm run test:coverage
```
</details>

<details>
  <summary><strong>🎲 Diagrama Entidade Relacionamento do projeto</strong></summary>
  O banco de dados do projeto segue a estrutura abaixo:

  <img src="images/diagram-der.png" height="200px" />

</details>
<details>
  <summary><strong>🪑 Tabelas</strong></summary>

O banco terá três tabelas: pessoas usuárias (`users`), produtos (`products`) e pedidos (`orders`).

Toda a parte de criação do banco de dados, das tabelas, seeders e _models_ do sequelize já está pronta. Você pode verificar toda a configuração e associações nos arquivos dentro do diretório `src/database`.

</details>

