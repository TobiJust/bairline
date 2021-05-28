<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/luxury.jpg')"
      class="text-center"
    >
      <h1>Catering</h1>
    </v-parallax>

    <v-container class="catering">
      <v-row justify="space-around" class="text-center fill-height">
        <v-col cols="12">
          <embed src="/Menu List.pdf" width="100%" height="100%" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.catering {
  height: 100vh;
}
</style>
