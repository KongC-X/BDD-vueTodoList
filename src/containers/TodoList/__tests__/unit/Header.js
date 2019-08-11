import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '@/utils/testUtil.js'

describe('Header 测试', () => {
  it('存在输入框', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input').at(0)
    expect(input.exists()).toBe(true)
  })

  it('inputValue 为空，输入框为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('')
  })

  it('输入框内容变化，inputValue跟随变化', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.setValue('garen')
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('garen')
  })

  it('输入框输入回车，无内容, 无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('输入框输入回车，有内容, 向外发射事件, 并清空内容', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.setValue('garen')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.inputValue).toBe('')
  })

  it('UI快照', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
})
