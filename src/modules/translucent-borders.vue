<template lang="pug">
article.translucent-borders
  header Translucent Borders
  hr

  container(:src="code")
    .translucent-borders-box
      | Can I haz semitransparent borders? Pretty please?

</template>

<script>
import Container from 'container'

export default {
  name: 'translucent-borders',
  components: {
    Container
  },
  data() {
    return {
      code:
        '.translucent-borders-box\n  border 10px solid hsla(0,0%,100%,.5)\n  background #d2d2d2\n  backgound-clip padding-box\n\n'
    }
  }
}
</script>

<style lang="stylus">
.translucent-borders-box
  border 10px solid hsla(0,0%,100%, .5)
  background #d2d2d2
  background-clip padding-box

  color #2d2d2d
  max-width 12em
  border-radius .5em
  font-size 2em
  padding 1em .6em
  line-height 1.2
  margin 2em auto
</style>
