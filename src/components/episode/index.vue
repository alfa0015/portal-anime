<template src="./template.pug" lang="pug">
</template>

<script>
import vplayer from '@/components/vplayer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'episode',
  components: {
    vplayer
  },
  data: () => ({
  }),
  mounted () {
    this.getEpisode(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['episode'])
  },
  methods: {
    ...mapActions(['getEpisode'])
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
