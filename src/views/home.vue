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
            email: (localStorage.getItem('email')),
            name: (localStorage.getItem('name')),
            picture: (localStorage.getItem('picture'))
        }
    }
}
</script>
