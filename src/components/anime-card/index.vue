<template src="./template.pug" lang="pug">
</template>

<script>
export default {
  name: 'anime-card',
  data: () => ({

  }),
  mounted () {
  },
  props: ['anime']
}
</script>

<style lang="scss" scoped>
  .title{
    width: 10em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .number-episode{
    border:dashed 0px #eb7900;
    -moz-border-radius-topleft: 75px;
    -moz-border-radius-topright:75px;
    -moz-border-radius-bottomleft:75px;
    -moz-border-radius-bottomright:75px;
    -webkit-border-top-left-radius:75px;
    -webkit-border-top-right-radius:75px;
    -webkit-border-bottom-left-radius:75px;
    -webkit-border-bottom-right-radius:75px;
    border-top-left-radius:75px;
    border-top-right-radius:75px;
    border-bottom-left-radius:75px;
    border-bottom-right-radius:75px;
  }
  .paddin-10{
    padding: 2px 6px;
  }
  $break-mobile: 600px;
  $break-tablet: 768px;
  $break-desktop: 1024px;
  $break-large: 1200px;
  img{
    display: block;
    @media screen and (max-width: $break-tablet) {
      max-height: 100%;
    }
    @media screen and (max-width: $break-desktop) {
      max-height: 100%;
    }
    @media screen and (min-width: $break-desktop) {
      max-height: 300px;
    }
    @media screen and (min-width: $break-large) {
      max-height: 500px;
    }
    max-width: 1000px;
    overflow: hidden;
  }
</style>
