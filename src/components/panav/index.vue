<template src="./template.pug" lang="pug">
</template>

<script>
  import M from 'materialize-css'
  export default {
    name: 'navBar',
    mounted () {
      let elem = document.querySelector('.sidenav')
      let t = new M.Sidenav(elem)
    }
  }
</script>

<style lang="scss" scoped>

</style>
