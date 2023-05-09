Site para https://dribbble.com , buscar inspiração , invovação

1-Instalar Node, npm

2-npm install -g http-server

3-touch index.html  no bash

4- Abrir a pagina no http-server

---------------------------------------------------------------------------------------
    **** CONFIGURAÇÃOES GERAIS DO PROJETO ****

ADICIONANDO O NORMALIZE NO CSS

Padroniza todo o stilo inicial(padrão) do css para  varios navegadores - devido a diferença de de interpletação 
de CSS no browser

https://cdnjs.com/libraries/normalize e copie o link tag min.css

importante desabilitar o cache na ferramenta do desenvolvedor >Network> Disable cache quando estivermos 
trabalhando com Servidor Local

ORGANIZANDO O PROJETO

vamos criar algumas pastas e subdiretorios

mkdir assets
mkdir assets/css
mkdir assets/js

touch ./assets/css/global.css
touch ./assets/js/main.js

ADICIONANDO A FONTE ROBOTO NO PROJETO

google fonts - Roboto - selecione as fontes e copie o link 

---------------------------------------------------------------------------------------
   **** ESTILIZAÇÃO DA LISTAGEM DE POKÉMON ****

ESTILIZAÇÃO INICIAL 

Mobile First - dentro da Dev Tools da página vamos acessar o modo mobile e a Dimension Pixel 5

definir o css dentro da DEv tools antes de ir para a index

ESTILIZAÇÃO DA LISTAGEM DE POKÉMON

criamos classes no css e estilizamos a lista de pokemon

ADICIONANDO A IMAGEM DO POKÉMON

https://pokeapi.co/docs/v2#pokemon

ADICIONANDO OS TIPOS DOS POKÉMON E FINALIZANDO O LAYOUT DA IMAGEM

TORNANDO NOSSO LAYOUR RESPONSIVO

Media Query CSS - Mediaquery é um conjunto de css que vai ser aplicado de acordo com a tela


---------------------------------------------------------------------------------------
             ***DOMINANDO O PROTOCOLO HTTP E INTEGRANDO COM A POKEAPI***

 INTRODUÇÃO A API'S 

 Uma API é um servidor de dados  Ex: pokeapi dados para consumir
 Dica : Importantissimo entender o protocoplo HTTP 

 COMO FUNCIONA AS REQUISIÇÕES

 O protocolo Http é um protocolo cliente-servidor 
 F12 > Network > F5(para atualizar a paágina) > All para vermos a conversa do servidor 
 de APi acontecendo

URL PATH E METHOD

Requisição HTTP:

URL: https://pokeapi.co/api/v2/pokemon
    ${Endereço}/${path = caminho de identificação do recurso}

Endereço: https://pokeapi.co - Dominio convertido por Servidor DNS

Path: /api/v2/pokemon - O servidor entendera que vc quer a listagem de pokemom


REQUESTED METHOD: GET| POST | PUT | DELETE |PATCH

GET: Buscar o recurso
POST: Inserir o recurso
PUT: Atualizar o recurso
DELETE: remover o recurso

PATH PARAMS E QUERY STRING(where do select)

path params: Exemplo: o "/1" no dominio -- https://pokeapi.co/api/v2/pokemon/1

query string: https://pokeapi.co/api/v2/pokemon?type=grass&nam=i --onde depois da
interrogração é a query string
Uma Estrutura de chave e valor

type = grass
name = 1

Exemplo : https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
offset=0&limit=20 -- query strings parametros para paginar 

HEADERS

Configuração da API

Metadados da nossa Requisição

Request Headers - Configuração de Requisição (browser/)

Credenciais de Autorização - Authorization

accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7


Response Headers - Configuração da Resposta (Servidor)

content type: application/json;charset=UTF8

Exemplo:

Request

