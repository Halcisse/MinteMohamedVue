<template>
    
  <body>
      <Header  />
      <AccueilPage />
      <Footer  />
      
  </body>

</template>

<script setup lang ="ts">
import Header from './components/Header.vue'
import AccueilPage from './components/AccueilPage.vue'
import Footer from './components/Footer.vue'


</script>



<style >
      
body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 25px ;
  font-family: 'Satisfy', cursive;
  background-color: rgb(14, 2, 63);
  max-width: 100%;
  height: 890px;
}

</style>