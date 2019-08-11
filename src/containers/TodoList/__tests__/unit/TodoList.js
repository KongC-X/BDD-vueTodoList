import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'

describe('TodoList 测试', () => {
  it('组件存在', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.exists()).toBe(true)
  })

  it('初始时, undoList为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('执行addUndoItem, undoList内容增加', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })

  it('调用UndoList传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('执行handleDeletetItem, undoList内容减少', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleDeleteItem(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })
})
