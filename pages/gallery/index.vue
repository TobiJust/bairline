<template>
  <v-container fluid>
    <v-row>
      <v-dialog
        content-class="elevation-0"
        v-model="dialog"
        max-width="900"
        overlay-opacity="0.99"
        class="dialog"
      >
        <v-carousel v-model="model" hide-delimiters>
          <v-carousel-item v-for="(n, i) in images" :key="i" :src="n">
          </v-carousel-item>
        </v-carousel>
        <transition name="fade">
          <v-btn v-if="dialog" icon class="close" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </transition>
      </v-dialog>
      <v-col cols="12" class="text-center">
        <h1 class="title">Gallery</h1>
        <hr />
      </v-col>
      <v-col
        v-for="(n, index) in images"
        :key="index"
        class="d-flex child-flex"
        :cols="$vuetify.breakpoint.smAndDown ? 6 : 3"
      >
        <v-card
          class="mx-auto card"
          color="grey lighten-4"
          :width="'100%'"
          max-width="600"
          @click.stop="openDialog(index)"
        >
          <v-img :aspect-ratio="16 / 9" :lazy-src="n" :src="n">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/1280x960",
        "https://via.placeholder.com/1920x1080"
      ],
      dialog: true,
      model: 0
    };
  },
  created() {
    setTimeout(() => {
      this.dialog = false;
    }, 10);
  },
  methods: {
    openDialog(index: number) {
      this.dialog = true;
      this.model = index;
    },
    prev() {
      this.model--;
      if (this.model < 0) {
        this.model = this.images.length - 1;
      }
    },
    next() {
      this.model++;
      if (this.model > this.images.length - 1) {
        this.model = 0;
      }
    }
  }
});
</script>
<style scoped>
hr {
  width: 50%;
  margin: auto;
  margin-bottom: 15px;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 4em !important;
  line-height: 1.5 !important;
  color: white;
  letter-spacing: 1px !important;
  margin-bottom: 25px !important;
}
.close {
  position: absolute;
  top: 2%;
  right: 2%;
}

.card {
  transition: all 0.2s ease;
}
.card:hover {
  transform: scale(1.02);
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active {
  transition: opacity 2s ease 1s;
}
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
