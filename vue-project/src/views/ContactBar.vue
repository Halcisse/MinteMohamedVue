<template>
    <div class="contactBar">
        <h1> CONTACTS</h1>
        <h2> ~~ Joignable 24/24h ~~ Consulations à distance possible ~~ </h2>
        <div class="ContactCard">
            <a class="contactBtn" href="mailto:halimatou.cisse@gmail.com">
                <div class=" card email">
                    <div class="title"> <font-awesome-icon :icon="['fas', 'at']" /> Par mail</div>
                    <div class="email">

                        Cliquez ici pour envoyer un email

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
            <p>Vous pouvez aussi me contacter via le formulaire
                <router-link class="link" :to="{ name: 'Contact' }"><span>~~ en
                        cliquant ici ~~</span> </router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.contactBar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    /* background-image:linear-gradient(to top,
            rgba(252, 252, 251, 0.829),
            rgba(136, 136, 240, 0.181)), */
        /* url('../assets/layers-white-paint-background.jpg'); */
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: solid 2px rgb(14, 2, 63);

}

.ContactCard {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 50px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 210px;
    width: 420px;
}

h1,
h2 {
    margin-top: 25px;
    color: rgb(14, 2, 63);

}



p {
    font-size: 22px;
}

fas {
    margin-right: 2px;
}

.title {
    color: rgb(150, 176, 248);
    /* border-bottom: 40px; */
    font-size: 24px;
}

a:not(.active, .link) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(14, 2, 63);
    font-size: 20px;
    letter-spacing: 2px;
    box-shadow: 10px 5px 5px rgb(14, 2, 63, 0.3);
    border-radius: 50%;
}

a:hover:not(.active, .link) {
    box-shadow: 10px 5px 5px rgb(150, 176, 248);
    border-radius: 50%;
}

.toContactPage {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    font-size: 22px;
    width: 100%;
}

.link,
p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(14, 2, 63);
    ;
    font-size: 24px;
    text-decoration: none;

}

span {
    font-weight: bold;
}</style>