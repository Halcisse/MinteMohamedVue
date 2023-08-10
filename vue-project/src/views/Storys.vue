<template>
    <div class="temoignages">
        <div class="title">
            <h1>TÉMOIGNAGES</h1>
            <h2>~~ Les clients qui nous ont fais confiance ~~</h2>
        </div>
        <div class="caroussel">
            <div class="slides">
                <div class="storycard">
                    <p class="name">Magalie M.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        J'ai contacté Professeur Sidya lorsque mon copain de longue date m'a quittée pour une autre. Grâce à
                        son travail, Mr est revenus à moi plus amoureux que jamais en seulement quelques jours! Je
                        recommande!
                    </p>
                </div>
                <div class="storycard">
                    <p class="name">Benoit V.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        J'ai contacté Professeur Sidya lorsque mon copain de longue date m'a quittée pour une autre. Grâce à
                        son travail, Mr est revenus à moi plus amoureux que jamais en seulement quelques jours! Je
                        recommande!</p>
                </div>
                <div class="storycard">
                    <p class="name">Salima B.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        J'ai contacté Professeur Sidya lorsque mon copain de longue date m'a quittée pour une autre. Grâce à
                        son travail, Mr est revenus à moi plus amoureux que jamais en seulement quelques jours! Je
                        recommande!</p>
                </div>
                <div class="storycard">
                    <p class="name">Ornella P.</p>
                    <div class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </div>
                    <p class="story">
                        J'ai contacté Professeur Sidya lorsque mon copain de longue date m'a quittée pour une autre. Grâce à
                        son travail, Mr est revenus à moi plus amoureux que jamais en seulement quelques jours! Je
                        recommande!</p>
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
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.caroussel {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    width: 503px;
    /* background-color: red; */
    overflow: hidden;
    position: relative;
    border-radius: 10%;

}

.storycard {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border-radius: 10%;
    /* margin: 0 55px; */
    width: 490px;
    height: 399px;
    list-style-type: none;
    position: relative;

}

h1 {
    color: white;
    position: relative;
    margin-bottom: 10px²;
}

h2 {
    position: relative;
    margin-top: 0;
}

p {
    font-style: italic;

}

font-awesome-icon {
    color: white;
    background-color: red;
}

.slides {
    display: flex;
    animation: 30s Glisse infinite;

}

@keyframes Glisse {
    0% {
        transform: translateX(0);
    }

    33% {
        transform: translateX(-503px);
    }

    59% {
        transform: translateX(-1006px);
    }

    83% {
        transform: translateX(-1509px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>