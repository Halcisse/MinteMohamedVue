<template>
    <div class="AccueilContent">
        <section id="biographie">
            <h1>PROFESSEUR SIDYA</h1>
            <h2>~~ Marabout de l'Afrique de l'Ouest ~~</h2>
            <p>Bienvenue sur le site du Professeur Sydia, Marabout Voyant Médium et spécialiste du retour affectif. <br>
                Il est une figure incontournable des marabouts de France, notamment connu pour la précision de ses
                prédictions et
                la qualité de son accompagnement. <br>
                Il a appris dès l’enfance, les techniques transmises de génération en génération par ses aînés, et les a
                perfectionné depuis son arrivée en France. <br>
                Professeur Sidya mets à disposition ses dons, afin de vous accompagner dans votre épanouissement et votre
                cheminement vers la paix intérieur.
                <br>
                Découvrez dès maintenant son savoir-faire en cliquant sur le bouton ci-dessous.
            </p>
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
    background-color: white;

}

#biographie {
    position: absolute;
    top: 180px;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    max-width: 75%;
    margin-bottom: 10vh;


}

h1 {
    color: rgb(150, 176, 248);
    margin: 0 0 19px 39px;
    letter-spacing: 2px;
}

h2 {
    font-style: italic;
    color: rgb(150, 176, 248);
    margin-bottom: 45px;
    margin-left: 39px;

}

p {
    
    color: rgb(14, 2, 63);
    margin-left: 39px;
}

button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 310px;
    width: 287px;
    height: 71px;
    border-radius: 55px;
    background-color: rgb(14, 2, 63);
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 22px;
    letter-spacing: 2px;
    /* box-shadow: 16px 14px 20px red; */
    overflow: hidden;
    border: none;


}

button:hover,
button:focus {
    color: rgb(14, 2, 63);
    background-color: white;
    box-shadow: 10px 5px 5px rgb(150, 176, 248);
}


img {
    position: absolute;
    right: 210px;
    bottom: 390px;
    width: 560px;
    height: 340px;
    border-radius: 19px;
    box-shadow: inset 0 0 1em rgb(14, 2, 63), 0 0 2em rgb(14, 2, 63);
    overflow: hidden;
}

aside {
    margin-bottom: 85vh;
}

.story {
    margin-bottom: 190px;
}

.ContactBar {
    margin-bottom: 80px;
}</style>