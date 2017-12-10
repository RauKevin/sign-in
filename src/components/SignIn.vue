<template>
  <div id="container">
    <h3>{{msg}} </h3>

  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      msg: 'Sign in here!'
    }
  }
}
</script>

<style>
#container {
    border: 1px black solid;
}
</style>
