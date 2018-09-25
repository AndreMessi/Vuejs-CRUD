<template>
    <div id="hello">
        <div class="header">
            <app-header />
        </div>
        <div class="slider">
            <swiper :options="swiperOption">
                <swiper-slide> <img class="swipe" src="static/borobudur.jpg"> </swiper-slide>
                <swiper-slide> <img class="swipe" src="static/glagah.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="container">
            <div class="row">
                <b-card title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                <b-card title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                <b-card title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </div>
        <div class="link-cms">
            <router-link to="/appsidebar.vue" />
        </div>
    </div>
</template>

<script>
import appHeader from './appHeader.vue'
export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          autoplay: true
        }
      }
    },
    components: {
        appHeader
    }
  }
</script>

<style>

</style>
