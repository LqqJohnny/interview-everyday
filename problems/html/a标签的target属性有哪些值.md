#### a标签的target有哪些值？

_blank  在新页面打开

_self  [默认值] 在当前页面打开

_top  在顶层的框架中打开 ， [常用在iframe]

_parent 在父框架中打开  [常用在iframe]

‘任意字符’ 如果要打开的页面已经打开过了， 则直接跳转到那个页面并刷新， 如果没打开过，则新页面打开。


_blank 用的比较多 ， 在js中打开新页面 使用的是
`window.open(url , '_blank');`
也会用到 _blank 