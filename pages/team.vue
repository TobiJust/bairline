<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/team2.jpg')"
      class="text-center"
    >
      <h1 class="text-h2 font-weight-light">Meet the team</h1>
    </v-parallax>
    <v-container>
      <v-row
        justify="space-around"
        v-for="(person, index) in persons"
        :key="index"
      >
        <v-col cols="12">
          <v-card
            class="mx-auto"
            color="#29323c"
            dark
            max-width="800"
          >
            <div
              class="d-flex flex-no-wrap justify-space-between"
              :class="{ 'flex-row-reverse': index % 2 }"
            >
              <v-col
                cols="4"
                :class="{ 'text-right': index % 2 }"
              >
                <v-avatar size="100">
                  <v-img :src="person.image"></v-img>
                </v-avatar>
                <v-card-title
                  class="text-h6"
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
                    <v-icon>mdi-twitter</v-icon>
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
              <v-col
                class="align-self-center mx-2"
                v-text="person.description"
              >
              </v-col>
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          v-if="index !== persons.length - 1"
        >
          <v-divider></v-divider>
        </v-col>
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
          job: "Sales Director, Captain Citation X",
          twitter: "foo",
          linkedIn: "nico",
          description: `One of his first flights at the age of 3, evolved Nico’s dream to begin a career in aviation. 
                        In 2012 he learned about the significance of charter sales and expanded his knowledge as a Sales Manager beside being a pilot.
                        Following working positions in Austria, Malta and Russia, Nico started working for Bairline in 2015 where he is establishing 
                        the company’s strong position as a leading business jet operator in Europe since.
                        `,
        },
        {
          name: "Robin Tiburtius",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "Sales Manager, Worldwide Charter Flights",
          linkedIn: "max",
          twitter: "max",
          facebook: "max",
          description: `Since Robin's first professional experience with Air Partner plc in London in 2017, Business Aviation has been his life. A short time later, he started working as Charter Sales Manager at Bairline and to this day he does everything he can to provide our customers with first-class service and outstanding experience on all our aircraft.
                        What appeals most to him about Business Aviation is the fast pace and the variety of the tasks and above all the cooperation with numerous customers and partners from all over the world, with whom we at Bairline maintain a close and trusting relationship.
                        `,
        },
        {
          name: "Christopher Godfrey",
          image:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          job: "Accountable Manager, First Officer G500",
        },
      ],
    };
  },
});
</script>
