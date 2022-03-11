<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      class="text-center"
    >
      <v-container class="fill-height black--text">
        <v-row
          align="center"
          class="text-left"
        >
          <v-col
            cols="4"
            class="offset-2"
          >
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
              light
            >
              Contact us
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container
      class="contact my-16"
      id="contact"
    >
      <v-row
        justify="space-around"
        class="my-8"
      >
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column"
        >
          <h1 class="mb-8">Book Your Next Private Jet Charter Today</h1>
          <div>
            Whether private leisure, business trip or brokerage of an aircraft,
            our team can make your experience in Private Aviation exceptional.
            Please feel free to contact us directly in the way you feel most comfortable.
          </div>
          <v-row
            align="center"
            justify="center"
            class="flex-column my-2"
          >
            <div class="text-center">
              <v-btn
                class="ma-2"
                outlined
                x-large
                text
                href="mailto:sales@bairline.at"
              >
                <v-icon left>mdi-email</v-icon> sales@bairline.at
              </v-btn>
            </div>
            <div class="text-center">
              <v-btn
                class="ma-2"
                outlined
                x-large
                text
                href="tel:+49 (0)30 8631 8972"
              >
                <v-icon left>mdi-phone</v-icon> +49 (0)30 8631 8972
              </v-btn>
            </div>
          </v-row>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col
          cols="12"
          md="6"
        >
          <div>
            <iframe
              width="800"
              height="500"
              frameborder="0"
              src="https://www.bing.com/maps/embed?h=500&w=800&cp=47.78940541796653~12.995873560504894&lvl=15&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
              scrolling="no"
              class="map"
            >
            </iframe>
          </div>
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
}

.map {
  max-width: 100%;
}
</style>
