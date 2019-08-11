import store from '../../../../store'

it('store 接受 changeInputValue 的commit时, inputValue发生变化', () => {
  const value = '123'
  store.commit('changeInputValue', value)
  expect(store.state.inputValue).toEqual(value)
})
