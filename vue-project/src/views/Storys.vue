<template>
    <div class="temoignages">
        <div class="title">
            <h1>TÉMOIGNAGES</h1>
            <h2>~~ Les clients qui nous ont fais confiane ~~</h2>
        </div>
        <div class="caroussel">
            <div class="slides">
                <div class="storycard">
                    <p class="name">Name1</p>
                    <p class="story">Story</p>
                </div>
                <div class="storycard">
                    <p class="name">Name2</p>
                    <p class="story">Story</p>
                </div>
                <div class="storycard">
                    <p class="name">Name3</p>
                    <p class="story">Story</p>
                </div>
                <div class="storycard">
                    <p class="name">Name4</p>
                    <p class="story">Story</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" >
import { defineComponent, transformVNodeArgs } from 'vue';
export default defineComponent({
    // data() {
    //     return {
    //         SlideShow: 1
    //     }
    // },
    // mounted() {
    //     setInterval(() => {
    //         if (this.SlideShow == 4) {
    //             this.SlideShow = 1
    //         } else {
    //             this.SlideShow++
    //         }
    //     }, 5000)

    // }
})


</script>

<style scoped>
.temoignages{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
   
}

.caroussel {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    width: 503px;
    /* background-color: red; */
    overflow: hidden;
    position: relative;
    border-radius: 10%;

}

.storycard {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 10%;
    /* margin: 0 55px; */
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
}
.slides{
    display: flex;
    animation: 30s Glisse infinite;
    
}

@keyframes Glisse{
    0%{
        transform: translateX(0);
    }
    27%{
        transform: translateX(-503px);
    }
    53%{
        transform: translateX(-1006px);
    }
    78%{
        transform: translateX(-1509px);
    }
    100%{
        transform: translateX(0);
    }
}
</style>