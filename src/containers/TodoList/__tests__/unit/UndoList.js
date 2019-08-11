import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWrapper } from '@/utils/testUtil.js'

describe('UndoList 测试', () => {
  it('参数 list 为 [], count 为 0, list 长度为 0', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    })
    const countEl = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item') 
    expect(countEl.at(0).text()).toBe('0')
    expect(listItems.length).toEqual(0)
  })

  it('参数 list 为 [1,2,3], count 为 3, list 长度为3，并且包含删除按钮 ', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ] }
    })
    const countEl = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'button')  
    expect(countEl.at(0).text()).toBe('3')
    expect(listItems.length).toEqual(3)
    expect(deleteButtons.length).toEqual(3)
  })

  it('点击删除按钮，向外发射delete事件 ', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ] }
    })
    const deleteButton = findTestWrapper(wrapper, 'button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })
})
