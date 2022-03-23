<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      class="text-center"
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
              Get in Touch
            </h1>
            <v-btn
              x-large
              outlined
              @click="$vuetify.goTo('#contact', { duration: 2500 })"
              data-aos="fade-up"
              data-aos-delay="3000"
              data-aos-duration="2000"
              color="#29323c"
            >
              Contact us
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container class="contact my-16" id="contact">
      <v-row align="center" justify="space-around" class="my-8 text-center">
        <v-col cols="8" class="d-flex flex-column">
          <h1 class="text-h2 mb-8">Book Your Next Private Jet Charter Today</h1>
          <div class="text-center">
            Whether private leisure, business trip or brokerage of an aircraft,
            our team can make your experience in Private Aviation exceptional.
            Please feel free to contact us directly in the way you feel most
            comfortable.
          </div>
        </v-col>
      </v-row>
      <v-row align="start" justify="center" class="text-center my-12">
        <v-col cols="12" md="4" class="avatar">
          <a
            href="tel:+49 (0)30 8631 8972"
            class="text-decoration-none white--text"
          >
            <v-avatar
              size="128"
              color="red lighten-2"
              data-aos="zoom-in-up"
              data-aos-once="true"
            >
              <v-icon size="85">mdi-phone </v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Phone</h2>
            <div class="text-h5 my-8">+49 (0)30 8631 8972</div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="avatar">
          <a
            href="https://www.google.com/maps?hl=en&daddr=Innsbrucker%20Bundesstraße%20107,5020%20Salzburg"
            class="text-decoration-none white--text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-avatar
              size="128"
              color="red lighten-2"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <v-icon size="85">mdi-map-marker </v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Address</h2>
            <div class="text-center text-body-1 my-8">
              <span class="font-weight-bold">
                Bairline Fluggesellschaft mbH & Co. KG</span
              >
              <br />
              Innsbrucker Bundesstraße 107 <br />
              5020 Salzburg, Austria
            </div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="avatar">
          <a
            href="mailto:sales@bairline.at"
            class="text-decoration-none white--text"
          >
            <v-avatar
              size="128"
              color="red lighten-2"
              data-aos="zoom-in-up"
              data-aos-delay="2000"
              data-aos-once="true"
            >
              <v-icon size="85">mdi-message </v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Email</h2>
            <div class="text-h5 my-8">sales@bairline.at</div>
          </a>
        </v-col>
      </v-row>
      <div class="text-center my-12">
        <v-btn
          x-large
          icon
          href="https://www.facebook.com/bairline/"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          x-large
          icon
          href="https://www.instagram.com/bairline.fluggesellschaft/?hl=de"
          target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          x-large
          icon
          href="https://de.linkedin.com/company/bairline-fluggesellschaft-mbh-&-co.-kg"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title {
  font-size: 5rem !important;
  line-height: 5rem;
  text-transform: uppercase;
  color: #29323c;
}
.avatar:hover .v-avatar {
  animation: Scale 0.5s linear;
  animation-fill-mode: both;
}

.map {
  max-width: 100%;
}

@keyframes Scale {
  0% {
    transform: scale(1);
  }
  85% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
