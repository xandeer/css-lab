<template lang="pug">
.demo
  section.demo-preview
    slot
  
  pre.demo-style.line-numbers 
    code.language-stylus(v-html="src", ref="code", data-language="stylus")
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import Prism from 'prismjs'

import 'prismjs/components/prism-stylus'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
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
  flex-wrap wrap
  width 100%

+prefix-classes('demo-')
  .preview
  .style
    width 50%

    @media (max-width : 800px)
      width 100%
</style>
