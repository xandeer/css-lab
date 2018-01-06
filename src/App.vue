<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
  max-width 1200px
  min-width 700px
  margin 40px auto 0

  @media screen
    min-width 100%
</style>
