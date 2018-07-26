const alfy = require('alfy')
const Memobird = require('memobird')

const memobird = new Memobird({

})
const [type, content] = (alfy.input || '').split(/@(.+)/)
;(async () => {
  try {
    await memobird.init()
    switch (type) {
      case 'text':
        await memobird.printText(content)
        break
      case 'image':
        await memobird.printImage(content)
        break
      case 'url':
        await memobird.printUrl(content)
        break
      default:
        break
    }
    console.log('打印成功')
  } catch (error) {
    console.log(`打印失败:${error.message}`)
  }
})()
