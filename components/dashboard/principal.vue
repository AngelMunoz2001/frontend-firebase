import { default } from '../../layouts/dashboard.vue';
<template>
    <v-row>
        <v-data-table 
        :heders="headers" 
        :items="desserts" 
        :items-per-page="5" 
        class="elevation-1">

        </v-data-table>
    </v-row>
</template>

<script>
    export default{
        data(){
            return{
                usuarios: [],
                headers: [
                    {
                        text: 'Nombre',
                        align: 'center',
                        sortable: true,
                        value: 'name'
                    },
                    {
                        text: 'Apellidos',
                        align: 'center',
                        sortable: true,
                        value: 'lastname'
                    },
                    {
                        text: 'Correo',
                        align: 'center',
                        sortable: true,
                        value: 'email'
                    },
                    {
                        text: 'Numero de telefono',
                        align: 'center',
                        sortable: true,
                        value: 'number'
                    }
                ]
            }
        },
        methods: {
            async loadUsers(){
                await this.$ax
            }
        }
    }
</script>