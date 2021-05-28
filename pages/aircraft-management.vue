<template>
  <div>
    <v-parallax
      :src="require('~/assets/web/SLT_0785-Bearbeitet.jpg')"
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
              Aircraft <br />
              Management
            </h1>
            <v-btn
              x-large
              outlined
              @click="$vuetify.goTo(300, { duration: 2500 })"
              data-aos="fade-up"
              data-aos-delay="3000"
              data-aos-duration="2000"
            >
              Learn more
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <v-container class="fill-height">
      <v-row align="center" justify="center" class="text-left">
        <v-col cols="12" md="8">
          <h1 class="text-uppercase font-weight-light">
            Acquisition And Sales
          </h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
          ea eos doloribus deleniti, dolores quidem tempore quam exercitationem
          suscipit placeat consectetur culpa magni nam aperiam voluptatum, sit
          corrupti commodi.
          <v-sheet height="500" color="transparent"></v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      class="text-center"
      height="300"
    >
    </v-parallax>
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="text-left">
        <v-col cols="12" md="8">
          <h1 class="text-uppercase font-weight-light">Management Services</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
          ea eos doloribus deleniti, dolores quidem tempore quam exercitationem
          suscipit placeat consectetur culpa magni nam aperiam voluptatum, sit
          corrupti commodi.
          <v-sheet height="500" color="transparent"></v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      class="text-center"
      height="300"
    >
    </v-parallax>
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="text-left">
        <v-col cols="12" md="8">
          <h1 class="text-uppercase font-weight-light">Consulting Services</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
          ea eos doloribus deleniti, dolores quidem tempore quam exercitationem
          suscipit placeat consectetur culpa magni nam aperiam voluptatum, sit
          corrupti commodi.
          <v-sheet height="500" color="transparent"></v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.title {
  font-size: 5rem !important;
  line-height: 5rem;
  text-transform: uppercase;
}
</style>
