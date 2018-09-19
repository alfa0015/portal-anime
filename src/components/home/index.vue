<template src="./template.pug" lang="pug">
</template>

<script>
import mucks from '@/mucks/animes.js'
import animeCard from '@/components/anime-card'
import preloader from '@/components/preloader'
import http from 'axios'
import Loading from '@/components/loading'
import * as animationData from '@/assets/pinjump.json'
export default {
  name: 'home',
  data () {
    return {
      animes: '',
      isLoad: false,
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
  methods: {
    getAnimes () {
      return http(
        {
          method: 'GET',
          url: `${process.env.API}/animes`,
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
        }
      )
        .then(response => response.data)
        .then(response => {
          this.animes = response
          this.isLoad = true
        })
        .catch(error => { console.log(error) })
    },
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    }
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
