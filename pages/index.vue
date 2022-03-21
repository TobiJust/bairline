<template>
  <v-container
    fluid
    class="ma-0 pa-0"
  >
    <v-row class="ma-0 pa-0">
      <v-img
        class="align-stretch background"
        :height="'100vh'"
        :src="require('~/assets/images/cockpit.jpg')"
        ref="background"
      >
        <v-row
          align="end"
          justify="center"
          class="fill-height"
        >
          <v-col
            class="text-center introduction"
            cols="10"
            ref="introduction"
          >
            <h1>
              Enjoy the moment. <br>
              Book your individual private aircraft.
            </h1>
          </v-col>
          <v-col
            class="text-center clickable"
            cols="12"
            @click="$vuetify.goTo('#intro', { duration: 2500, offset: -64 })"
            ref="explore"
          >
            <h3>Explore</h3>
            <div class="bounce">
              <v-icon large>mdi-chevron-down</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <Intro />
    <Promises />
    <Fleet />
  </v-container>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScroll = window.pageYOffset;
      var opacity = 1;
      if (currentScroll <= window.innerHeight) {
        opacity = 1 - currentScroll / window.innerHeight;
      } else {
        opacity = 0;
      }
      this.$refs.introduction.style.opacity = opacity;
      this.$refs.explore.style.opacity = opacity;
    },
  },
};
</script>

<style>
.background .v-image__image {
  filter: brightness(30%) !important;
}
.introduction {
  transform: translateY(20vh);
}
</style>
