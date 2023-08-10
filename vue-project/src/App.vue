<template>
  <div class="app-content">
    <TheHeader class="header " />
    <RouterView class="router " />
    <TheFooter class="footer " />
  </div>
</template>

<script setup lang ="ts">

import { RouterView } from "vue-router";
import TheHeader from '@/views/Header.vue'
import TheFooter from '@/views/Footer.vue'

</script >



<style >
body {
  font-family: 'Satisfy', cursive;
  color: white;
  margin: 0;
  /* background-color: rgb(14, 2, 63); */
}

.app-content {
  min-height: 175vh;
  display: grid;
  grid-template-areas: 'header heder' 'router router' 'footer footer';
  grid-template-columns: 100%;
  grid-template-rows: 48px auto 48px;

}

.header {
  grid-area: header;
  
}

.router {
  grid-area: router;
}

.footer {
  grid-area: footer;
}

h1 {
  color: rgb(150, 176, 248);
  /* margin: 0 0 19px 0; */

}

h2 {

  font-style: italic;
  color: white;
  margin-bottom: 45px;
  /* margin-top: 0; */
}
</style>