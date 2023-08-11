<template>
    <div class="PrestationsContent">
        <h1>Prestations page</h1>
        <ContactBar class="ContactBar"/>
    </div>
</template>

<script lang="ts" setup>
import ContactBar from '@/views/ContactBar.vue';


</script>

<style>
.PrestationsContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.ContactBar {
    margin-bottom: 40px;
}
</style>