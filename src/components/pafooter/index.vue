<template src="./template.pug" lang="pug">
</template>

<script>
import http from 'axios'
export default {
  data () {
    return {
      animes: ''
    }
  },
  mounted () {
    this.getAnimes()
  },
  methods: {
    getAnimes () {
      return http(
        {
          method: 'GET',
          url: `${process.env.API}/animes`,
          headers: {
            'content-type': 'application/json; charset=utf-8'
          },
          params: {
            per_page: 3
          }
        }
      )
        .then(response => response.data)
        .then(response => {
          this.animes = response
          this.isLoad = true
        })
        .catch(error => { console.log(error) })
    }
  }
}
</script>

<style>
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }

</style>
