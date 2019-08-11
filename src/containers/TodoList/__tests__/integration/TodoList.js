import { mount } from '@vue/test-utils'
import TodoList from '../../TodoList'
import { findTestWrapper } from '../../../../utils/testUtil'

describe('BDD TodoList Test', () => {
  it(`
    1. 用户会在header输入框输入内容
    2. 用户会点击回车按钮
    3. 列表项应该增加用户输入内容的列表项
  `, () => {
    const wrapper = mount(TodoList)
    const inputEl = findTestWrapper(wrapper, 'input')
    const content = 'garen'
    inputEl.setValue(content)
    inputEl.trigger('change') 
    inputEl.trigger('keyup.enter')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(listItems.length).toBe(1)
    expect(listItems.at(0).text()).toContain(content)  
  })
})
