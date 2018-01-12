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

const boxStyle =
  '.multiple-borders-box\n   background yellowgreen\n   width 12em\n   min-height 8em\n   border-radius 3em\n\n'

export default {
  name: 'multiple-borders',
  components: {
    Container
  },
  data() {
    return {
      boxShadow: boxStyle + '.box-shadow\n   box-shadow 0 0 0 1em #655, 0 0 0 1.5em deeppink',
      outline: boxStyle + '.outline\n   border 1em solid #655\n   outline .5em solid deeppink'
    }
  }
}
</script>

<style lang="stylus">
.multiple-borders-box
  background yellowgreen
  width 12em
  min-height 8em
  border-radius 3em

  &.box-shadow
  &.outline
    margin 4em auto

.box-shadow
  box-shadow 0 0 0 1em #655,
             0 0 0 1.5em deeppink

.outline
  border 1em solid #655
  outline .5em solid deeppink
</style>
