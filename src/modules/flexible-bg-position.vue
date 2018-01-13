<template lang="pug">
article.flexible-bg-position
  header Flexible background positioning
  hr

  section
    h2 background-position 方案
    container(:src="bgPosition")
      .flexible-bg-position-box.bg-position Code Pirate
  
  section
    h2 background-origin 方案
    container(:src="bgOrigin")
      .flexible-bg-position-box.bg-origin Code Pirate

  section
    h2 calc 方案
    container(:src="bgCalc")
      .flexible-bg-position-box.bg-calc Code Pirate
</template>

<script>
import Container from 'container'

const boxStyle =
  ".flexible-bg-position-box\n\tbackground url('~static/img/code-pirate.svg') no-repeat bottom right #58a\n\twidth 16em\n\tmin-height 10em\n\tpadding 1em\n\n"

export default {
  name: 'flexible-bg-position',
  components: {
    Container
  },
  data() {
    return {
      bgPosition: boxStyle + '.bg-position\n\tbackground-position right 1em bottom 1em',
      bgOrigin: boxStyle + '.bg-origin\n\tbackground-origin content-box',
      bgCalc: boxStyle + '.bg-calc\n\tbackground-position calc(100% - 1em) calc(100% - 1em)'
    }
  }
}
</script>

<style lang="stylus">
.flexible-bg-position-box
  background url('~static/img/code-pirate.svg') no-repeat bottom right #58a
  width 16em
  min-height 10em
  padding 1em

  &.bg-position
    background-position right 1em bottom 1em

  &.bg-origin
    background-origin content-box

  &.bg-calc
    background-position calc(100% - 1em) calc(100% - 1em)
</style>
