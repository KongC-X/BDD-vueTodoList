import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'

describe('TodoList.vue', () => {
  it('组件正常渲染', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.exists()).toBe(true)
  })
})
