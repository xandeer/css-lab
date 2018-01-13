<template lang="pug">
article.multiple-borders
  header Multiple Borders
  hr

  section
    h2 box-shadow 方案
    container(:src="boxShadow")
      .multiple-borders-box.box-shadow
  
  section
    h2 outline 方案
    container(:src="outline")
      .multiple-borders-box.outline

</template>

<script>
import Container from 'container'

const boxStyle = '.multiple-borders-box\n\tbackground #58a\n\twidth 12em\n\tmin-height 8em\n\tborder-radius 3em\n\n'

export default {
  name: 'multiple-borders',
  components: {
    Container
  },
  data() {
    return {
      boxShadow: boxStyle + '.box-shadow\n\tbox-shadow 0 0 0 1em #655, 0 0 0 1.5em deeppink',
      outline: boxStyle + '.outline\n\tborder 1em solid #655\n\toutline .5em solid deeppink'
    }
  }
}
</script>

<style lang="stylus">
.multiple-borders-box
  background #58a
  width 12em
  min-height 8em
  border-radius 3em

  &.box-shadow
    box-shadow 0 0 0 1em #655,
              0 0 0 1.5em deeppink

  &.outline
    border 1em solid #655
    outline .5em solid deeppink
</style>
