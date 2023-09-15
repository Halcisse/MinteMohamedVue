<template>
    <div class="temoignages">
<div class="story">
    <div class="title">
            <h1>TÉMOIGNAGES</h1>
            <h2>Les clients qui nous ont fais confiance </h2>
        </div>
        <div class="caroussel">
            <div class="slides">
                <div class="storycard">
                    <p class="name"> - Magalie M.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        J'ai contacté Professeur Tidiane lorsque mon copain de longue date m'a quittée pour une autre. Grâce à
                        son travail, Mr est revenus à moi plus amoureux que jamais! Je
                        recommande!
                    </p>
                </div>
                <div class="storycard">
                    <p class="name"> - Benoit V.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        Une amie m'a recommandé le Professeur Tidiane pour m'aider, j'avais un manque d'energie et des
                        blocages dans ma vie professionnelle. Grâce aux rituels de Mr Tidiane, j'ai pu enfin me retrouver. Un
                        grand merci !
                    </p>
                </div>
                <div class="storycard">
                    <p class="name"> - Salima B.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        Victime d'un envoutement, Professeur Tidiane est celui qui m'a permis de m'en libérer. Je n'ai pas les mots pour exprimer ma gratitude.</p>
                </div>
                <div class="storycard">
                    <p class="name"> - Ornella P.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">

                        J'étais sceptique à l'idée de consulter un voyant, mais je n'ai pas été déçue de mon expérience avec
                        Professeur Tidiane. Il a su me guider avec bienveillance et m'a donné des conseils précieux pour
                        m'aider à comprendre l'univers ésotérique.</p>
                </div>
            </div>
        </div>
</div>
    </div>
</template>


<script lang="ts" setup>




</script>

<style scoped>
.temoignages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      background-image:linear-gradient(to top,
            rgba(14,2,63,0),
            rgba(136, 136, 240, 0.781)),
        url('../assets/background.jpg');
        background-size:cover;
         background-position-y:center;
        background-repeat: no-repeat;
   
    /* background-image:url('../assets/eyewhite.png' );
    background-size: 100px; */
margin:140px 340px ;
padding-top: 40px;
   
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;


}

.caroussel {
    display: flex;
    width: 553px;
    overflow: hidden;
    position: relative;
 
 

}


.storycard {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border-radius: 10%;
    width: 490px;
    height: auto;
    list-style-type: none;
    position: relative;

}


h1 {
    color:rgb(14, 2, 63);
    position: relative;
    margin: 0;
    
}

h2 {
    position: relative;
    margin: 0;
    color: white
}

p {
    font-style: italic;
    color:rgb(14, 2, 63);

}
.stars{
    color:rgb(14, 2, 63)
}


.slides {
    display: flex;
    animation: 30s Glisse infinite;

}

@keyframes Glisse {
    0% {
        transform: translateX(0);
    }

    35% {
        transform: translateX(-503px);
    }

    62% {
        transform: translateX(-1006px);
    }

    85% {
        transform: translateX(-1509px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>