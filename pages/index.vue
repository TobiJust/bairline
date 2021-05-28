<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-img
        class="align-stretch background"
        :height="'100vh'"
        :src="require('~/assets/images/cockpit.jpg')"
        ref="background"
      >
        <v-row align="end" justify="center" class="fill-height">
          <v-col
            class="text-center clickable"
            cols="12"
            @click="$vuetify.goTo('#intro', { duration: 2500, offset: -64 })"
          >
            <h3>Explore</h3>
            <div class="bounce">
              <v-icon large>mdi-chevron-down</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <!-- <v-parallax dark :src="require('~/assets/images/cockpit.jpg')">
      <v-row align="center" justify="center">
        <v-col></v-col>
        <v-col class="text-center" cols="12">
          <BairlineLogo ref="logo" />
        </v-col>
        <v-col
          class="text-center clickable"
          cols="12"
          align-self="end"
          @click="$vuetify.goTo('#intro', { duration: 2500 })"
        >
          <h3>Explore</h3>
          <div class="bounce">
            <v-icon large>mdi-chevron-down</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-parallax> -->
    <Intro />
    <Promises />
    <Fleet />
  </v-container>
</template>

<style>
.background .v-image__image {
  filter: brightness(30%) !important;
}
</style>
