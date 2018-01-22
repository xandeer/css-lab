<template lang="pug">
article.cicada-stripes
  header Cicada stripes
  hr

  container(:src="code")
    .cicada-stripes-box
</template>

<script>
import Container from 'container'

export default {
  name: 'cicada-stripes',
  components: {
    Container
  },
  data() {
    return {
      code:
        '.cicada-stripes-box\n\tbackground hsl(20, 40%, 90%)\n\tbackground-image linear-gradient(90deg, #fb3 11px, transparent 0), linear-gradient(90deg, #ab4 23px, transparent 0), linear-gradient(90deg, #655 41px, transparent 0)\n\tbackground-size 41px 100%, 61px 100%, 83px 100%'
    }
  }
}
</script>

<style lang="stylus">
.cicada-stripes-box
  width 16em
  min-height 10em
  background hsl(20, 40%, 90%)
  background-image linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 41px, transparent 0)
  background-size 41px 100%, 61px 100%, 83px 100%
</style>
