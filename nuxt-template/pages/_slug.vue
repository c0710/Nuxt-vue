<template>
  <div>
    <h1>{{$route.params.slug || 'HOME'}}</h1>
    <pre>{{userAgent}}</pre>
    <ul>
      <li> <nuxt-link to="'/">HOME</nuxt-link></li>
      <li v-for="(slug, index) in slugs" :key="index">
        <nuxt-link :to="{name: 'slug', params: {slug}}">{{slug}}</nuxt-link>
      </li>
    </ul>
    <button @click="showLoginErr">notify me!</button>
  </div>
</template>
<script>
  let miniToastr
  if (process.browser) {
    miniToastr = require('mini-toastr')
  }
  export default {
    mounted () {
      miniToastr.init()
    },
    notifications: {
      showLoginErr: {
        title: 'Welcome!',
        message: 'Hello from nuxt.js',
        type: 'info'
      }
    },
    asyncData ({store, route, userAgent}) {
      return {
        userAgent,
        slugs: [
          'foo',
          'bar',
          'baz'
        ]
      }
    }
  }
</script>

<style scoped>
</style>
