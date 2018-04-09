<template>
  <div id="app">
    <pa-nav/>
    <router-view></router-view>
    <pa-footer/>
  </div>
</template>

<script>
import paNav from '@/components/panav'
import paFooter from '@/components/pafooter'

export default {
  name: 'app',
  components: {
    paNav,
    paFooter
  }
}
</script>

<style lang="scss">
  @import '../node_modules/materialize-css/dist/css/materialize.min.css';
</style>
