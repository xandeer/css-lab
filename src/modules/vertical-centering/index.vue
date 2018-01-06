<template lang="pug">
article#vertical-centering.vertical-centering
  header Vertical Centering

  demo.vertical-centering-demo(:src="code")
    section.vertical-centering-container
      main.vertical-centering-item
        h1 Am I centered yet?
        p Center me, please!

</template>

<script>
import Demo from './components/demo'

export default {
  name: 'vertical-centering',
  components: {
    Demo
  },
  data() {
    return {
      code:
        "+prefix-classex('vertical-centering-')\n  .container\n    display flex\n    min-height 350px\n\n  .item\n    margin auto\n"
    }
  }
}
</script>

<style lang="stylus">
.vertical-centering
  width 100%

  &-container
    display flex
    min-height 350px
    background #373737

  &-item
    margin auto
    background #5f5f5f
    color #f5f5f5
    padding 1em
    text-align center
</style>
