<template>
  <div>
    <todo-header @add="addUndoItem"></todo-header>
    <undo-list :list="undoList" @delete="handleDeleteItem"></undo-list>
  </div>
</template>

<script>
import TodoHeader from './components/Header.vue'
import UndoList from './components/UndoList.vue'

export default {
  name: 'TodoList',
  components: {
    TodoHeader,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    },
    handleDeleteItem (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
