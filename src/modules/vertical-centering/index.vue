<template lang="pug">
article#vertical-centering.vertical-centering
  header Vertical Centering
  hr

  container(:src="code")
    section.vertical-centering-container
      main.vertical-centering-item
        h1 Am I centered yet?
        p Center me, please!

</template>

<script>
import Container from '../item-container'

export default {
  name: 'vertical-centering',
  components: {
    Container
  },
  data() {
    return {
      code:
        "+prefix-classes('vertical-centering-')\n  .container\n    display flex\n    min-height 350px\n\n  .item\n    margin auto\n\n"
    }
  }
}
</script>

<style lang="stylus">
+prefix-classes('vertical-centering-')
  .container
    display flex
    min-height 360px

  .item
    margin auto
    background #5f5f5f linear-gradient(hsla(0, 0%, 100%, .2), transparent)
    color white
    padding 1em 3em
    border-radius .3em
    text-align center
</style>
