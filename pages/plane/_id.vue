<template>
  <div>
    <v-parallax
      :src="plane.coverImage"
      height="600"
      class="text-center"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="2"
          class="align-self-start mt-16 text-left"
        >
          <v-btn
            x-small
            text
            color="white"
            class="v-btn--active"
            :to="{ name: 'plane-id', params: { id: prevPlane.name } }"
          >
            <v-icon left>mdi-chevron-left</v-icon>
            {{ prevPlane.name }}
          </v-btn>
        </v-col>
        <v-col cols="8">
          <h1 class="display-3">{{ plane.name }}</h1>
        </v-col>
        <v-col
          cols="2"
          class="align-self-start mt-16 text-right"
        >
          <v-btn
            x-small
            text
            color="white"
            class="v-btn--active"
            :to="{ name: 'plane-id', params: { id: nextPlane.name } }"
          >
            {{ nextPlane.name }}
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container
      class="my-16 text-center"
      id="plane"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <h1>{{ plane.tagline }}</h1>
          <v-divider class="ma-4"></v-divider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          {{ plane.content }}
        </v-col>
        <v-col cols="12">
          <v-btn
            v-if="plane.tourUrl"
            color="red"
            text
            :href="plane.tourUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Virtual <v-icon
              medium
              class="pulse"
            >mdi-rotate-3d</v-icon> Tour
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="9"
          v-if="plane.floorplan"
        >
          <transition
            name="fade"
            mode="out-in"
          >
            <v-img :src="!dayNight ? plane.floorplan_night : plane.floorplan"></v-img>
          </transition>
          <div
            class="d-flex justify-center align-center"
            v-if="plane.floorplan_night"
          >
            <v-icon :color="dayNight ? '#aaa' : ''">mdi-power-sleep</v-icon>
            <v-switch
              v-model="dayNight"
              inset
              :ripple="false"
              color="white"
              class="dayNightSwitch"
            ></v-switch>
            <v-icon :color="!dayNight ? '#aaa' : ''">
              mdi-white-balance-sunny
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2>Technical information</h2>
          <v-divider class="ma-4"></v-divider>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="px-16"
      >
        <v-col
          cols="6"
          md="3"
          v-for="(item, i) in icons"
          :key="i"
          class="my-4"
        >
          <v-sheet
            class="d-flex flex-column overline fill-height"
            color="transparent"
            max-height="200"
          >
            <v-icon x-large>{{ item.icon }}</v-icon>
            <h3 class="font-weight-light mt-4">
              {{ plane.facts[item.label] }}
            </h3>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        v-if="plane.rangeMap"
      >
        <v-col cols="12">
          <h2>Range Map</h2>
          <v-divider class="ma-4"></v-divider>
        </v-col>
        <v-col
          cols="10"
          md="6"
        >
          <v-img :src="plane.rangeMap"></v-img>
        </v-col>
      </v-row>

      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <h2>Downloads</h2>
          <v-divider class="ma-4"></v-divider>
          <v-btn
            v-if="plane.factSheet"
            text
            :href="plane.factSheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fact Sheet <v-icon small>mdi-download</v-icon>
          </v-btn>
          <v-btn
            text
            to="/catering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catering <v-icon small>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      fluid
      class="gallery"
    >
      <v-row
        align="center"
        justify="center"
        v-if="plane.gallery && plane.gallery.length"
      >
        <v-col
          cols="12"
          md="9"
        >
          <v-carousel
            cycle
            hide-delimiters
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in plane.gallery"
              :key="i"
              :src="item"
              @click="openDialog(i)"
              style="cursor: pointer;"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="900"
        overlay-opacity="0.99"
      >
        <div>
          <v-carousel
            hide-delimiters
            show-arrows-on-hover
            v-model="model"
          >
            <v-carousel-item
              v-for="(item, i) in plane.gallery"
              :key="i"
              :src="item"
            >
            </v-carousel-item>
          </v-carousel>
          <transition name="fade">
            <v-btn
              v-if="dialog"
              icon
              class="close"
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </transition>
        </div>
      </v-dialog>
    </v-container>
  </div>
</template>
<script>
import Vue from "vue";

import planes from "@/assets/planes";
export default Vue.extend({
  data() {
    return {
      plane: planes[this.$route.params.id],
      dayNight: true,
      dialog: true,
      model: 0,
      icons: [
        {
          icon: "mdi-car-seat",
          label: "passengers",
        },
        {
          icon: "mdi-bag-checked",
          label: "luggage",
        },
        {
          icon: "mdi-speedometer",
          label: "speed",
        },
        {
          icon: "mdi-wrench",
          label: "manufactured",
        },
        {
          icon: "mdi-arrow-expand-vertical",
          label: "height",
        },
        {
          icon: "mdi-arrow-expand-horizontal",
          label: "width",
        },
        {
          icon: "mdi-arrow-left-right",
          label: "length",
        },
        {
          icon: "mdi-arrow-decision",
          label: "range",
        },
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.dialog = false;
    }, 10);
  },
  computed: {
    nextPlane: function () {
      var i = Object.values(planes).findIndex(
        (x) => x.name === this.$route.params.id
      );
      var next = i + 1 >= Object.keys(planes).length ? 0 : i + 1;
      return Object.values(planes)[next];
    },
    prevPlane: function () {
      var i = Object.values(planes).findIndex(
        (x) => x.name === this.$route.params.id
      );
      var prev = i - 1 < 0 ? Object.keys(planes).length - 1 : i - 1;
      return Object.values(planes)[prev];
    },
  },
  methods: {
    openDialog(index) {
      this.dialog = true;
      this.model = index;
    },
  },
});
</script>
<style lang="scss" scoped>
.gallery {
  background: #303a46;
}
.pulse {
  margin: 5px;
  animation: pulse 2s infinite;
}

.dayNightSwitch {
  transform: translateX(5px);
}
.close {
  position: absolute;
  top: 2%;
  right: 2%;
}
@keyframes pulse {
  0% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }
  70% {
    border-radius: 50%;
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }

  100% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
}
</style>
