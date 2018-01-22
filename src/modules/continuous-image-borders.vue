<template lang="pug">
article.continuous-image-borders
  header Continuous image borders
  hr

  section
    h2 Image borders
    container(:src="simple")
      .continuous-image-borders-box.simple
    
  section
    h2 Vintage envelope
    container(:src="envelope")
      .continuous-image-borders-box.envelope
    
  section
    h2 Marching ants
    container(:src="ants")
      .continuous-image-borders-box.marching-ants
</template>

<script>
import Container from 'container'

export default {
  name: 'continuous-image-borders',
  components: {
    Container
  },
  data() {
    return {
      simple:
        ".simple\n\tbackground linear-gradient(#777, #666) padding-box, url('~static/img/stone-art.jpg') border-box 0 / cover",
      envelope:
        '.envelope\n\tbackground linear-gradient(#777, #666) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 3em 3em',
      ants:
        '.marching-ants\n\t@keyframes ants\n\t\tto\n\t\t\tbackground-position 100%\n\n\tborder-width 1px\n\tbackground linear-gradient(#777, #666) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / .8em .8em\n\tanimation ants 12s linear infinite'
    }
  }
}
</script>

<style lang="stylus">
.continuous-image-borders-box
  width 16em
  min-height 10em
  padding 1em
  border 1em solid transparent

.continuous-image-borders
  .simple
    background linear-gradient(#777, #666) padding-box, url('~static/img/stone-art.jpg') border-box 0 / cover
  
  .envelope
    background linear-gradient(#777, #666) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 3em 3em

  .marching-ants
    @keyframes ants
      to
        background-position 100%
    
    border-width 1px
    background linear-gradient(#777, #666) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / .8em .8em
    animation ants 12s linear infinite
</style>
