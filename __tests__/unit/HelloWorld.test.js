import { shallowMount } from '@vue/test-utils'
// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// describe('HellWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const root = document.createElement('div')
//     root.setAttribute('id', 'root')
//     document.body.appendChild(root)
//     new Vue({
//       render: h => h(HelloWorld)
//     }).$mount('#root')
//     expect(document.querySelectorAll('.hello').length).toBe(1)
//     // expect(document.querySelectorAll('#root').length).toBe(1)
//   })
// })

describe('HellWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'garen'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toEqual(msg)
    expect(wrapper.contains('.hello')).toBe(true)
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.props('msg')).toBe(msg)
    wrapper.setProps({ msg: 'dell' })
    expect(wrapper.vm.msg).toEqual('dell')
    expect(wrapper.classes('hello')).toBe(true)
    expect(wrapper.exists()).toBe(true)
  })
})

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
