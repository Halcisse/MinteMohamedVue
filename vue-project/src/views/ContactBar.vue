<template>
    <div class="contactBar">
        <h1> CONTACTEZ-NOUS </h1>
        <h2> ~~ Joignable 24/24h ~~ Consulations à distance possible ~~ </h2>
        <div class="ContactCard">
            <a class="contactBtn" href="mailto:halimatou.cisse@gmail.com">
                <div class=" card email">
                    <div class="title"> <font-awesome-icon :icon="['fas', 'at']" /> Par mail</div>
                    <div class="email">

                        Cliquez ici pour envoyer un email!

                    </div>
                </div>
            </a>
            <a class="contactBtn" href="tel:+33673498904">
                <div class="card telephone">
                    <div class="title"> <font-awesome-icon icon="phone" /> Par téléphone</div>
                    <div class="phoneNumber">
                        06.73.49.89.04
                    </div>
                </div>
            </a>
        </div>
        <div class="toContactPage">
            <p>Vous pouvez aussi nous contacter via le formulaire en cliquant
                <router-link class="link" :to="{ name: 'Contact' }">ICI !</router-link>
            </p>
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
    justify-content: center;

}

.ContactCard {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 120px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 2px solid rgb(14, 2, 63); */
    border-radius: 50%;
    margin: 0 20px 10px 20px;
    height: 210px;
    width: 420px;
}

h1 {
    margin-top: 0;
    color: rgb(14, 2, 63);
    margin-bottom: 25px;
}

h2 {
    margin-top: 0;
    margin-bottom: 16vh;
    color: rgb(150, 176, 248);
}

.title {
    color: rgb(150, 176, 248);
    border-bottom: 40px;
    font-size: 24px;
}

.contactBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(14, 2, 63);
    font-size: 20px;
}
.contactBtn :hover{
    color: rgb(14, 2, 63);
    background-color: white;
    box-shadow: 10px 5px 5px rgb(150, 176, 248);
    border-radius: 50%;
    height: 210px;
    width: 420px;

}

.toContactPage {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    font-size: 22px;
    width: 100%;
    background-color: rgb(14, 2, 63);
    color: rgb(150, 176, 248);
    margin: 0;

}

.link {
    color: rgb(150, 176, 248);
}
.link:hover{
    text-decoration: none;
}</style>