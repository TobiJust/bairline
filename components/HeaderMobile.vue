<template>
  <div class="nav">
    <v-app-bar
      flat
      fixed
      hide-on-scroll
      color="transparent"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        v-show="!drawer"
        class="nav__title"
      >
        Bairline
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <BairlineLogo
        v-show="!drawer && $route.path !== '/'"
        class="nav__image"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      overlay-opacity="0.5"
      dark
      color="#29323c"
      app
    >
      <template v-slot:prepend>
        <BairlineLogo class="nav__drawer__image" />
      </template>

      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item
            to="/"
            color="primary"
            nuxt
          >
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/offer"
            nuxt
          >
            <v-list-item-title>Charter</v-list-item-title>
          </v-list-item>
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-title>Aircraft</v-list-item-title>
            </template>

            <v-list-item
              v-for="plane in planes"
              :key="plane.name"
              :to="{ name: 'plane-id', params: { id: plane.name } }"
              nuxt
            >
              <v-list-item-title>{{ plane.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item
            :to="{ name: 'gallery' }"
            nuxt
          >
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/contact"
            nuxt
          >
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import planes from "@/assets/planes";
export default {
  data: () => ({
    drawer: false,
    group: null,
    planes: planes,
  }),
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100vw;

  &__image {
    height: 100%;
    width: 20%;
    animation: 3s appear;
  }

  &__drawer {
    &__image {
      width: 90%;
      padding: 8%;
    }
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
</style>
