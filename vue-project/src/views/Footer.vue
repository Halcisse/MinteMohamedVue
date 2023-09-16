<template>
<footer>
    <div class="footerText">
        <h3>Professeur Tidiane</h3>
        <p>
            Karamba Diaby <br>
            Chemin Piton Galets <br>
            97439 Saint-Rose <br>
         
            0610101010 <br>
        </p>
        <p>        <router-link :to="{ name: 'Mentions' }">MENTIONS LEGALES</router-link></p>
    </div>
    <div class="footerLogo">
        <img src="../assets/LOGO.png" alt="">
    </div>
</footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>

footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(14, 2, 63);
    height: 200px;
  
     
}
.footerText{

    margin: 0;
    font-size: 11px;
    color:rgb(150, 176, 248);
   
}
h3{
    margin:0 ;
}
p{
    margin:0 ; 
}
img{
    width: 150px;
    height: 140px;
    object-fit: contain;
}
</style>