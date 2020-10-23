<template>
    <div>
        <facebook-login class="button"
            appId="389417232216645"
            @login="getUserData"
            @get-initial-status="getUserData"
            @sdk-loaded="sdkLoaded">
        </facebook-login>
        <GoogleLogin class="button"
            :params="params" 
            :renderParams="renderParams" 
            :onSuccess="onSuccess" 
            :onFailure="onFailure">
        </GoogleLogin>
    </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
import GoogleLogin from 'vue-google-login';
import router from '@/router/index'
export default {
    name: 'loginsocial',
    data(){
      return{
        isConnected: false,
        name: '',
        email: '',
        personalID: '',
        picture: '',
        FB: undefined,
        params:{
            client_id: "865872582883-58118r8v85tktk1ivn1p20nq044iv11g.apps.googleusercontent.com"
        },
        renderParams:{
            width: 225,
            height: 34,
            longtitle: true
        }
      }
    },
    components:{
        facebookLogin,
        GoogleLogin
    },
    methods: {
        getUserData(){
            console.log("WORKING")
            this.FB.api('/me', 'GET', { fields: 'id,name,email,picture'},
                user =>{
                    this.personalID = user.id;
                    this.email = user.email;
                    this.name = user.name;
                    this.picture = user.picture.data.url;
                    sessionStorage.setItem('email', this.email);
                    sessionStorage.setItem('name', this.name);
                    sessionStorage.setItem('picture', this.picture);
                    router.push('/home')
                })
        },
        sdkLoaded(payload){
            this.isConnected = payload.isConnected
            this.FB = payload.FB
            if (this.isConnected) this.getUserData()
        },
        onLogin(){
            this.isConnected = true
            this.getUserData()
        },
        onSuccess(googleUser){
            console.log (googleUser.getBasicProfile().Ad);
            console.log (googleUser.getBasicProfile().Wt);
            console.log (googleUser.getBasicProfile().ZJ);
            this.email = googleUser.getBasicProfile().Wt;
            this.name = googleUser.getBasicProfile().Ad;
            this.picture = googleUser.getBasicProfile().ZJ;
            sessionStorage.setItem('email', this.email);
            sessionStorage.setItem('name', this.name);
            sessionStorage.setItem('picture', this.picture);
            router.push('/home')
        }
    }
}
</script>
