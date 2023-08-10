<template>
    <div class="AccueilContent">
        <section id="biographie">
            <h1>PROFESSEUR SIDYA</h1>
            <h2>~~ Marabout de l'Afrique de l'Ouest ~~</h2>
            <p>"Lorem ipsum dolor sit amet, epteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i</p>
            <button> <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'Prestations' }">Je
                    m'informe!</router-link></button>
        </section>
        <aside>
            <img src="../assets/bleu bougie.jpg" alt="image de bougie bleu">
        </aside>
        <Story class=story />
        <ContactBar class="ContactBar" />

    </div>
</template>

<script lang="ts" setup>

import Story from '@/views/Storys.vue'
import ContactBar from '@/views/ContactBar.vue';

</script>

<style scoped>
.AccueilContent {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px 25px;

}

#biographie {
    position: absolute;
    top: 260px;
}

p {
    font-size: 19px;
    color: white;
    max-width: 44%;
    margin-bottom: 10vh;


}

h1 {
    color: rgb(150, 176, 248);
    margin: 0 0 19px 0;

}

h2 {
    font-style: italic;
    color: white;
    margin-bottom: 45px;
    /* margin-top: 0; */
}

button {
    position: absolute;
    left: 310px;
    width: 287px;
    height: 91px;
    border-radius: 344%;
    background-color: rgb(150, 176, 248);
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 22px;
    border: none;


}

img {
    position: absolute;
    right: 210px;
    bottom: 390px;
    width: 560px;
    height: 340px;
    border-radius: 19px;
    box-shadow: inset 0 0 1em rgb(14, 2, 63), 0 0 2em rgb(14, 2, 63);
}

aside {
    margin-bottom: 85vh;
}

.story {
    margin-bottom: 85px;
}
.ContactBar{
margin-bottom: 30px;
}

</style>