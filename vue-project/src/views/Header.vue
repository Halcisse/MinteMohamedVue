<template>
    <header>
        <div id="ellipse"></div>
        <div class="headerBar">
            <h1>PROFESSEUR SIDYA</h1>
            <div class="menu">
                <router-link :to="{name: 'Accueil'}">Accueil</router-link>
                <router-link :to="{name: 'Prestations'}">Prestations</router-link>
                <router-link :to="{name: 'Contact'}">Contact</router-link>
                <router-link :to="{name: 'Infos'}">EN SAVOIR PLUS</router-link>
            </div>
        </div>

    </header>

</template>

<script lang="ts" setup>

</script>

<style scoped>
#ellipse{
    position: fixed;
    top: -530px;
    left: 560px;
    background-color: rgb(150, 176, 248);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 1em rgb(14, 2, 63), 0 0 2em rgb(150, 176, 248);

    
    
} 
.headerBar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin : 0 25px;
    
}
h1{
   
    font-size: 17px;
    color: white;
   
}
.menu{
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    width: 50%;
    font-size: 19px;
    
}
a{
    text-decoration: none;
    color: white;
 
}
a:hover{

   color: rgb(14, 2, 63);
   font-weight: bold;
    
}

  

</style>