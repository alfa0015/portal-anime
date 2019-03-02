<template src="./template.pug" lang="pug">
</template>

<script>
import vplayer from '@/components/vplayer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'anime',
  components: {
    vplayer
  },
  data: () => ({
  }),
  mounted () {
    this.getAnime(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      anime: 'anime',
      loading: 'loading'
    }),
    voptions: function () {
      return {
        url: 'https://www.dropbox.com/s/o2m77oy12ef4jz7/2806_LAT_1_jXXv.mp4?raw=1',
        // pic: this.anime.banner_url
        pic: 'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6e04f3c1f942a33fad989ec0e174e3627d9af08e/MV5BMjNhNGQ3MmItODNlYy00N2NjLTgxMjQtMGEwMjMzMGYyNmVlXkEyXkFqcGdeQXVyODM2Mjc4MzI@._V1_.jpg'
      }
    }
  },
  methods: {
    ...mapActions({
      getAnime: 'getAnime'
    }),
    play () {
      console.log('play callback')
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
