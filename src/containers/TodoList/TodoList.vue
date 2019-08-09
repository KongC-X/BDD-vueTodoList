<template>
  <div>
    <h1>TodoList</h1>
    <todo-header></todo-header>
  </div>
</template>

<script>
import TodoHeader from './components/Header.vue'
export default {
  name: 'Header',
  components: {
    TodoHeader
  },
  props: {}
}
</script>

<style scoped lang="stylus">
</style>
