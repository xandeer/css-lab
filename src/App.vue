<template lang="pug">
#app
  header CSS LAB
  h1 Table of Contents
  ul
    li(v-for="item in contents")
      a(:href="item.href", v-text="item.name")
  main
    vertical-centering
</template>

<script>
import VerticalCentering from './modules/vertical-centering'

const CONTENTS = [
  {
    name: 'Vertical Centering',
    href: `#${VerticalCentering.name}`
  }
]

export default {
  name: 'app',
  data() {
    return {
      contents: CONTENTS
    }
  },
  components: {
    VerticalCentering
  }
}
</script>

<style lang="stylus">
#app
  max-width 1200px
  width 100%
  margin 40px auto 0

  ul
    margin-bottom 40px

  main > article
    width 100%
</style>
