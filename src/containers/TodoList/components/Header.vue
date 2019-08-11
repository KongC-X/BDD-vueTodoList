<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
          type="text"
          data-test="input"
          class="header-input"
          placeholder="Add TodoItem"
          :value="inputValue"
          @input="changeInputValue($event.target.value)"
          @keyup.enter="addTodoItem"
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  props: {},
  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.changeInputValue('') 
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
  }
}
</script>

<style scoped lang="stylus">
.header
  background: #333
  line-height: 60px
  .header-content
    width: 600px
    margin: 0 auto
    font-size: 30px
    color: #fff
    .header-input
      float: right
      margin-top: 5px
      outlint: none
      border-radius: 5px
      width: 75%
      padding: 10px
      font-size: 20px
      text-indent: 2em
      color: #333
</style> 
