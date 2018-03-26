<template>
  <div class="user-detail">
    <h3>name: {{testData.name}}</h3>
    <h5>id: {{testData.id}}</h5>
  </div>
</template>
<script>
  import {getUserInfo} from '~/mock/api'
  export default {
    validate ({params}) {
      return params.id > 5
    },
    async asyncData (context) {
      const id = context.params.id
      const obj = await getUserInfo(id)
      return {
        testData: obj
      }
    },
    created () {
      console.log(this.$data)
    },
    methods: {

    }
  }
</script>

<style scoped>
</style>
