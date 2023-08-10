<template>
    <div class="contactBar">
        <h1> CONTACTEZ-NOUS </h1>
        <h2> ~~ Joignable 24/24h ~~ Consulations à distance possible ~~ </h2>
        <div class="ContactCard">
            <div class=" card email">
                <div class="title"> <font-awesome-icon :icon="['fas', 'at']" />   Par mail</div>
                <div class="email">
                    <a href="mailto:halimatou.cisse@gmail.com">
                        Cliquez ici pour envoyer un email!
                    </a>
                </div>
            </div>
            <div class="card telephone">
                <div class="title"> <font-awesome-icon icon="phone" />      Par téléphone</div>
                <div class="phoneNumber">
                    <a href="tel:+33673498904">06.73.49.89.04</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style>
.contactBar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.ContactCard {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 10px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    margin: 0 20px 10px 20px;
    height: 210px;
    width: 420px;
}

h1 {
    color: white;
    margin-bottom: 25px;
}

h2 {
    margin-top: 0;
    margin-bottom: 22vh;
}

.title {
    color: rgb(150, 176, 248);
    border-bottom: 40px;
    font-size: 24px;
}

a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 20px;
}


</style>