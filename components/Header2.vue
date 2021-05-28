<template>
  <div>
    <v-app-bar
      flat
      fixed
      hide-on-scroll
      :color="navbarBackground"
      app
      :light="['offer', 'contact', 'aircraft'].includes($route.name)"
    >
      <nuxt-link to="/" v-if="$route.path !== '/'">
        <BairlineLogo class="header_logo" />
      </nuxt-link>
      <v-spacer />
      <v-btn plain text :ripple="false" to="/offer" nuxt>Charter</v-btn>
      <v-menu bottom offset-y open-on-hover light>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            plain
            text
            :ripple="false"
            :to="{ name: 'aircraft' }"
            v-bind="attrs"
            v-on="on"
            nuxt
          >
            Aircraft
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="plane in planes"
            :key="plane.name"
            :to="{ name: 'plane-id', params: { id: plane.name } }"
            nuxt
          >
            <v-list-item-title>{{ plane.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn plain text :ripple="false" to="/aircraft-management" nuxt>
        Aircraft Management
      </v-btn>
      <v-btn plain text :ripple="false" :to="{ name: 'gallery' }" nuxt>
        Gallery
      </v-btn>
      <v-btn plain text disabled></v-btn>
    </v-app-bar>
    <v-btn
      fab
      small
      fixed
      top
      right
      color="red"
      to="/contact"
      nuxt
      class="mail"
    >
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
import { mapGetters } from "vuex";
import planes from "@/assets/planes";

export default {
  data() {
    return {
      navbarBackground: "transparent",
      showNavbar: true,
      lastScrollPosition: 0,
      fab: false,
      planes: planes
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.navbarBackground = "#29323c";
      } else {
        this.navbarBackground = "transparent";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '../assets/less/structure';

.header_logo {
  width: 280px;
  z-index: 10;
  animation: 3s appear;
}

.mail {
  margin-top: -4px;
  z-index: 200 !important;

  &:hover {
    transform: scale(1.2) !important;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.v-btn {
  animation: FadeIn 0.5s linear;
  animation-fill-mode: both;

  &:nth-of-type(1) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(2) {
    animation-delay: 1s;
  }
  &:nth-of-type(3) {
    animation-delay: 1.5s;
  }
  &:nth-of-type(4) {
    animation-delay: 2s;
  }
}

@keyframes FadeIn {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }

  85% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
