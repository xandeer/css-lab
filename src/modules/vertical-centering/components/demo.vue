<template lang="pug">
.demo
  section.demo-preview
    slot
  
  pre.demo-style.line-numbers 
    code.language-stylus(v-html="src", ref="code", data-language="stylus")
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-stylus'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

export default {
  name: 'demo',
  props: ['src'],
  mounted() {
    Prism.highlightElement(this.$refs.code)
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
