<template>
    <body class="text-center">
        <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal"> Login </h1>
            <label for="inputEmail" class="sr-only"> E-mail </label>
            <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus>
            <label for="inputPassword" class="sr-only"> Senha </label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit"> Login </button>
            <social/>
        </form>
    </body>
</template>

<script>
import social from '@/components/social'
export default {
    name: 'login',
    components:{
      social
    }
}
</script>