# OrderAppAngular

Este projeto é um protótipo de transações bancárias feito com Angular 4 e Boostrap 4.

Atualmente todos os dados são salvos em memória. Não tem nenhuma persistência.

### [Demo](https://order-app-angular.herokuapp.com/)


## Começando

Siga as instruções abaixo para excutar o projeto na sua máquina local.

Estas instruções irão levá-lo a uma cópia do projeto em funcionamento em sua máquina local para fins de desenvolvimento e teste. Consulte a implantação de notas sobre como implantar o projeto em um sistema ao vivo.


### Pré-requisitos

Antes de começar o projeto você vai precisar do NodeJS e npm instalados na sua máquina.

```
NodeJS -> v8.x.x
npm -> v5.x.x
```

### Instalando

Vamos começar clonando o projeto, no seu terminal preferido:

```
git clone git@github.com:fabriciofmsilva/order-app-angular.git
cd order-app-angular
```

  Se você quiser pode fazer um *fork* do projeto.

Continuando vamos instalar as dependências do projeto:

```
npm install
```


## Executando o projeto

```
npm dev-server
```


## Executando os testes

Depois de instalado o projeto você pode executar os testes unitários e de integração:

```
npm run test
```


## Distribuição

Foi criado um *pipeline*, todo *commi* neste repositório na *master* é escutado pelo Travis.ci que executa os testes. Caso nenhum teste falhe envia para o Heroku.


## Frameworks e bibliotecas utilizadas

* [Angular](https://angular.io/) - Framework JavaScript
* [Boostrap](https://getbootstrap.com/) - Biblioteca de componentes
* [ng-bootstrap](https://ng-bootstrap.github.io/) - Biblioteca que converte os componentes do Bootstrap para o Angular
* [moment](https://momentjs.com/) - Biblioteca para trabalhar com datas/horas


## Licença

Este projeto está licenciado sob a licença MIT - veja o [LICENSE.md](LICENSE.md) arquivo para detalhes


## TODOs

- [] Finalizar os testes unitários e de integração
- [] Criar os testes *end-to-end*
- [] Criar uma api para a persistência de dados, ou salvar local
- [] Trocar o `.` por `,` no campo de valor
- [] Não permitir digitar a letra `E` no campo de valor
