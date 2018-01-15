<template lang="pug">
article.inner-rounding
  header Inner rounding
  hr

  section
    h2 两个元素的方案
    container(:src="twoElements")
      .inner-rounding-box.two-elements
        div I have a nice subtle inner rounding, don't I look pretty?
  
  section
    h2 单元素方案
    container(:src="oneElement")
      .inner-rounding-box.one-element
        | I have a nice subtle inner rounding, don't I look pretty?

</template>

<script>
import Container from 'container'

export default {
  name: 'inner-rounding',
  components: {
    Container
  },
  data() {
    return {
      twoElements:
        '.tow-elements\n\tbackground #999\n\tpadding .8em\n\n\t& > div\n\t\tbackground tan\n\t\tborder-radius .6em\n\t\tpadding 1em',
      oneElement:
        '.one-element\n\tpadding 1em\n\tbackground tan\n\tborder-radius .8em\n\toutline .8em solid #999\n\tbox-shadow 0 0 0 .4em #999'
    }
  }
}
</script>

<style lang="stylus">
.inner-rounding-box
  max-width 12em
  font-size 1.2em

  &.two-elements
    background #999
    padding .8em

    & > div
      background tan
      border-radius .6em
      padding 1em
  
  &.one-element
    padding 1em
    background tan
    border-radius .8em
    outline .8em solid #999
    box-shadow 0 0 0 .4em #999
</style>
