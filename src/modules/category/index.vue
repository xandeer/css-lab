<template lang="pug">
main.category
  header CSS Lab
  
  article
    ul.category-items
      li.category-item(v-for="item in categories")
        router-link(:to="{ name: item }", v-text="item")
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      categories: ['Vertical Centering']
    }
  }
}
</script>
