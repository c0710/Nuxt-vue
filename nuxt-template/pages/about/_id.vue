<template>
  <div class="about-detail">
    <h3>about id</h3>
  </div>
</template>
<script>
  import {getUserInfo} from '~/mock/api'
  export default {
    validate ({params}) {
      return params.id > 5
    },
    asyncData (context) {

    },
    created () {
      console.log(this.$route.params)
      console.log(getUserInfo)
    }
  }
</script>

<style scoped>
</style>
