<template lang="pug">
.item-container
  section.item-container-preview
    slot
  
  pre.item-container-style.line-numbers 
    code.language-stylus(v-html="code", ref="code", data-language="stylus")
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
  name: 'item-container',
  props: ['src'],
  computed: {
    code() {
      return `// ${this.$parent.$options._componentTag}\n${this.src}`
    }
  },
  mounted() {
    Prism.highlightElement(this.$refs.code)
  }
}
</script>

<style lang="stylus">
.item-container
  display flex
  flex-wrap wrap
  width 100%

  code[class*="language-"]
    tab-size 2

+prefix-classes('item-container-')
  .preview
    background #373737
  
    & > div
      margin 4em auto

  .preview
  .style
    width 50%

    @media (max-width : 800px)
      width 100%
</style>
