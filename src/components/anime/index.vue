<template src="./template.pug" lang="pug">
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'anime',
  data: () => ({
  }),
  mounted () {
    this.getAnime(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      anime: 'anime',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions({
      getAnime: 'getAnime'
    })
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
