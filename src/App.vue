<template>
  <v-app id="inspire">
    <Navigation></Navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navigation: () => import('@/components/navigation')
  }
}
</script>



