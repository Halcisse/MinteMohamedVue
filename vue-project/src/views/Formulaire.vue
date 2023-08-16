<template>
    <form action="https://formsubmit.co/498066d30b44ec1b37f0b73891ecbcb3" method="POST">
        <div class="formulaire">
            <h3>Je vous recontacte rapidement!</h3>
            <h3>Réservez une consultation dès maintenant!</h3>
            <input @blur="handleChange" v-model="nomValue" id="nom" type="text" name="nom" placeholder="Nom" required>
            <p v-if="nomError" class="errors"> {{ nomError }}</p>

            <input v-model="prenomValue" id="prenom" type="text" name="prenom" placeholder="Prénom" required>
            <div class="errors"> {{ prenomError }}</div>

            <input v-model="telephoneValue" id="telephone" type="text" name="telephone" placeholder="Téléphone" required>
            <div class="errors"> {{ telephoneError }}</div>

            <textarea rows="8" id="message" name="message" placeholder="Votre message...   
(120 caractères max)" required></textarea>
            

            <input type="hidden" name="_next" value="http://localhost:5173/">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <button type="submit">Envoyer</button>
        </div>

    </form>
</template>

<script lang="ts" setup>

import { useField, useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const validationSchema = z.object({
    nom: (z.string().nonempty({ message: 'Le champ est obligatoire' })
        .min(3, { message: "Le nom est trop court" })
        .max(10, { message: "Le nom est trop long" })
        .regex(/^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/, { message: "Le nom ne doit contenir que des lettres" })),
    prenom: (z.string().nonempty({ message: 'Le champ est obligatoire' })
        .min(3, { message: "Le prénom est trop court" })
        .max(10, { message: "Le prénom est trop long!" }))
        .regex(/^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/, { message: 'Le prénom ne doit contenir que des lettres' }),
    telephone: (z.string()
        .max(10, { message: "Le numéro de téléphone est incorrect+10" }))
        .regex(/^(0)[67](\s?\d{2}){4}$/, 'Le numéro de téléphone est invalide'),
    message: (z.string().nonempty({ message: 'Le champ est obligatoire' })
        .min(10, { message: "Le message est trop court" })
        .max(120, { message: "Le message est trop long!" }))

})


useForm({
    validationSchema: toTypedSchema(validationSchema)
})


const { value: nomValue, errorMessage: nomError, handleChange } = useField('nom',  { validateOnValueUpdate: false})
const { value: prenomValue, errorMessage: prenomError } = useField('prenom')
const { value: telephoneValue, errorMessage: telephoneError } = useField('telephone')



//ensemble du formulaire
// useForm()


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


input,
textarea {
    justify-content: flex-start;
    border: none;
    padding: 20px;
    width: 80%;
    margin: 15px 180px;
    outline: none;
    background: white;
    border-radius: 10px;
    font-family: 'Satisfy', cursive;
    font-weight: 500;
}

button {
    border-radius: 55px;
    background-color: rgb(14, 2, 63);
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 22px;
    letter-spacing: 2px;
    width: 287px;
    height: 71px;
    overflow: hidden;
    border: none;
    cursor: pointer;
    margin-bottom: 22px;

}

button:hover,
button:focus {
    color: rgb(14, 2, 63);
    background-color: white;
    box-shadow: 10px 5px 5px rgb(14, 2, 63);
}


h3 {
    color: rgb(14, 2, 63);
    font-size: 19px;
    margin-bottom: 0;
}

.errors {
    margin: 0;
    font-size: 14px;
    /* background-color: aqua; */
    color: rgb(14, 2, 63);
}
</style>