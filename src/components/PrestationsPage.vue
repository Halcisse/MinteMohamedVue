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
                    <p>Lors des consultations pour le service de Marabout,  nous pourrons couvrir ensemble de nombreux aspects de votre vie tels que la santé, l’amour, la réussite professionnelle, les finances, etc… J’utilise pour cela la méthode de divination ancestrale Ouest Africaine de lecture de Cory.</p>
                        <img src="../assets/marabout.jpg" alt="photo prestation">
                </div>
                <div class="card">
           
                    <h3 class="cardTitle">Rituels de retour affectif</h3>
                    <p>Je me suis également spécialisé au fil des années sur le service de retour d’affection grâce à des rituels d’amour ou des conseils afin d’attirer l’amour dans votre vie. Vous pouvez également me consulter pour résoudre des problèmes personnels, tels que les conflits familiaux, les problèmes de santé, les difficultés financières ou les problèmes conjugaux. </p>
                        <img src="../assets/ingredients-cles-pres-bougies.jpg" alt="photo prestation retour affectif">
                </div>
                <div class="card">
                 
                    <h3 class="cardTitle">Travaux de protection</h3>
                    <p>Je propose des travaux de protection contre les influences négatives, les malédictions, le mauvais œil ou les esprits malfaisants. Cela peut inclure des rituels de protection ou des prières spéciales.</p>
                        <img src="../assets/protection.jpg" alt="photo prestation voyance">
                </div>
                <div class="card">
              
                    <h3 class="cardTitle">Chance & Prospérité</h3>
                    <p>Si vous avez besoin d’attirer la chance et la prospérité dans votre vie, vous êtes au bon endroit ! Je suis en mesure de vous accompagner afin d’améliorer la chance dans votre vie et vous mettre dans les bonnes conditions pour accueillir une vie de richesse.</p>
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
    margin-top: 144px;
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