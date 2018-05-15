<template src="./template.pug" lang="pug">
</template>

<script>
import http from 'axios'
export default {
  name: 'anime',
  data: () => ({
    anime: '',
    isLoad: false
  }),
  mounted () {
    this.getAnime()
  },
  methods: {
    getAnime () {
      return http(
        {
          method: 'GET',
          url: `${process.env.API}/animes/${this.$route.params.id}`,
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
        }
      )
        .then(response => response.data)
        .then(response => {
          this.anime = response
          this.isLoad = true
        })
        .catch(error => { console.log(error) })
    }
  }
}
</script>

<style lang="sass" scoped>
  .title
    width: 10em
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    background-color: rgba(0, 0, 0, 0.3)
  .padding-left-10
    padding-left: 2em
</style>
