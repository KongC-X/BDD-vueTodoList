const undoList = {
  success: true,
  data: [
    { status: 'div', value: 'garen' },
    { status: 'div', value: 'wang' }
  ]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        resolve(undoList)
      })
    }
  }
}
