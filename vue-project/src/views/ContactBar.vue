<template>
    <div class="contactBar">
<div class="contactTitle">
    <h1> CONTACTS</h1>
        <h2>  Joignable 24/24h  </h2>
        <h2>Consulations à distance possible</h2>
</div>
        <div class="ContactCard">
            <a class="contactBtn" href="mailto:maraboutidiane@gmail.com">
                <div class=" card email">
                    <div class="titleCard"> <font-awesome-icon :icon="['fas', 'at']" /> Par mail</div>
                    <div class="email">

                        Cliquez ici pour envoyer un email

                    </div>
                </div>
            </a>
            <a class="contactBtn" href="tel:+33753796518">
                <div class="card telephone">
                    <div class="titleCard"> <font-awesome-icon icon="phone" /> Par téléphone</div>
                    <div class="phoneNumber">
                        07.53.79.65.18
                    </div>
                </div>
            </a>
         
                <div class="card formulaire">
                    
                    <router-link class="link" :to="{ name: 'Contact' }">
                        <div class="titleCard"> <font-awesome-icon icon="fa-solid fa-comment-dots" /> Via le formulaire</div><span> en
                        cliquant ici </span> </router-link>
                </div>
           
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
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
    /* width: 70%; */
 
    /* border-bottom: solid 2px rgb(14, 2, 63); */

}

.contactTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  width: 100%;
    background-color: rgb(14, 2, 63);
    /* border:1px solid rgb(14, 2, 63) ; */
    margin-bottom: 100px;
}
.ContactCard {
    display: flex;
    align-items: center;
    justify-content: center;
   width: 100%;
    flex-wrap: wrap;
    /* margin-bottom: 50px; */
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 400px;
    border:1px solid rgb(14, 2, 63) ;
    margin: 20px;
    /* box-shadow: 10px 5px 5px rgb(14, 2, 63, 0.3); */

}
.card:hover{  
      box-shadow: 10px 5px 5px rgb(14, 2, 63);
    }

h1,
h2 {
    /* margin-top: 25px; */
    color: white;
    margin-bottom: 18px;

}



p {
    font-size: 22px;
}



.titleCard {
    color: rgb(14, 2, 63);
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
    /* box-shadow: 10px 5px 5px rgb(14, 2, 63, 0.3); */
}




.link,
p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(14, 2, 63);
     font-size: 24px;
    text-decoration: none;

}

span, a {
    font-weight: bold;
}
.email{
   text-align: center;
   padding: 3px;
}


@media (max-width: 1255px) {
    /* .ContactCard {
    display: flex;
    flex-direction: column;
 
} */
.card{
   
    height: 210px;
    margin-bottom: 22px;
    border-radius: 16px;
}
.contactTitle{
    width: 100%;
   
}
}

@media (max-width: 991.98px) {

    .contactBar{
        width: 100%;
    }

/* .contactTitle{
    width: 100%;
    background-color: red;
} */
.ContactCard {
    display: flex;
    flex-direction: column;
 
}
.card{

    height: 210px;
    margin-bottom: 22px;
    border-radius: 16px;
}
}


</style>