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

<style lang="stylus" scoped>
.header{
  line-height 60px
  background #333
}
.header-content{
  width 600px
  margin 0 auto
  color #ffffff
  font-size 28px
}
.header-input{
  float right
  width 360px
  margin-top 16px
  line-height 24px
  border-radius 5px
  outline none
  color #333
  text-indent: 2em
  text-indent 10px
}
</style>
