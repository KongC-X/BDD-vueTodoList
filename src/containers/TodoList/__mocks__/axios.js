const undoList = {
  success: true,
  data: [
    { status: 'div', value: 'zhang' },
    { status: 'div', value: 'yiming' }
  ]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        if (this.success) {
          resolve(undoList)
        } else {
          reject(new Error())
        }
      })
    }
  }
}
