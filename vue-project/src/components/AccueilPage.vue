<template>
    <div class="AccueilContent">
<div class="accueilSlide">
    <section id="biographie">
            <div class="title">
                <h1>MARABOUT TIDIANE</h1>
            <h2> Spécialiste des pratiques ancestrale de l'Afrique de l'Ouest </h2>
            </div>
<div class="content">
            <p>Bienvenue sur mon site !
                <br><br>Je suis le Marabout TIDIANE, Marabout Voyant Médium et spécialiste du retour affectif.
                <br><br>
              Résidant sur l'île de la Réunion, je serais ravi de vous acceuillir à mon atelier pour les consultations, mais également à distance, par téléphone ou mail. 
              <br><br>
                Ayant hérité du don de voyances, je me suis formé  depuis l'enfance aux pratiques de maraboutage et de voyance enseignés par mes ainés. <br>
                 Ces enseignements sont transmis de générations en générations, selon les rites traditionnelles et ancestraux de l'Afrique de l'Ouest.
                <br><br>
                Grâce à la précision de mes prédictions et la qualité de mon accompagnement, j'ai su perfectionner mes méthodes au fil des années et ainsi devenir une figure incontournable des marabouts de France.  <br>
              . <br>
                Ma vocation me pousse à mettre à disposition mes dons, afin de vous accompagner dans votre épanouissement et votre
                cheminement vers la paix intérieur.
                <br> <br> <br>
                Découvrez dès maintenant mon savoir-faire en cliquant sur le bouton ci-dessous.
            </p>
            <div class="img">
                
                <img src="../assets/cory.jpg" alt="image de bougie bleu">
            </div>
</div>
            
        </section>
        <aside>
            <div class="btn">
                            <button> 
                <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'Prestations' }">Je
                    m'informe!</router-link>
            </button>
            </div>
        </aside>
</div>
      
       
       
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
    justify-content: center;
    align-items: center; 
    margin-top: 110px;

  

}
.accueilSlide{
     max-width: 70%;
  

}
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    background-color: rgb(14, 2, 63);
    color: white;
    letter-spacing: 2px;
    margin-bottom: 170px;

}

.content{
display: flex;
   flex-direction: row;
   justify-content: space-around;
   margin-bottom: 53px;
   border-left:1px solid rgb(14, 2, 63) ;
   border-right:1px solid rgb(14, 2, 63) ;
}
p {
    font-size: 19px;
    color: rgb(14, 2, 63);
    text-align: center;
    padding: 31px ;
    width: 100%;
}
aside{
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    width: 287px;
    height: 71px;
    border-radius: 55px;
    background-color: rgb(14, 2, 63);
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 22px;
    letter-spacing: 2px;
    overflow: hidden;
    border: none;
    cursor: pointer;
    margin-bottom: 33px;


}

button:hover,
button:focus {
    color: rgb(14, 2, 63);
    background-color: white;
    box-shadow: 10px 5px 5px rgb(14, 2, 63);
}


img {
    width:100%;
    height: 100%;
    /* box-shadow: inset 0 0 1em rgb(141, 140, 148), 0 0 2em rgb(165, 165, 167); */
    overflow: hidden;
    object-fit: cover;
    
}


.story {
    position: relative;
    margin-bottom: 170px;
    width: 70%;
}

.ContactBar {
    margin-bottom: 40px;
    width: 70%;

}
</style>