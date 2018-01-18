<template lang="pug">
article.stripes
  header Stripes
  hr

  section
    h2 Horizontal stripes
    container(:src="horizontal")
      .stripes-box.horizontal
  
  section
    h2 Vertical stripes
    container(:src="vertical")
      .stripes-box.vertical

  section
    h2 Diagonal stripes
    container(:src="diagonal")
      .stripes-box.diagonal

  section
    h2 Vertical stripes
    container(:src="diagonal60")
      .stripes-box.diagonal-60

</template>

<script>
import Container from 'container'

export default {
  name: 'stripes',
  components: {
    Container
  },
  data() {
    return {
      horizontal:
        '.horizontal\n\tbackground linear-gradient(#58a 33.3%, #fb3 0, #fb3 66.6%, #a3f 0)\n\tbackground-size 100% 45px',
      vertical:
        '.vertical\n\tbackground linear-gradient(to right, #58a 33.3%, #fb3 0, #fb3 66.6%. #a3f 0)\n\tbackground-size 100% 45px',
      diagonal:
        '.diagonal\n\tbackground linear-gradient(45deg, #58a 25%, #fb3 0, #fb3 50%, #58a 0, #58a 75%, #fb3 0)\n\tbackground-size 42.4264px 42.4264px',
      diagonal60:
        '.diagonal-60\n\tbackground repeating-linear-gradient(60deg, #58a, #58a 15px, #fb3 0, #fb3 30px, #a3f 0, #a3f 45px)'
    }
  }
}
</script>

<style lang="stylus">
.stripes-box
  width 16em
  min-height 10em

  &.horizontal
    background linear-gradient(#58a 33.3%, #fb3 0, #fb3 66.6%, #a3f 0)
    background-size 100% 45px

  &.vertical
    background linear-gradient(to right, #58a 33.3%, #fb3 0, #fb3 66.6%, #a3f 0)
    background-size 45px 100%

  &.diagonal
    background linear-gradient(45deg, #58a 25%, #fb3 0,
                                      #fb3 50%, #58a 0,
                                      #58a 75%, #fb3 0)
    background-size 42.4264px 42.4264px

  &.diagonal-60
    background repeating-linear-gradient(60deg,
                                         #fb3, #fb3 15px,
                                         #58a 0, #58a 30px,
                                         #a3f 0, #a3f 45px)
</style>
