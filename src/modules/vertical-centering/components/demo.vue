<template lang="pug">
.demo
  section.demo-preview
    slot
  
  pre.demo-css.line-numbers 
    code.language-css(v-html="code", ref="code")
</template>

<script>
import cssbeautify from 'cssbeautify'
import Prism from 'prismjs'
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
      return Prism.highlight(beautified, Prism.languages.css)
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
    flex 40%

  &-css
    flex 60%
</style>
