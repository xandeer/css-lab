<template lang="pug">
#app
  header CSS LAB
  h1 Table of Contents
  ul
    li(v-for="item in contents")
      a(:href="item.href", v-text="item.name")
  main
    translucent-borders#translucent-borders
    multiple-borders#multiple-borders
    vertical-centering#vertical-centering
</template>

<script>
import TranslucentBorders from './modules/translucent-borders'
import MultipleBorders from './modules/multiple-borders'
import VerticalCentering from './modules/vertical-centering'

const CONTENTS = [
  {
    name: 'Translucent Boders',
    href: '#translucent-borders'
  },
  {
    name: 'Mutiple Borders',
    href: '#multiple-borders'
  },
  {
    name: 'Vertical Centering',
    href: '#vertical-centering'
  }
]

export default {
  name: 'app',
  data() {
    return {
      contents: CONTENTS
    }
  },
  components: {
    TranslucentBorders,
    MultipleBorders,
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

  main > article
    width 100%
</style>
