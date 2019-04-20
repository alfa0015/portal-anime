<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="episode in episodes.data" :key="episode.id" class="pa-2">
        <EpisodeCard :episode="episode"></EpisodeCard>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-if="episodes['x-page-total']">
        <v-pagination
          v-model="page"
          :length="parseInt(episodes['x-page-total'], 10)"
          :total-visible='5'
          circle
          @input="getEpisodes(page)"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    page: 1,
    notificationsSupported: false
  }),
  components: {
    EpisodeCard: () => import('@/components/episode-card')
  },
  created() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      this.notificationsSupported = true
    }
  },
  mounted () {
    this.getEpisodes()
    this.$cable.subscribe({channel: 'EpisodesChannel'})
    this.askPermission()
  },
  computed: {
    ...mapGetters(['episodes'])
  },
  methods: {
    ...mapActions(['getEpisodes', 'pushEpisode', 'showNotification']),
    askPermission() {
      Notification.requestPermission(result => {})
    },
    notificaionEpisode(episode) {
      if (this.notificationsSupported) {
        Notification.requestPermission(result => {
          if (result === 'granted') {
            this.showNotification({title:`Nuevo episodio ${episode.data.attributes.anime.data.attributes.name}`,body:`Episodio numero ${episode.data.id}`})
          }
        })
      }
    }
  },
  channels: {
    EpisodesChannel: {
      connected () {
        setTimeout(() => {
          this.$cable.perform({
            channel: 'EpisodesChannel'
          })
        }, 1000)
      },
      disconnected () {},
      received (data) {
        this.pushEpisode(JSON.parse(data.episode))
        this.notificaionEpisode(JSON.parse(data.episode))
      },
      rejected () {}
    }
  }
}
</script>

<style scoped>
</style>