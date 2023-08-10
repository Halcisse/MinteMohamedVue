<template>
    <div class="temoignages">
        <div class="title">
            <h1> TEMOIGAGNES</h1>
            <h2>~~ Les clients qui nous ont fais confiane ~~</h2>
        </div>
        <ul class="cardContent">
            <li v-if="SlideShow == 1" class="storycard">
                <div class="name">Name1</div>
                <div class="story">Story</div>
            </li>
            <li v-if="SlideShow == 2" class="storycard">
                <div class="name">Name2</div>
                <div class="story">Story</div>
            </li>
            <li v-if="SlideShow == 3" class="storycard">
                <div class="name">Name3</div>
                <div class="story">Story</div>
            </li>
            <li v-if="SlideShow == 4" class="storycard">
                <div class="name">Name4</div>
                <div class="story">Story</div>
            </li>
        </ul>
    </div>
</template>


<script lang="ts" >
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            SlideShow: 1
        }
    },
    mounted() {
        setInterval(() => {
            if (this.SlideShow == 4) {
                this.SlideShow = 1
            } else {
                this.SlideShow++
            }
        }, 3000)

    }
})



</script>

<style scoped>
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cardContent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


}

.storycard {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 10%;
    margin: 0 55px;
    width: 490px;
    height: 399px;
    list-style-type: none;
    position: relative;
}

h1 {
    color: white;
    position: relative;
    margin-bottom: 10px²;
}

h2 {
    position: relative;
    margin-top: 0;
}</style>