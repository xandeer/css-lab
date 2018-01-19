<template lang="pug">
article.complex-bg
  header Complex background
  hr

  section
    h2 Blueprint
    container(:src="blueprint")
      .complex-bg-box.blueprint
  
  section
    h2 Polka
    container(:src="polka")
      .complex-bg-box.polka

  section
    h2 Checkerboard
    container(:src="checkerboard")
      .complex-bg-box.checkerboard
</template>

<script>
import Container from 'container'

export default {
  name: 'complex-bg',
  components: {
    Container
  },
  data() {
    return {
      blueprint:
        '.blueprint\n\tbackground #58a\n\tbackground-image linear-gradient(white 2px, transparent 0), linear-gradient(90deg, white 2px, transparent 0), linear-gradient(hsla(0,0,1,.3) 1px, transparent 0), linear-gradient(90deg, hsla(0,0,1,.3) 1px, transparent 0)\n\tbackground-size 75px 75px, 75px 75px, 15px 15px, 15px 15px',
      polka:
        '.polka\n\tbackground #655\n\tbackground-image radial-gradient(tan 30%, transparent 0), radial-gradient(tan 30%, transparent 0)\n\tbackground-size 30px 30px\n\tbackground-position 0 0, 15px 15px',
      checkerboard:
        '.checkerboard\n\tbackground #eee\n\tbackground-image linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0), linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0)\n\tbackground-position 0 0, 15px 15px\n\tbackground-size 30px 30px'
    }
  }
}
</script>

<style lang="stylus">
.complex-bg-box
  width 16em
  min-height 10em

.complex-bg
  .blueprint
    background #58a
    background-image linear-gradient(white 2px, transparent 0),
      linear-gradient(90deg, white 2px, transparent 0),
      linear-gradient(hsla(0,0,1,.3) 1px, transparent 0),
      linear-gradient(90deg, hsla(0,0,1,.3) 1px, transparent 0)
    background-size 75px 75px, 75px 75px, 15px 15px, 15px 15px
  
  .polka
    background #655
    background-image radial-gradient(tan 30%, transparent 0),
      radial-gradient(tan 30%, transparent 0)
    background-size 30px 30px
    background-position 0 0, 15px 15px

  .checkerboard
    background #eee
    background-image linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0),
      linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0)
    background-position 0 0, 15px 15px
    background-size 30px 30px
</style>
