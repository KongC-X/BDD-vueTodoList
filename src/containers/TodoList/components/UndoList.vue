<template>
  <div class="undo-list">
      <div class="" data-test="count">{{list.length}}</div>
      <ul>
          <li 
            v-for="(item, index) in list" 
            :key="index"
            data-test="item"
          >
              {{item}}
            <span data-test="button" @click="handleDelete(index)">X</span>  
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped lang="stylus"></style> 
