<template>
    <v-card class="Tarjeta"> <!--Esta es la tarjeta-->
        <img class="imagen" src="../../assets/images/welcome.jpg" alt="">
        <v-card-title class="Titulo">Inicia Sesion</v-card-title> <!--Este es el titulo-->
        <v-card-text>
            <v-form ref="formLogin"> <!--Este es el formulario-->
                <v-text-field class="inputs" label="Correo electrónico" placeholder="Correo electronico" v-model="correoElectronico" :rules="validarCorreo"/>
                <v-text-field class="inputs" label="Contraseña" placeholder="Password" v-model="password" :rules="validarPassword"/>
            </v-form>
        </v-card-text>

        <v-card-actions class="cardAct"> <!--Este es para los botones-->
            <v-btn id="Login" class="btnLogin" rounded block @click='loginBackend'>
                Login
            </v-btn>        
        </v-card-actions>
    </v-card>
</template>

<script>
    export default{
        data(){
            return{
                correoElectronico: '',
                validarCorreo:[
                    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El email no es valido'
                ],
                password: '',
                validarPassword:[
                    value => value.length >= 6 || 'Escribe minimo 6 caracteres'
                    ]
                }
        },

        methods:{
            async loginBackend (){
                alert('Presionaste el boton')
                const valid = this.$refs.formlogin.validate()
                if(valid){
                    const sendData = {
                        email: this.correoElectronico,
                        password: this.password
                    }
                    await this.$auth.loginWith('local',{
                        data: sendData
                    }).then(async (res) =>{
                        console.log('Respuesta del back:', res)
                        if(res.data.error == null){
                            this.$router.push('/dashboard')
                        }
                    }).catch((error) =>{
                        console.log('error: ', error)
                    })
                }else{
                    alert('No cumpliste las reglas')
                }
                
            }
        }

    }
</script>

<style scoped>
    .inputs{
        margin: auto;
        width: 70%;
    }
    #Login{
        color: white;
        background-color: rgb(103, 28, 174);
    }
    .cardAct{
        width: 60%;
        margin: auto;
    }
    .imagen{
        width: 100%;
        position: relative;
        top: -370px;
    }
    .Tarjeta{
        margin-top: 20%;
        width: 600px;
        height: 300px;
        background-color: #ffffff;
    }
    .Titulo{
        margin-top: -60%;
        justify-content: center;
    }
</style>