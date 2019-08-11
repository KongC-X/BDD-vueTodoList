<template>
  <div class="undolist">
      <div class="title" >
          正在进行
          <span class="count" data-test="count">{{list.length}}</span>
      </div>
      <ul>
          <li 
            v-for="(item, index) in list" 
            :key="index"
            data-test="item"
            class="item"
          >
              {{item}}
            <span 
                data-test="button" 
                @click="handleDelete(index)" 
                class="delete"
            >X</span>  
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

<style scoped lang="stylus">
.undolist {
    width: 600px;
    margin: 0 auto;
}
.title {
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
}
.count {
    margin-top: 5px;
    float: right;
    display: block;
    width: 20px;
    line-height: 20px;
    height: 20px;
    background: #e6e6e6;
    border-radius: 10px;
    color: #000;
    font-size: 12px;
    text-align: center;
}
.item {
    line-height: 32px;
    font-size: 14px;
    border-left: 5px solid #629a9a;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 2px;
    padding-left: 10px;
}
.delete {
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    display: block;
    width: 20px;
    line-height: 20px;
    height: 20px;
    background: #e6e6e6;
    border-radius: 10px;
    color: #000;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
}
</style> 
