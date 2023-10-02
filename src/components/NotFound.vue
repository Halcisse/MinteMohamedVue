<template>
    <div class="notFound">
<div class="notfoundContent">
    <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
    <h1>Une erreur s'est produite </h1>
        <router-link :to="{ name: 'Accueil' }">Cliquez ici pour revenir à l'accueil</router-link>
</div>
    </div>

    <ContactBar />
  </template>

  <script lang="ts" setup>
import ContactBar from '@/views/ContactBar.vue';
</script>


  <style scoped>

.notFound{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.notfoundContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(150, 176, 248);
    width: 400px;
    height: 400px;
}
h1{
    text-align: center;
}
a{
    color: white;
    text-decoration: none;
    font-size:22px;
}
.fa-circle-exclamation{
    width: 50px;
    height: 50px;
}
</style>