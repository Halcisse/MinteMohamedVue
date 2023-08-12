<template>
    <form action="">
        <div class="formulaire">
            <p>Retour rapide!</p>
            <p>Réservez une consultation dès maintenant!</p>
            <input class="nom" type="text" placeholder="Nom">
            <input class="prenom" type="text" placeholder="Prénom">
            <input class="telephone" type="phone" placeholder="Téléphone">
            <input class="message" type="text" placeholder="Votre message..">
        </div>
    </form>
</template>

<script lang="ts" setup>

</script>

<style scoped>
form {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(to bottom,
            rgba(252, 252, 251, 0.229),
            rgba(136, 136, 240, 0.681)),
        url('../assets/backwhite.jpg');
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.formulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 6px solid rgb(14, 2, 63);
    --c: rgb(14, 2, 63);
    /* the border color */
    --b: 10px;
    /* the border thickness*/
    --g: 5px;
    /* the gap on hover */

    padding: calc(var(--g) + var(--b));
    --_g: #0000 25%, var(--c) 0;
    background:
        conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
        conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0 var(--_i, 200%)/var(--_i, var(--b)) 200% no-repeat;
    transition: .3s, background-position .2s .2s;
    cursor: pointer;

}

.formulaire:hover {
    --_i: 100%;
    transition: .3s, background-size .2s .2s;
}


input {
    border: none;
    margin-bottom: 10px;
    width: 80%;
    margin: 25px 180px;
    text-decoration: none;

}

.nom,
.prenom,
.telephone {
    height: 40px;
}

.message {
    height: 170px;
}
p{
    color:rgb(14, 2, 63);
    font-size: 19px;
}</style>