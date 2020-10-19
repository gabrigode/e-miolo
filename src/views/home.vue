<template>
    <div>
        <body class="text-center">
            <h1> Perfil </h1>
            <img :src="picture">
            <p> {{name}} </p>
            <p> {{email}} </p>
        </body>
        <body class="text-center">
            <div class="button">
                <h1> Personagem aleatório de Star Wars</h1>
                <p> Nome: {{swnome}} </p>
                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="swNome"> Personagem de Star Wars </button>
            </div>
        </body>
        <body class="text-center">
            <div class="button">
                <h1> Filme aleatório de Star Wars</h1>
                <p> Nome: {{swfilme}} </p>
                <p> Data: {{swfilme_release_date}} </p>
                <p> Diretor: {{swfilme_director}} </p>
                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="swFilme"> Filme de Star Wars </button>
            </div>
        </body>
    </div>
</template>

<script>
const fetch = require("node-fetch");
export default {
    data(){
        return{
            name: (sessionStorage.getItem('name')),
            email: (sessionStorage.getItem('email')),
            picture: (sessionStorage.getItem('picture')),
            swnome: '',
            swfilme: '',
            swfilme_director: '',
            swfilme_release_date: ''
        }
    },
    methods:{
        swNome(){
            let id = Math.floor(Math.random() * (83 - 1) + 1)
            fetch(`https://swapi.dev/api/people/${id}/`)
            .then(function(response){
                return response.json();
            })
            .then(function(result){
                sessionStorage.setItem('swnome', result.name)
            })
            this.swnome = sessionStorage.getItem('swnome')
        },
        swFilme(){
            let id = Math.floor(Math.random() * (6 - 1) + 1)
            fetch(`https://swapi.dev/api/films/${id}/`)
            .then(function(response){
                return response.json();
            })
            .then(function(result){
                sessionStorage.setItem('swfilme', result.title)
                sessionStorage.setItem('swfilme_director', result.director)
                sessionStorage.setItem('swfilme_release_date', result.release_date)
            })
            this.swfilme = sessionStorage.getItem('swfilme')
            this.swfilme_director = sessionStorage.getItem('swfilme_director')
            this.swfilme_release_date = sessionStorage.getItem('swfilme_release_date')
        }
    }
}
</script>
