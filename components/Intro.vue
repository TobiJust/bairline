<template>
  <v-container class="intro" id="intro">
    <v-row
      align="center"
      justify="space-around"
      class="text-center fill-height"
    >
      <v-col cols="12" md="6">
        With a concept made in Bavaria, Bairline represents what Business
        Aviation is meant to be! You want to go on holiday or just need to get
        to your next business meeting? You are looking for an intercontinental
        flight or the quickest way across Europe? We offer the right aircraft
        for any of your demands.
      </v-col>
      <v-col cols="12">
        <v-divider class="divider"></v-divider>
        <h1 class="title">Shortest communication line in the industry</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-col cols="12">
        <v-btn large to="/offer" nuxt>Learn more</v-btn>
      </v-col>
      <v-col cols="12" md="8">
        <v-expansion-panels flat v-model="panel">
          <v-expansion-panel class="transparent">
            <v-expansion-panel-header
              hide-actions
              class="text-center hover"
              :class="{
                'justify-end': panel === 0,
                'justify-center': panel !== 0
              }"
            >
              {{ panel === 0 ? "Close" : "Read more" }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-justify">
              <p>
                When flying with Bairline, we guarantee all information will
                reach you on the fastest possible way. No waiting time for
                receiving departure/arrival movements. Short notice changes will
                be handled in seconds. Our advantage of having the Charter Sales
                and Pilots combined offers outstanding performance in the
                business aviation industry.
              </p>
              <p>
                Few places are more private and secure than inside one’s private
                jet. Meet with colleagues and customers and never miss a thing
                back at the office as you travel across the country. The time
                you and your team save traveling directly to your destinations
                without the usual delays of conventional travel often make
                private jet charter a cost-saving alternative. And that’s before
                you factor in the most important benefit of flying privately —
                being home in time for dinner. Leisure travelers who book
                charter flights with us fly when and where they wish and enjoy
                more possibilities to schedule special events with family and
                friends!
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      panel: undefined
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 20vh;
  margin-bottom: 10vh;
}
.title {
  line-height: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1rem 0;
}

.divider {
  width: 50%;
  margin: auto;
}

.hover:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>
