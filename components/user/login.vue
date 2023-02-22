<template>
    <v-card class="Tarjeta"> <!--Esta es la tarjeta-->
        <img src="" alt="">
        <v-card-title class="Titulo">Inicia Sesion</v-card-title> <!--Este es el titulo-->
        <v-card-text>
            <v-form v-model="formularioValido"> <!--Este es el formulario-->
                <v-text-field label="Correo Electronico" placeholder="Correo electronico" v-model="correoElectronico"/>
            </v-form>
        </v-card-text>

        <v-card-actions> <!--Este es para los botones-->
            Botones
        </v-card-actions>
    </v-card>
</template>

<script>
    export default{
        data(){
            return{
                formularioValido: false,
                correoElectronico: ''
            }
        }
    }
</script>

<style scoped>
    .Tarjeta{
        width: 600px;
        height: 300px;
        background-color: #5c7774;
    }

    .Titulo{
        justify-content: center;
    }
</style>