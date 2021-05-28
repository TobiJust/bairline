<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/team.jpg')"
      height="800"
      class="text-center"
    >
      <h1>Meet the team</h1>
    </v-parallax>
    <v-container>
      <v-row
        justify="space-around"
        v-for="(person, index) in persons"
        :key="index"
      >
        <v-col cols="12">
          <v-card class="mx-auto" color="#29323c" dark max-width="800">
            <div
              class="d-flex flex-no-wrap justify-space-between"
              :class="{ 'flex-row-reverse': index % 2 }"
            >
              <v-col cols="4" :class="{ 'text-right': index % 2 }">
                <v-avatar size="100">
                  <v-img :src="person.image"></v-img>
                </v-avatar>
                <v-card-title
                  class="text-h5"
                  :class="{ 'justify-end': index % 2 }"
                  v-text="person.name"
                ></v-card-title>

                <v-card-subtitle v-text="person.job"></v-card-subtitle>

                <v-card-actions :class="{ 'justify-end': index % 2 }">
                  <v-btn
                    v-if="person.twitter"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                    :href="person.twitter"
                  >
                    <v-icon>mdi-star</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="person.linkedIn"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                    :href="person.linkedIn"
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="person.facebook"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                    :href="person.facebook"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col color="6" class="align-self-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique omnis magni molestias consectetur alias quas sed,
                repudiandae aliquam debitis. Suscipit accusamus fugiat voluptate
                incidunt distinctio officia ratione adipisci modi tempora.
              </v-col>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="index !== persons.length - 1"
          ><v-divider></v-divider
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      persons: [
        {
          name: "Nico Just",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "Pilot, Sales Manager",
          twitter: "foo",
          linkedIn: "nico"
        },
        {
          name: "Max Mustermann",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "Creative Placeholder",
          linkedIn: "max",
          twitter: "max",
          facebook: "max"
        },
        {
          name: "Igor Drakovic",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "Gofer"
        },
        {
          name: "Chef Le Chef",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "CEO, CFO, CTO",
          facebook: "chef"
        }
      ]
    };
  }
});
</script>
