<template>
  <video-background
    :src="src"
    @ended="$emit('ended')"
    :loop="true"
    style="height: 80vh; background: linear-gradient(45deg, #2a4ae430, #29323c)"
  >
    <v-container class="fill-height">
      <v-row align="center" class="text-left">
        <v-col cols="4" class="offset-2">
          <h1
            class="title my-8"
            data-aos="zoom-in"
            data-aos-delay="1500"
            data-aos-duration="2000"
          >
            <slot></slot>
          </h1>
          <v-btn
            v-if="scrollTarget"
            x-large
            outlined
            @click="$vuetify.goTo(scrollTarget, { duration: 2500 })"
            data-aos="fade-up"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            Learn more
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </video-background>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    src: {
      type: String,
    },
    scrollTarget: {
      type: String,
    },
  },
  data() {
    return {
      newSrc: "",
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 5rem !important;
  line-height: 5rem;
  text-transform: uppercase;
  text-shadow: 1px 1px black;
}
</style>
