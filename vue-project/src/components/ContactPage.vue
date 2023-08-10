<template>
    <div class="ContactContent">
        <h1>Contact page</h1>
        <form action="">Formulaire</form>
        <ContactBar />
    </div>
</template>

<script lang="ts" setup>
import ContactBar from '@/views/ContactBar.vue';

</script>

<style>
.ContactContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>