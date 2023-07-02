<template>
<div class="ContactContent">
    <Header  />
    <h1>Contact page</h1>
    <Footer  />
</div>
</template>

<script lang="ts" setup>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

</script>

<style>
.ContactContent{
    display: flex;
flex-direction: column;
justify-content: space-between;
    height: 903px
}
</style>