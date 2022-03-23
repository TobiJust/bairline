<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/luxury.jpg')"
      height="400"
      class="text-center"
    >
      <h1 class="text-h2 font-weight-light title">Catering</h1>
    </v-parallax>

    <v-container>
      <v-row
        justify="space-around"
        class="text-center my-8"
      >
        <v-col
          cols="12"
          md="6"
          class="text-justify"
        >
          From light snack to a 3-course-menu; we are catering as per your demand.
          If you cant make up your mind, just take a look at our Menu.
          Or tell us your favorite food and we will be happy to arrange it.
        </v-col>
      </v-row>
      <v-row
        justify="space-around"
        class="text-center fill-height"
      >
        <v-col cols="12">
          <embed
            src="/downloads/Menu List.pdf"
            width="100%"
            height="900px"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.title {
  color: #29323c;
}
</style>
