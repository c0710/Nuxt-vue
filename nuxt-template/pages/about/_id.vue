<template>
  <div class="about-detail">
    <h3>about id</h3>
  </div>
</template>
<script>
  export default {
    validate ({params}) {
      return params.id > 5
    },
    created () {
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>
</style>
