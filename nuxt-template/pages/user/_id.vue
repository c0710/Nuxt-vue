<template>
  <div class="user-detail">
    <h3>name: {{testData.name}}</h3>
    <h5>id: {{testData.id}}</h5>
    <div>
      <span>{{count}}</span>
      <button @click="increment">increment</button>
    </div>
  </div>
</template>
<script>
  import { getUserInfo } from '~/mock/api'
  import { mapState, mapMutations } from 'vuex'

  export default {
    validate ({params}) {
      return params.id > 5
    },
    data () {
      return {
        age: 234
      }
    },
    async asyncData ({params, error, redirect}) {
      const id = params.id
      const obj = await getUserInfo(id)
      if (id <= 5) {
        error({statusCode: 404, message: 'err test'})
        redirect('/user')
      }
      return {
        testData: obj
      }
    },
    computed: mapState([
      'count'
    ]),
    created () {
      console.log('mounted!')
      console.log(this)
    },
    methods: {
      ...mapMutations([
        'increment'
      ])
    }
  }
</script>

<style scoped>
</style>
