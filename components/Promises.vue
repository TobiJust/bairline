<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      height="400"
      class="text-center"
    >
      <h1 class="text-h2 font-weight-light title">What sets us apart</h1>
    </v-parallax>
    <v-container class="promises my-16" id="promises">
      <v-row justify="space-around" class="text-center my-8">
        <v-col cols="12" md="6" class="text-justify">
          We know that there are hundreds of business jets in all parts of the
          world. But what most companies forget nowadays, is what Business
          Aviation is really about. We made it our top priority to give
          passengers the ability for flexible schedules that fits their needs.
          Bairline is spending a big effort on your personal demands, giving you
          the best experience while traveling. Luxurious aircraft will make you
          feel to be in the right place.
        </v-col>
      </v-row>
      <v-row justify="space-around" class="my-8 py-8">
        <v-col
          v-for="promise in promises"
          :key="promise.title"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" max-width="800">
              <v-img
                class="white--text align-end"
                :src="promise.image"
                min-height="300"
                max-height="400"
              >
                <v-card-title>{{ promise.title }}</v-card-title>
              </v-img>

              <v-expand-transition>
                <v-card
                  v-if="hover"
                  class="v-card--reveal"
                  style="height: 100%"
                >
                  <v-card-text class="pb-0">
                    <p class="display-1 text--primary">
                      {{ promise.title }}
                    </p>
                    <p class="text-justify">
                      {{ promise.content }}
                    </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn v-if="promise.link" :to="promise.link" nuxt>
                      Read more
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      promises: [
        {
          title: "Flexibility",
          image: require("~/assets/images/flexibility.jpg"),
          content:
            "Our goal is to give you the flexibility you need when chartering a private jet. With us, you can be stuck in traffic and still be sure the jet is waiting for you. Or you decide to go for a dinner that takes you more time before your departure? No worries, we will be waiting for you at the airport.",
        },
        {
          title: "Personality",
          image: require("~/assets/images/personality.jpg"),
          content:
            "Our team is as international as our destinations. Well trained and with worldwide experience we are not just your crew during the flight but are also involved in all processes of the company. With that we are ensuring short ways of communication and reliable information in every situation.",
          link: "/team",
        },
        {
          title: "Luxury",
          image: require("~/assets/images/luxury.jpg"),
          content:
            "Although an aircraft is not fully equipped like a restaurant, we dedicate our service to a perfect dining experience over the clouds. Low total hour aircrafts and modern interiors combined with high class catering gives you the luxury you are expecting when choosing a business jet.",
          link: "/catering",
        },
      ],
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.title {
  color: #29323c;
}
.v-card--reveal {
  bottom: 0;
  opacity: 0.95 !important;
  position: absolute;
  width: 100%;
}
</style>
