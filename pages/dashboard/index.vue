
<template>
    <div class="Div">
        <principal class="principal"/>
    </div>
</template>

<script>
import principal from '~/components/dashboard/principal.vue'
 export default{
    auth: false,
    layout: 'dashboard',
    components: {
        principal
    }
 }
</script>

<style>
    .Div{
        margin-left: 30px;
        margin-top: 11px;
    
    }
</style>