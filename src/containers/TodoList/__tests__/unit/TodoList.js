import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'

describe('TodoList.vue', () => {
  it('组件正常渲染', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.exists()).toBe(true)
  })

  it('TodoItem 渲染时， undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 监听Header的add事件会执行addUndoItem, 增加一个内容', () => {
    const content = 'garen'
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add', content)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([content])
  })
})
