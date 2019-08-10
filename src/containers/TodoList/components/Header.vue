<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
          type="text"
          data-test="input"
          class="header-input"
          v-model="inputValue"
          @keyup.enter="addTodoItem"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
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
