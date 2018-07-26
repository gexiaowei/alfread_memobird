const alfy = require('alfy')

alfy.output([
  {
    subtitle: 'Memobird G2',
    title: `打印文字:${alfy.input}`,
    arg: `text@${alfy.input}`
  },
  {
    subtitle: 'Memobird G2',
    title: `打印图片:${alfy.input}`,
    arg: `image@${alfy.input}`
  },
  {
    subtitle: 'Memobird G2',
    title: `打印网络地址:${alfy.input}`,
    arg: `url@${alfy.input}`
  }
])
