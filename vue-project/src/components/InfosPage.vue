<template>
     <div class="InfosContent">
          <Header  />
          <h1>Infos page</h1>
          <Footer  />
     </div>

</template>


<script lang="ts" setup>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'


</script>

<style>
.InfosContent{
    display: flex;
flex-direction: column;
justify-content: space-between;
    height: 903px
}
</style>