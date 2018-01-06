<template lang="pug">
.demo
  section.demo-preview
    slot
  
  pre.demo-style.line-numbers 
    code.language-stylus(v-html="code", ref="code")
</template>

<script>
import cssbeautify from 'cssbeautify'
import Prism from 'prismjs'
import 'prismjs/components/prism-stylus'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

export default {
  name: 'demo',
  props: ['src'],
  computed: {
    code() {
      const beautified = cssbeautify(this.src, {
        indent: '  '
      })
      this.$nextTick(() => {
        Prism.highlightElement(this.$refs.code)
      })
      return beautified
    }
  }
}
</script>

<style lang="stylus">
.demo
  display flex
  justify-content flex-start
  align-items flex-start
  width 100%
  
  &-preview
    flex 50%

  &-style
    flex 50%
  
  &-preview
  &-style
    @media only screen and (orientation: portrait)
      width 100%
      flex 1


  @media only screen and (orientation: portrait)
    flex-direction column
    align-items center
</style>
