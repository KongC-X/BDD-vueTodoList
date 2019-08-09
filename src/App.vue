<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './containers/TodoList/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus"></style>
