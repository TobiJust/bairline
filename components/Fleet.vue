<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/window.jpg')"
      class="text-center"
    >
      <h1>Meet our fleet</h1>
    </v-parallax>
    <v-container class="my-16">
      <v-row justify="space-around" class="text-center my-8">
        <v-col cols="12" md="6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          repudiandae asperiores nobis deleniti assumenda iste voluptates
          voluptate ipsum? Reiciendis expedita repellat quis dolore sequi
          numquam sapiente distinctio, incidunt eligendi dolorem.
        </v-col>
      </v-row>
      <v-row justify="space-around" class="my-8">
        <v-col
          v-for="plane in Object.values(planes)"
          :key="plane.name"
          cols="12"
          lg="4"
        >
          <v-card class="mx-auto my-12" max-width="800">
            <v-img :src="plane.entryImage"> </v-img>

            <v-card-title>{{ plane.name }}</v-card-title>
            <v-card-subtitle class="subtitle-1">
              {{ plane.tagline }}
            </v-card-subtitle>

            <v-card-text>
              {{ plane.content }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Details</v-card-title>

            <v-card-text>
              <ul>
                <li>{{ plane.facts.passengers }}</li>
                <li>{{ plane.facts.luggage }}</li>
                <li>{{ plane.facts.speed }}</li>
                <li>{{ plane.facts.range }}</li>
              </ul>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="teal lighten-2"
                text
                :to="{ name: 'plane-id', params: { id: plane.name } }"
                nuxt
              >
                Read more
              </v-btn>
              <v-btn color="teal lighten-2" text to="/contact" nuxt>
                Plan your trip
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import planes from "@/assets/planes";
export default {
  data() {
    return {
      planes: planes
    };
  }
};
</script>

<style></style>
