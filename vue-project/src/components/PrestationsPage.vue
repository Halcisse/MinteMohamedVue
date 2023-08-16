<template>
    <div class="PrestationsContent">
        <div class="title">
            <h1>Mes prestations & rituels</h1>
            <h2>Services de Voyance et Rituels Occultes : votre guide vers un avenir meilleur</h2>

        </div>
        <div class="prestContainer">
            <div class="prestCard">
                <div class="card">
                    <img src="../assets/marabout.jpg" alt="photo prestation">
                    <div class="cardTitle">Services de Marabout</div>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel..</p>

                </div>
                <div class="card">
                    <img src="../assets/1555.jpg" alt="photo prestation retour affectif">
                    <div class="cardTitle">Rituels de retour affectif</div>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                </div>
                <div class="card">
                    <img src="../assets/numerology-concept-still-life (1).jpg" alt="photo prestation voyance">
                    <div class="cardTitle">Voyance</div>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                </div>
                <div class="card">
                    <img src="../assets/formImg.jpg" alt="photo prestation guérisseur">
                    <div class="cardTitle">Guérisseur spirituel</div>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                </div>
            </div>
        </div>

        <ContactBar class="ContactBar" />
    </div>
</template>

<script lang="ts" setup>
import ContactBar from '@/views/ContactBar.vue';


</script>

<style scoped>
.PrestationsContent {
    color: rgb(14, 2, 63);
    display: flex;
    flex-direction: column;
    justify-content: space-between;


}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    background-color: rgb(14, 2, 63);
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

.prestContainer {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100%;
    background-image: 
        url('../assets/layers-white-paint-background.jpg');
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.prestCard {
    display: flex;
    justify-content: space-between;


}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid white;
    margin: 55px;
    padding: 5px;
    height: auto;
    width: 100%; 
    background-color: white;
    box-shadow: 10px 5px 5px rgb(14, 2, 63, 0.4);
    border-radius: 20px;
    overflow: hidden;


}
.card:hover {
    box-shadow: 10px 5px 5px rgb(14, 2, 63);
    cursor: pointer;
}

.cardTitle {
    font-size: 22px;
    font-weight: bold;
}

img {

    width: 100%;
    object-fit: cover;
    height: 190px;
    margin-bottom: 15px;
    border-radius: 8px;
 
}

.ContactBar {
    margin-bottom: 40px;
}
</style>