# vue-movie-app

## Sobre 
Essa aplicação front-end consiste em exibir na tela do usuário, os filmes populares provindos da [TMDB](https://developers.themoviedb.org/3/movies/get-popular-movies) API. O sistema deve lidar com requisições as APIs do The Movie DataBase e persistência de dados no localStorage.

## Tecnologias
[Vue.js](https://vuejs.org/) para criação das interfaces.

[Vue-Router](https://router.vuejs.org/) para gerenciamento de rotas.

[Vue-Devtools](https://devtools.vuejs.org/) para depuração da aplicação.

## Instalando e Rodando a aplicação 

### Clone do repositório: 
```
git clone git@github.com:candido-luiz/vue-movie.git   
```
### Instalando: 
No diretório onde realizou o clone do projeto:

```
cd vue-movie-app
```
Instalar dependências:
```
npm install
```

### Rodando a aplicação:
```
npm run serve
``` 

### Compila e minimiza para produção
```
npm run build
```

## Features
- [x] Consumir a The Movie Database API - [Popular-Movies](https://developers.themoviedb.org/3/movies/get-popular-movies) 
- [x] Exibir uma página inicial com os filmes mais populares
- [x] Ao clicar em um filme, exibir uma página com detalhes do filme selecionado

#### Extra Features
- [ ] Utilizar alguma gerência de estado;
- [x] Adicionar uma caixa de busca na tela inicial e exibir os resultados em uma nova página;
- [x] Permitir que o usuário adicione/remova filmes da página inicial como favoritos e fazer a
persistência de dados;
- [x] Exibir os filmes favoritados em uma nova página que permita a remoção destes;

## Estrutura do projeto
Antes de tudo, o uso de recursos Vue para a criação de toda a aplicação, foi baseado nas instruções
da documentação oficial do Vue.js, [aqui]((https://vuejs.org/)).

### Criação de componentes 
Todos os componentes (pasta "/components) são do tipo Single-File Componente, permitindo a definição de HTML, JavaScript e CSS em um mesmo arquivo, o que agiliza o desenvolvimento de componentes.

### Configuração das Rotas

Para configurar e gerenciar rotas, foi utilizado o [vue-router](https://router.vuejs.org/). Foram utilizados: 
* Roteamento dinâmico, para a receber parâmetros relacionados aos filmes.
* Rotas nomeadas, para prevenir hardcoding em caso de mudanças de rotas.

### Estrutura do CSS

O CSS de cada componente foi definido na tag 'style', padrão do single-file componente. À tag 'style' foi adicionada o atributo 'scoped', mantendo o estilo de cada componente preso ao seu escopo.

### Guia de Estilos

Para a definição de nomes de componentes, propriedades, ordem das opções de componentes e entre outros,
foi utilizado o gia de estilos definido pelos desenvolvedores do Vue, [aqui](https://br.vuejs.org/v2/style-guide/).

## API's e persistência de dados

Em relação à TMDB API, foram utilizados dois fetchs diferentes:
* Uum para buscar a lista de filmes populares ao acessar a página inicial (MoView).[Popular-Movies](https://developers.themoviedb.org/3/movies/get-popular-movies).
* Outro para buscar detalhes de um filme escolhido pelo usuário.[Movie-Details](https://developers.themoviedb.org/3/movies/get-movie-details) .

A persistência de dados foi feita com o localStorage, que foi utilizado para:
* Salvar a lista dos filmes buscados através da API, a fim de possibilitar a funcionalidade de busca de filmes.
* Salvar/Remover os filmes escolhidos como favoritos, para que pudessem ser exibidos na página de Favoritos.

