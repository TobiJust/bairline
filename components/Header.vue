<template>
  <div>
    <div
      class="nav"
      :class="{ 'nav--hidden': !showNavbar, 'nav--bg': navbarBackground }"
    >
      <div></div>
      <span></span>
      <nuxt-link :to="{ name: 'aircraft' }">Aircraft</nuxt-link>
      <nuxt-link to="/aircraft-management">Aircraft Management</nuxt-link>
      <nuxt-link :to="{ name: 'gallery' }">Gallery</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <!-- <transition name="fade">
      <div v-if="user.loggedIn" @click="logout()" class="nav__logout">
        Logout
      </div>
    </transition> -->
    </div>
    <nuxt-link to="/contact" class="nav__mail fa-stack">
      <v-btn fab small fixed color="red"> <v-icon>mdi-email</v-icon></v-btn>
    </nuxt-link>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      navbarBackground: true,
      showNavbar: true,
      lastScrollPosition: 0,
      fab: false
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
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.navbarBackground =
        currentScrollPosition > document.documentElement.clientHeight - 50;
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       // Sign-out successful.
    //       this.$router.replace({ name: 'home' })
    //     })
    //     .catch(function (error) {
    //       // An error happened.
    //     })
    // },
  }
};
</script>

<style lang="scss" scoped>
// @import '../assets/less/structure';

.logo {
  width: 100%;
  height: 100%;
  animation: 2s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.nav {
  position: fixed;
  overflow: hidden;
  width: 100vw;
  display: grid;
  grid-template-columns: 20% auto max-content max-content max-content max-content max-content 5vw;
  align-items: center;
  z-index: 2;
  height: 8vh;
  transition: transform 2s, background-color 0s;

  &--hidden {
    transform: translateY(-100%);

    & nav__mail {
      transform: translateY(100%);
    }
  }
  &--bg {
    background-color: var(--bgColor);
  }

  &__logout {
    width: max-content;
    color: white;
    font-weight: 300;
    justify-self: flex-end;
    margin-right: 7rem;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }

  & a {
    font-weight: 300;
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 0 20px;
    text-decoration: none;
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

  & a:hover:not(.active) {
    color: red;
  }

  & a.nuxt-link-exact-active,
  & a.nuxt-link-active {
    color: red;
  }
  &__mail {
    position: fixed;
    top: 2.5vh;
    right: 1.5rem;
    z-index: 2;
    transform: scale(1.3);

    &:hover {
      transform: scale(1.5);
    }
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
