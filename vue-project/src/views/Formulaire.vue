<template>
     <form   @submit="sendEmail" >
        <div class="formulaire">
            <h3>Je vous recontacte rapidement!</h3>
            <h3>Réservez une consultation dès maintenant!</h3>
            <input 
                @focus="handleBlur"
                @blur="handleChange"
                v-model="nomValue" 
                id="nom" type="text"
                name="nom"
                placeholder="Nom"
                required>
            <p v-if="nomError" class="errors"> {{ nomError }}</p>

            <input @focus="blurPrenom" @blur="changePrenom" v-model="prenomValue" id="prenom" type="text" name="prenom"
                placeholder="Prénom" required>
            <div v-if="prenomError" class="errors"> {{ prenomError }}</div>

            <input @focus="blurTelephone" @blur="changeTelephone" v-model="telephoneValue" id="telephone" type="text"
                name="telephone" placeholder="Téléphone" required>
            <div class="errors"> {{ telephoneError }}</div>

            <input @focus="blurMessage" @blur="changeMessage" v-model="messageValue" id="message" type="text" name="message" placeholder="Votre message...   
(10-120 caractères max)" required>
            <!-- <div class="errors"> {{ messageError }}</div> -->


            <input type="hidden" name="_next" value="http://localhost:5173/">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <button   type="submit"  :disabled="isSubmitting" >Envoyer</button>

        </div>

    </form>
</template>

<script lang="ts" setup>

import { useField, useForm, useResetForm } from 'vee-validate'
import {   z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'




const validationSchema = toTypedSchema(
   z.object({
        nom: (z.string().nonempty({ message: 'Le champ est obligatoire' })
            .min(3, { message: "Le nom doit faire plus de 3 caractères" })
            .max(10, { message: "Le nom doit faire moins de 10 caractères" })
            .regex(/^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/, { message: "Le nom ne doit contenir que des lettres" })),
        prenom: (z.string().nonempty({ message: 'Le champ est obligatoire' })
            .min(3, { message: "Le prénom doit faire plus de 3 caractères" })
            .max(10, { message: "Le prénom doit faire moins de 10 caractères" }))
            .regex(/^(([A-Za-zÉÈÎÏéèêîïàç]+['.]?[ ]?|[a-zéèêîïàç]+['-]?)+)$/, { message: 'Le prénom ne doit contenir que des lettres' }),
        telephone: (z.string().nonempty({ message: 'Le champ est obligatoire' })
            .max(10, { message: "Le numéro de téléphone doit comporter 10 chiffres" }))
            .regex(/^(0)[67](\s?\d{2}){4}$/, 'Le numéro de téléphone est invalide'),
        message: (z.string().nonempty({ message: 'Le champ est obligatoire' })
            .min(10, { message: "Le message doit faire au moins 10 caractères" })
            .max(120, { message: "Le message doit faire moins de 120 caractères" }))

    })
 
)



const { handleSubmit, isSubmitting } = useForm({
    validationSchema
})

const { value: nomValue, meta, errorMessage: nomError, handleBlur, handleChange } = useField('nom', validationSchema, { validateOnValueUpdate: false })
const { value: prenomValue, meta: metaPrenom, errorMessage: prenomError, handleBlur: blurPrenom, handleChange: changePrenom } = useField('prenom', validationSchema, { validateOnValueUpdate: false })
const { value: telephoneValue, meta: metaTelephone, errorMessage: telephoneError, handleBlur: blurTelephone, handleChange: changeTelephone } = useField('telephone', validationSchema, { validateOnValueUpdate: false })
const { value: messageValue, meta: metaMessage, errorMessage: messageError, handleBlur: blurMessage, handleChange: changeMessage } = useField('message', validationSchema, { validateOnValueUpdate: false })



const sendEmail = handleSubmit(async (values, {resetForm}) =>{
    //Les données du formulaires 
    const formValues = {
        nom:values.nom,
        prenom: values.prenom,
        telephone: values.telephone,
        message: values.message
}
console.log(formValues)
   //Envoi du formulaire par mail 
       await fetch("https://formsubmit.co/ajax/hal.cisse.pro@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formValues)
})
    .then(response => response.json())
    .then(data => console.log(data) )
    .catch(error => console.log(error));

    alert('Votre message a été envoyé avec succès ! '),
    resetForm()
    
    

// Redirection page accueil 

})






</script>

<style scoped>
pre {
    color: black;
    font-size: 22px;
}

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
    padding: 15px 70px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 22px 0;

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

.popup {
    width: 400px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.1);
    color: rgb(14, 2, 63);
    text-align: center;
    padding: 0 30px 30px;
    visibility: hidden;
}

.popup h2 {
    color: rgb(14, 2, 63);
}

#icon {
    width: 120px;
    height: 120px;
}
</style>