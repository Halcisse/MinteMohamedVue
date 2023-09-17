<template>
    <div class="PrestationsContent">
        <div class="titlePrest">
            <h1>Mes prestations & rituels</h1>
            <h2>Services de Voyance et Rituels Occultes : votre guide vers un avenir meilleur</h2>

        </div>
        <div class="prestContainer">
            <div class="prestCard">
                <div class="card">

                    <h3 class="cardTitle">Services de Marabout</h3>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel..</p>
                        <img src="../assets/marabout.jpg" alt="photo prestation">
                </div>
                <div class="card">
           
                    <h3 class="cardTitle">Rituels de retour affectif</h3>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                        <img src="../assets/ingredients-cles-pres-bougies.jpg" alt="photo prestation retour affectif">
                </div>
                <div class="card">
                 
                    <h3 class="cardTitle">Voyance</h3>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                        <img src="../assets/numerology-concept-still-life (1).jpg" alt="photo prestation voyance">
                </div>
                <div class="card">
              
                    <h3 class="cardTitle">Guérisseur spirituel</h3>
                    <p>Mon service de guide spirituel offre une variété de services et de conseils spirituels qui peuvent
                        aider à améliorer votre bien-être et votre bien-être général. Un guide spécialisé qui offre des
                        conseils et des outils personnalisés pour vous aider à explorer et à comprendre vos croyances
                        spirituelles, à découvrir votre cheminement spirituel.</p>
                        <img src="../assets/formImg.jpg" alt="photo prestation guérisseur">
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
    justify-content: center;
    align-items: center;
}

.titlePrest {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(14, 2, 63);
    width: 70%;
    margin-top: 110px;
    margin-bottom: 90px;

}

h2,
h1 {

    letter-spacing: 2px;
    text-align: center;
}
p{
    padding: 18px;
}

.prestContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    width: 70%; 
      
}

.prestCard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid rgb(14, 2, 63)
 
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid  rgb(14, 2, 63);
    margin: 55px;
    height: auto;
    width: 50%; 
    box-shadow: 10px 5px 5px rgb(150, 176, 248, 0.2);
    overflow: hidden;


}
.card:hover {
    box-shadow: 10px 5px 5px rgb(14, 2, 63, 0.2);
    cursor: pointer;
}

.cardTitle {
    font-size: 22px;
    font-weight: bold;
}

img {
width: 100%; 
height: 194px;
    object-fit:cover;
    object-position: 10% 80%;
    /* margin-bottom: 15px;
    border-radius: 8px; */
 
}

.ContactBar {
    margin-bottom: 40px;
    width: 70%;
}

@media (max-width: 991.98px) {

.titlePrest{
    width: 100%;
    margin-top: 140px;
}
.prestContainer {
width: 100%;
 
}
.card{
    max-width: 70%;
}

.ContactBar {
 
    width: 100%;
}

}
@media (max-width:469px) {
    .PrestationsContent {
        width: 100%;
}
    .prestContainer {
width: 100%;
 
}
    .card{
    width: 100%;
}
}
</style>