<template>
  <div>
    <input
        type="text"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
    >
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
</style>
