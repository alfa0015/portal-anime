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
    this.getAnimes()
  },
  components: {
    animeCard,
    preloader,
    Loading
  },
  computed: {
    ...mapGetters({
      animes: 'animes',
      loading: 'loading'
    })
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    ...mapActions({
      getAnimes: 'getAnimes'
    })
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