accept: text/html,
application/xhtml+xml,
application/xml;q=0.9,
image/avif,
image/webp,
image/apng,
*/*;q=0.8,
application/signed-exchange;v=b3;q=0.7

Response

content type: application/json;charset=UTF=8



BODY

POST|PUT|PATCH

Request Headers
content-type: application/json

Request Body
{
    "name:"Teste"
}

Status Code

Exemplo:
Status Code: 200 OK

Response Headers

Response Body

 https://www.httpstatusdogs.com
 
 ----------------------------------------------------------------------------------
              ***INTEGRANDO COM A POKEAPI***
 ----------------------------------------------------------------------------------
INTRODUÇÃO AO CONSUMO DA POKEAPI 

PRIMEIRA REQUISIÇÃO 

    Primeiro passo vamos listar 10 pokemons por paginas

    https://pokeapi.co/api/v2/pokemon?offset=0&limit=10

    Vamos fazer um requisão HTTP , via JavaScript
    Para isso vamos utilizar o Fetch API - que é uma biblioteca ja instalada no Javascript dos browers
    Pesquise Fetch API  GET JSON no google


MANIPULANDO O RESULTADO DA REQUISIÇÃO ATRAVÉS DE UMA PROMISE

    arrowfunction = '=>' é uma função sem contesto declarado


    Exemplo:
      ao inves disso:
      .then(function (response) {
          return response.json()      
        })

        ficaria isso:
      .then((response) => response.json())   


      TRANSFORMANDO NOSSA LISTA DE POKÉMON EM UMA LISTA DE HTML 

      Para debugar o codigo via browser , deve se ir até o menu Source  e selecionar o arquivo .js e colocar um break point

      Ou colocando um debugger no código-fonte, conforme o exemplo abaixo:

      fetch(url) //Por padrão o fetch usa o metodo GET
        .then((response) => response.json())   
        .then((jasonBody) => {
            debugger
            console.log(jasonBody)
        })   
        .catch((error) => console.error(error))
        .finally(() => console.log('Requisição concluída!'))  


      SEPARANDO O CONSUMO DA API DA MANIPULAÇÃO DE HTML

      Criamos um novo arquivo .js e separamos o codigo de manipulação da API

  UTILIZANDO A FUNÇÃO MAP PARA DIMINUIR A VERBOSIDADE DO NOSSO CÓDIGO
      //Usamos a função map para diminuior a verbosidade do for
      const newList = pokemons.map((pokemon) => {        
            return convertPokemonToLi(pokemon)
        })

        console.log(newList)
        
        //Ao invés de usar o for usamos o map acima, que faz a mesma função de correr uma lista
        // const listItens = []

        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItens.push(convertPokemonToLi(pokemon))
        // }

        // console.log(listItens)

        //Tudo isso do map foi reduzido a isso
        pokeApi.getPokemons().then((pokemons = []) => { 
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
        //por default o join junta uma lista por virgula    
    })   

REVISANDO O NOSSO CÓDIGO E ENTENDENDO OS PRÓXIMOS PASSOS

  --Revisão feita  e usamos o Promise.all para consumir a api da lista de detalhes dos pokemons

    Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/1'),
        fetch('https://pokeapi.co/api/v2/pokemon/2'),
        fetch('https://pokeapi.co/api/v2/pokemon/3'),
        fetch('https://pokeapi.co/api/v2/pokemon/4')
    ]).then((results) => {
        console.log(results)
    })

MANIPULANDO MÚLTIPLAS REQUISIÇÕES EM PARALELO

    Diminuimos a lista de promises dentro de um novo fetch, conforme abaixo:

    pokeApi.getPokemonDetail = (pokemon) => {
        return fetch(pokemon.url).then((response) => response.json())
    }

    pokeApi.getPokemons = (offset = 0, limit = 10) => {   
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

        return fetch(url) //Por padrão o fetch usa o metodo GET
            .then((response) => response.json())   
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)    
    }

CONVERTENDO O MODELO DO POKEAPI PARA NOSSO MODELO

    Convertemos o modelo da Api para o nosso modelo, com as caracteristicas que necessitamos
    criamos uma classe Pokemon com os seus devidos atributos

ADICIONANDO OS TIPOS DE POKEMONS DINAMICAMENTE

    Inserimos as classes no CSS referente ao type e declaramos o type no JavaScript


ADICIONANDO O BOTÃO DE PAGINAÇÃO

    Adicionamos um botão para carregar a proxima página no html e estilizamos no css

CRIANDO O MECANISMO DE PAGINAÇÃO

    Criamos uma função javascript para o botão load page e encapsulamos algumas funções

CRIANDO MECANISMO PARA LIMITAR NA PRIMEIRA GERAÇÃO DE POKEMONS

    Limitamos a exibição dos pokemosn da primeira geração , usando as condições if e else 

--------------------------------------------------------------------------------------------------------------------------
 
https://github.com/digitalinnovationone/js-developer-pokedex

---------------------------------------------------------------------------------------------------------------------------
    











  












































