<template>
    <header>
        <div class="headerBar">
            <h1>PROFESSEUR TIDIANE</h1>
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

    
}

h1 {
    letter-spacing: 2px;
    font-size: 17px;
    color: rgb(150, 176, 248 );
    margin-left: 39px;
    margin-top: 10px;

}

.menu {
    /* z-index: 1; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    width: 50%;
    font-size: 19px;
    letter-spacing: 2px;
   

}

a {
    text-decoration: none;
       color: rgb(150, 176, 248 );
    font-weight: bold;

}

a:hover {

    color: rgb(14, 2, 63);
    font-weight: bold;

}
</style>