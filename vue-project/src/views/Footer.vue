<template>
<footer>
    <div class="footerLink">
        
        Image de <a href="https://fr.freepik.com/photos-gratuite/ingredients-cles-pres-bougies_2014709.htm#query=potion%20d%20amour&position=1&from_view=search&track=ais">Freepik</a>
        <p>        <router-link :to="{ name: 'Mentions' }">MENTIONS LEGALES</router-link></p>
    
</div>
    <div class="footerText">
        <h3>Professeur Tidiane</h3>
        
        <p>
         <br>
            Chemin Piton Galets <br>
            97439 Saint-Rose <br>
            LA REUNION <br>
         
            07.53.79.65.18 <br>
        </p>
    
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
    color:rgb(150, 176, 248);
  
     
}
a{
    text-decoration: none;
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


@media (max-width: 991.98px) {
    footer{
    display: flex;
    flex-direction: column;
height: auto;
padding-top: 20px;     
}
.footerText, .footerLink{
margin-bottom: 50px;
font-size: 15px;
color:rgb(150, 176, 248);

}

}
</style>