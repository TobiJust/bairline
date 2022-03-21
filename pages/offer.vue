<template>
  <v-container
    fluid
    class="ma-0 pa-0"
  >
    <v-row>
      <Hero
        :src="src"
        :scrollTarget="'#services'"
        @ended="animationEnd()"
      >
        Private <br />
        Jet <br />
        Charter
      </Hero>
    </v-row>
    <v-row
      align="center"
      class="text-center"
      id="services"
    >
      <v-col cols="12">
        <h1>Private Air Travel Services</h1>
      </v-col>
    </v-row>
    <v-row
      align="center"
      class="text-center"
      :class="{ 'flex-row-reverse': toggle }"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :src="imageSource"
          class="ma-8"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column align-self-stretch justify-space-around pa-8"
      >
        <p v-if="!toggle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          cupiditate delectus dolor! Quas assumenda modi eligendi fugit quo
          vitae magni dicta sit repellat hic quibusdam culpa, architecto illum
          doloribus facilis.
        </p>
        <p v-else>
          Holiday Holiday
        </p>
      </v-col>
    </v-row>

    <v-row
      align="center"
      class="text-center"
    >
      <v-col cols="12">
        <v-btn
          x-large
          to="/contact"
          nuxt
        >
          Plan your {{ toggle ? "travel" : "trip" }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      align="center"
      class="text-center"
    >
      <v-col
        cols="12"
        md="4"
        offset-md="1"
      >
        <h4>Our Commitment:</h4>
        <p class="pa-2">
          In addition to our invariable attention to safety and service,
          Bairline is committed to saving you time and money with your tailored
          private flight solution.
        </p>
      </v-col>
      <v-divider
        vertical
        class="offset-md-1"
      ></v-divider>
      <v-col
        cols="12"
        md="6"
        class="text-left"
      >
        <ul>
          <li>No enrollment fees</li>
          <li>No annual hourly commitments</li>
          <li>
            Minimal lead time on domestic flights
            <small>(international flights subject to permits)</small>
          </li>
          <li>24/7/365 services/customer support</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      toggle: false,
      src: require("~/assets/videos/city.mp4"),
    };
  },
  destroyed() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    setBeach() {
      this.toggle = true;
    },
    setCity() {
      this.toggle = false;
    },
    animationEnd(e) {
      this.toggle = !this.toggle;
      if (this.toggle) {
        this.src = require("~/assets/videos/beach.mp4");
      } else {
        this.src = require("~/assets/videos/city.mp4");
      }
    },
  },
  watch: {
    toggle: {
      handler(to, from) {
        if (to) {
          this.src = require("~/assets/videos/beach.mp4");
          this.$store.dispatch("images/toggleOffer", true);
        } else {
          this.src = require("~/assets/videos/city.mp4");
          this.$store.dispatch("images/toggleOffer", false);
        }
      },
      immediate: true,
    },
  },
  computed: {
    imageSource() {
      return this.toggle
        ? require("~/assets/images/holiday.jpg")
        : require("~/assets/images/business.jpg");
    },
  },
});
</script>
