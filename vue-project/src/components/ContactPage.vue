<template>
    <div class="ContactContent">
        <div class="title">
            <h1>Formulaire</h1>
            <h2>Envoyez un message pour plus d'informations!</h2>
        </div>
        <Formulaire class="form" />
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
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: aqua; */

}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    background-color:  rgb(14, 2, 63);
    width: 70%;
    margin-bottom: 100px;

}

h2,
h1 {
    text-align: center;
    letter-spacing: 2px;
}
.form{
    width: 70%;
}

.ContactBar {
    width: 70%;
    margin-bottom: 40px;
}

@media (max-width: 991.98px) {

    .title{
        width: 100%;
        margin-top: 140px;
    }
    .ContactBar {
    width: 100%;

}
.form{
    width: 100%;
}
}



</style>