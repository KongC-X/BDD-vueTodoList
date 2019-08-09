import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

describe('Header 测试', () => {
  it('Header 包含 input 框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })

  it('Header 中 input 框出始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('Header 中 input 发生变化，数据应该发生变化', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('garen')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('garen')
  })

  it('Header 中 input 输入回车，无内容, 无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('Header 中 input 输入回车，有内容, 向外发射事件, 清空输入框内容', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('garen')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
