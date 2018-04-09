<template src="./template.pug" lang="pug">
</template>

<script>
import mucks from '@/mucks/animes.js'
import animeCard from '@/components/anime-card'
export default {
  name: 'home',
  data () {
    return {
      animes: mucks
    }
  },
  components: {
    animeCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #home{
    margin: 0 1px;
  }
  .text-justify{
    text-align: justify;
    text-justify: inter-word;
  }
</style>
