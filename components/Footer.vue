<template>
  <v-container
    fluid
    class="footer"
  >
    <v-row
      dense
      justify="center"
      class="text-center mb-4"
    >
      <v-col
        cols="12"
        class="mb-4"
      >
        <v-btn
          plain
          text
          to="/"
          nuxt
        >Home</v-btn>
        <v-btn
          plain
          text
          to="/offer"
          nuxt
        >Charter</v-btn>
        <v-btn
          plain
          text
          :to="{ name: 'aircraft' }"
          nuxt
        >
          Aircraft
        </v-btn>
        <v-btn
          plain
          text
          :to="{ name: 'team' }"
          nuxt
        >
          Team
        </v-btn>
        <v-btn
          plain
          text
          :to="{ name: 'gallery' }"
          nuxt
        >
          Gallery
        </v-btn>
        <v-btn
          plain
          text
          to="/contact"
          nuxt
        >Contact</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn
          text
          plain
          target="_blank"
          rel="noopener noreferrer"
          class="text-caption"
        >
          Privacy Policy
        </v-btn>
        <v-btn
          text
          plain
          href="/downloads/T&Cs Bairline Fluggesellschaft GmbH.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-caption"
        >
          Terms & Conditions
        </v-btn>
      </v-col>
      <v-col cols="8">
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        class="text-body-2"
      >
        All Rights Reserved © Bairline Fluggesellschaft mbH & Co. KG,
        Innsbrucker Bundesstraße 107, 5020 Salzburg, AT,
        <a
          href="tel:+49 (0)30 8631 8972"
          class="text-decoration-none white--text"
        >
          +49 (0)30 8631 8972
        </a>
        <br />
        Website by Tobias Just
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import '../assets/less/structure';

.footer {
  background-color: #29323c;

  &__copyright {
    margin: 0 10%;
    height: 5vh;
    // @media @tablet {
    //   height: 5vh;
    // }
    color: white;
    font-size: 0.8em;
    line-height: 1.5em;
    & a {
      color: white;

      &:hover {
        color: var(--v-primary-base);
      }
    }
  }
  &__divider {
    margin: 25px 10%;
  }
}
</style>
