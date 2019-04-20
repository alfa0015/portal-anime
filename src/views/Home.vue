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
      <v-flex xs12>
        <button v-if="notificationsSupported" @click="askPermission">Enable notifications</button>
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
  },
  computed: {
    ...mapGetters(['episodes'])
  },
  methods: {
    ...mapActions(['getEpisodes', 'pushEpisode']),
    askPermission() {
      if (this.notificationsSupported) {
        Notification.requestPermission(result => {
          console.log('result from permission question', result);
            if (result !== 'granted') {
            alert('You probably do not like notifications?!');
          } else {
            console.log('A notification will be send from the service worker => This only works in production');
            this.showNotification()
          }
        })
      }
    },
    showNotification() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready // returns a Promise, the active SW registration
          .then(swreg => swreg.showNotification('Notifications granted', {
            body: 'Here is a first notification',
            icon: '/img/icons/android-chrome-192x192.png',
            image: '/img/autumn-forest.png',
            vibrate: [300, 200, 300],
            badge: '/img/icons/plint-badge-96x96.png',
            data: {
              url: 'http://localhost:8080/episode/9'
            },
            actions: [
              { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
              { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
            ],
          }))
      }
    },
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
      },
      rejected () {}
    }
  }
}
</script>

<style scoped>
</style>