<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>感谢</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'jinkey',
      articles: []
    }
  }
}
</script>
