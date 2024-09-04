<template>
  <v-container fluid class="my-16">
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
          <v-img :aspect-ratio="16 / 9" :src="n">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-2"
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

import { mapGetters, mapState } from "vuex";
export default Vue.extend({
  data() {
    return {
      dialog: true,
      model: 0,
      images: [],
    };
  },
  computed: {
    // ...mapGetters({
    //   images: "images/galleryImages",
    // }),
  },
  created() {
    setTimeout(() => {
      this.dialog = false;
    }, 10);
  },
  mounted() {
    this.getGalleryImages();
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
    },
    importAll(r: any) {
      return r.keys().map(r);
    },
    getGalleryImages() {
      this.images = this.importAll(
        require.context("@/assets/gallery/", true, /\.(jpe?g)/)
      );

      var imagesRef = this.$fire.storage.ref().child("gallery");
      imagesRef
        .listAll()
        .then((res) => {
          // this.$store.dispatch(
          //   "images/setGalleryImages",
          //   res.items.map(item => ({
          //     path: item.fullPath,
          //     url: item.getDownloadURL()
          //   }))
          // );

          Promise.all(res.items.map((item) => item.getDownloadURL())).then(
            (contents) => {
              this.$store.dispatch(
                "images/setGalleryImages",
                contents.map(function (content, i) {
                  return { url: content, path: res.items[i].fullPath };
                })
              );
            }
          );
        })

        .catch(function (error) {
          // Uh-oh, an error occurred!
        });
    },
  },
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
