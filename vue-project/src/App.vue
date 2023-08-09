<template>
 
   <div class="app-content">
    <TheHeader class="header b1" />
    <RouterView class="router b2" />
    <TheFooter class="footer b3" />
   </div>

</template>

<script setup lang ="ts">

import { RouterView } from "vue-router";
import TheHeader from '@/views/Header.vue'
import TheFooter from '@/views/Footer.vue'

</script >



<style >
body{
  font-family: 'Satisfy', cursive;
  color: white;
  background-color: rgb(14, 2, 63);
}
      
.app-content{
  min-height: 98vh;
  display: grid;
  grid-template-areas: 'header heder' 'router router' 'footer footer';
  grid-template-columns:100%;
  grid-template-rows: 48px auto 48px;

 }  
 .header   {
  grid-area: header;
 }
 .router{
  grid-area: router;
 }
 .footer{
  grid-area: footer;
 }


</style>