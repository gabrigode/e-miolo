<template>
    <div>
        <h1> Profile </h1>
        <img :src="picture">
        <p> {{name}} </p>
        <p> {{email}} </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: (sessionStorage.getItem('email')),
            name: (sessionStorage.getItem('name')),
            picture: (sessionStorage.getItem('picture'))
        }
    }
}
</script>
