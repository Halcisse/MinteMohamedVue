<template>
<div class="AccueilContent">
<Header  />
    
    <section id="biographie">
        <h1>PROFESSEUR SIDYA</h1>
        <h2>Marabout de l'Afrique de l'Ouest</h2>
        <p>"Lorem ipsum dolor sit amet, epteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i</p>
        <button> <router-link :to="{name: 'Infos'}">Je m'informe!</router-link></button>
    </section>
    <aside>
        <img src="../assets/bleu bougie.jpg" alt="image de bougie bleu">
    </aside>
    
    <Footer  />

</div>
</template>

<script lang="ts" setup>

import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'


    name: 'Accueil'


</script>

<style scoped>
.AccueilContent{
display: flex;
flex-direction: column;
justify-content: space-between;
height: 903px
}
#biographie{
    position: absolute;
    top: 320px;
}
p{
    font-size: 19px;
    color: white;
    max-width: 44%;
 
   
}
h1{
    color: rgb(150, 176, 248);
    margin: 0 0 19px 0 ;
    
}
h2{
    font-style: italic;
    color: white;
    margin-bottom: 45px;
    /* margin-top: 0; */
}
button{
    position: fixed;
    left: 310px;
    width: 187px;
    height: 61px;
    border-radius: 344%;
    background-color: rgb(150, 176, 248);
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 16px;
    border: none;
}
img{
    position: absolute;
    right: 340px;
    bottom: 390px;
    width: 560px;
    height: 340px;
    border-radius: 19px;
}

</style>