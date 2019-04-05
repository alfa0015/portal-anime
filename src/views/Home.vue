<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="i in 5" :key="`6${i}`" class="pa-2">
        <EpisodeCard></EpisodeCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    EpisodeCard: () => import('@/components/episode-card')
  },
  mounted () {
    this.getEpisodes()
  },
  computed: {
    ...mapGetters(['episodes'])
  },
  methods: {
    ...mapActions(['getEpisodes'])
  }
}
</script>

<style scoped>
</style>