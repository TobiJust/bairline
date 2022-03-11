<template>
  <v-app dark>
    <!-- <Header /> -->

    <HeaderMobile v-if="$vuetify.breakpoint.mdAndDown"></HeaderMobile>
    <Header2 v-else />
    <v-main class="pt-0">
      <nuxt />
      <div
        class="bairline_logo"
        :class="{
          'bairline_logo--nav':
            !$vuetify.breakpoint.mdAndDown && $route.path != '/',
          'bairline_logo--nav--mobile':
            $vuetify.breakpoint.mdAndDown && $route.path != '/'
        }"
      >
        <nuxt-link
          to="/"
          aria-label="Bairline"
        >
          <BairlineLogo ref="logo" />
        </nuxt-link>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      showLogoInNavbar: true,
      runner: "",
    };
  },
  watch: {
    "$route.path": {
      handler(to, from) {
        this.showLogoInNavbar = true;
        if (to !== "/") {
          clearTimeout(this.runner);
          this.runner = setTimeout(() => {
            this.showLogoInNavbar = false;
          }, 3000);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
      });
    }, 1000);
    window.addEventListener("scroll", this.handleScroll);
  },
  updated() {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
      });
    }, 1000);
  },
  methods: {
    handleScroll() {
      const maxBackgroundSize = window.innerHeight / 2;

      let scrollY = window.scrollY;
      let scaleValue = 1 / (scrollY / maxBackgroundSize + 1);

      if (scaleValue < 0.5) {
        scaleValue = 0.5;
      }

      if (scrollY / window.innerHeight > 1) {
        scrollY = window.innerHeight;
      }

      // zoom the background at a slower rate
      this.$refs.logo.$el.style.transform =
        "translateY(" + scrollY / 1.5 + "px) scale(" + scaleValue + ") ";
    },
    sanitizeTitleName(title) {
      title = title.split("/").pop();
      title = title.replace(/-([a-z])/g, function (g) {
        return " " + g[1].toUpperCase();
      });
      title = title.charAt(0).toUpperCase() + title.slice(1);
      return decodeURI(title);
    },
  },
  head() {
    return {
      titleTemplate:
        this.$route.path !== "/"
          ? `${this.sanitizeTitleName(this.$route.fullPath)} | %s`
          : "%s",
    };
  },
};
</script>
<style lang="scss">
html {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.theme--dark.v-application {
  background: linear-gradient(90deg, #485563 10%, #29323c 90%) !important;
}

.clickable {
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
}

.bairline_logo {
  position: absolute;
  width: 100%;
  top: 50vh;
  padding: 0 10%;
  transform: translateY(-100%);
  cursor: default;
  transition: all 1.5s linear 0s;
  animation: intoForeground 2s;

  &--nav {
    cursor: pointer;
    width: 280px;
    top: 54px;
    padding: 0;
    margin-left: 16px;
    z-index: -1;
    animation: intoBackground 3s;
  }
  &--nav--mobile {
    cursor: pointer;
    width: 20%;
    top: 39px;
    padding: 0;
    right: 0;
    z-index: -1;
    animation: intoBackgroundMobile 3s;
  }
}
@keyframes intoForeground {
  0% {
    z-index: 20;
  }
  100% {
    z-index: 20;
  }
}
@keyframes intoBackground {
  0% {
    z-index: 20;
  }
  99% {
    z-index: 20;
  }
  100% {
    z-index: -1;
  }
}
@keyframes intoBackgroundMobile {
  0% {
    z-index: 20;
  }
  99% {
    z-index: 20;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
}
</style>
