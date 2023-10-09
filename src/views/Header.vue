<template>
    <header>
        <div class="headerBar">
<div class="logo">
    <img src="../assets/eyeLOGO.png" alt="Logo Marabout Tidiane" >
            <h1>MARABOUT TIDIANE</h1>
</div>
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
    justify-content: space-between;
    padding: 8px;

    

    
}
.logo{
    display: flex;
    align-items: center;
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
    width: 45%;
    font-size: 19px;
    letter-spacing: 2px;
    margin-right: 25px;

 
   

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
    width: 150px;
    height: 110px;
    object-fit: contain;
}


@media (max-width: 991.98px) {
    .headerBar{
        width: 100%;
    }
    .menu, h1{
        display: flex;
        flex-direction: column;
        font-size: 13px;
    }
    img{
        width: 70px;
        height: 100px;
    }
}

</style>