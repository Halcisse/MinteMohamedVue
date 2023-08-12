<template>
    <div class="ContactContent">
        <div class="title">
            <h1>Formulaire</h1>
            <h2>Envoyez un message pour plus d'informations!</h2>
        </div>
        <Formulaire />
        <ContactBar class="ContactBar" />
    </div>
</template>

<script lang="ts" setup>
import ContactBar from '@/views/ContactBar.vue';
import Formulaire from '@/views/Formulaire.vue';

</script>

<style scoped>
.ContactContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: aqua; */

}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    background-color:  rgb(14, 2, 63);
    /* background-image:linear-gradient(to bottom,
            rgba(252, 252, 251, 0.589),
            rgba(136, 136, 240, 0.781)),
        url('../assets/background.jpg');
        background-position-y:center;
        background-repeat: no-repeat;
        background-size:cover; */

}

h2,
h1 {
  
    letter-spacing: 2px;
}

.ContactBar {
    margin-bottom: 40px;
}</style>