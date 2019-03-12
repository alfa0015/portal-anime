<template src="./template.pug" lang="pug">
</template>

<script>
import mucks from '@/mucks/animes.js'
import animeCard from '@/components/anime-card'
import preloader from '@/components/preloader'
import Loading from '@/components/loading'
import * as animationData from '@/assets/pinjump.json'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      defaultOptions: {animationData: animationData},
      animationSpeed: 1
    }
  },
  mounted () {
    this.getEpisodes()
    this.$cable.subscribe({channel: 'EpisodesChannel'})
  },
  components: {
    animeCard,
    preloader,
    Loading
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
  },
  computed: {
    ...mapGetters(['loading', 'episodes'])
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    ...mapActions(['getAnimes', 'getEpisodes', 'pushEpisode'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  body{
    background-color: inherit;
  }
  #home{
    margin: 0 1px;
  }
  .text-justify{
    text-align: justify;
    text-justify: inter-word;
  }
  .logo{
    width: 20vh;
  }
  .paddin10-top{
    padding-top: 10px;
  }
</style>
