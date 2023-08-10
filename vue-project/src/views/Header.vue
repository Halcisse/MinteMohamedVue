<template>
    <header>
        <div class="headerBar">
            <h1>PROFESSEUR SIDYA</h1>
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
    background-color: rgb(14, 2, 63);
   

}

h1 {

    font-size: 17px;
    color: white;
    margin-left: 18px;

}

.menu {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    padding: 8px;
    width: 50%;
    font-size: 19px;
    letter-spacing: 2px;

}

a {
    text-decoration: none;
    color: white;

}

a:hover {

    color: rgb(150, 176, 248);
    font-weight: bold;

}
</style>