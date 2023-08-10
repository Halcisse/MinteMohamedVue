<template>
    <div class="contactBar">
        <h1>Contactez nous!</h1>
        <h2> ~~ Joignable 24/24h ~~ Consulations à distance possible ~~ </h2>
        <div class="ContactCard">
            <div class=" card email">
                <div class="title">Par mail</div>
                <email>hal.cisse@gmail.com</email>
            </div>
            <div class="card telephone">
                <div class="title">Par téléphone</div>
                <div class="phoneNumber">0606060606</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style>
.contactBar {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.ContactCard {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    margin: 0 20px 10px 20px;
    height: 190px;
    width: 320px;
}

h1{
    margin-bottom: 15px;
}
h2{
    margin-top: 0;
}
</style>