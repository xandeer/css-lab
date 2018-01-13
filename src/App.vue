<template lang="pug">
#app
  header CSS LAB
  h1 Table of Contents
  ul
    li(v-for="item in contents")
      a(:href="'#' + item.href", v-text="item.name")
  main
    translucent-borders#translucent-borders
    multiple-borders#multiple-borders
    flexible-bg-position#flexible-bg-position
    vertical-centering#vertical-centering
</template>

<script>
import TranslucentBorders from './modules/translucent-borders'
import MultipleBorders from './modules/multiple-borders'
import FlexibleBgPosition from './modules/flexible-bg-position'
import VerticalCentering from './modules/vertical-centering'

const CONTENTS = [
  {
    name: 'Translucent boders',
    href: 'translucent-borders'
  },
  {
    name: 'Mutiple borders',
    href: 'multiple-borders'
  },
  {
    name: 'Flexible background position',
    href: 'flexible-bg-position'
  },
  {
    name: 'Vertical centering',
    href: 'vertical-centering'
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
    FlexibleBgPosition,
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
