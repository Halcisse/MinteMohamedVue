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
  display: flex;
  flex-direction: column;


}

.header{
  background-color: rgb(14, 2, 63);
  position: fixed;
  width: 100%;
  z-index: 1;

}

.router{
  margin-bottom: 170px;
}

h1 {
  color: white;


}

h2 {

  font-style: italic;
  color: white;
  margin-bottom: 45px;

}
@media (max-width: 991.98px) {

.header{
  margin-bottom: 100px;
  width: 100%;
}
.router{
  width: 100%;
}

.footer{
  width: 100%;
}
}


</style>