<template>
  <div>
    <todo-header @add="addUndoItem"></todo-header>
    <ul>
      <li v-for="item in undoList" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import TodoHeader from './components/Header.vue'
export default {
  name: 'TodoList',
  components: {
    TodoHeader
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
