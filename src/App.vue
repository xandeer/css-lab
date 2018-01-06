<template lang="pug">
#app
  header CSS LAB
  h1 Contents
  ul
    li
      a(href="#vertical-centering") Vertical Centering
  main
    vertical-centering
</template>

<script>
import VerticalCentering from './modules/vertical-centering'
export default {
  name: 'app',
  components: {
    VerticalCentering
  }
}
</script>

<style lang="stylus">
#app
  max-width 1200px
  width 100%
  margin 40px auto 0

  ul
    margin-bottom 40px
</style>
