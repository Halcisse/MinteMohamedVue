<template>
    <header>
        <div class="headerBar">
            <img src="../assets/eyeLOGO.png" alt="Logo Marabout Tidiane" style="width: 150px;height: 110px;">
            <h1>MARABOUT TIDIANE</h1>
            <div class="menu">
                <router-link :to="{ name: 'Accueil' }">ACCUEIL</router-link>
                <router-link :to="{ name: 'Prestations' }">PRESTATIONS</router-link>
                <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
            </div>
        </div>

    </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.headerBar {
 
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;

    

    
}

h1 {
    letter-spacing: 2px;
    font-size: 19px;
    color: white;
    

  

}

.menu {
    /* z-index: 1; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    font-size: 19px;
    letter-spacing: 2px;

 
   

}

a {
    text-decoration: none;
       color: white;
    font-weight: bold;

}

a:hover {
color: white;
    font-weight: bold;
    border-bottom: 1px solid rgb(150, 176, 248);
    color: rgb(150, 176, 248);

}
img{
    object-fit: contain;
}


@media (max-width: 991.98px) {
    .headerBar{
        width: 100%;
    }
}
@media (max-width: 774px) {
    .menu{
        display: flex;
        flex-direction: column;
    }
}
</style>