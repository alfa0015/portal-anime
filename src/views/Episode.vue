<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
            <vplayer
                :video="episode.attributes.video_url"
                :banner="episode.attributes.anime.data.attributes.banner_url"
            >
            </vplayer>
        </v-card>   
        </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
          <p>Social Episodios</p>
      </v-flex>
      <v-flex xs6>
          <p>sidebard</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    vplayer: () => import('@/components/vplayer/index.vue')
  },
  mounted () {
    this.getEpisode(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['episode'])
  },
  methods: {
    ...mapActions(['getEpisode'])
  }
}
</script>

<style scoped>
</style>
